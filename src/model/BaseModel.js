const { Model } = require('objection');
const { ExObjectionQueryBuilder } = require('ex-objection-query-builder');
const { CustomValidator } = require('../validator/CustomValidator');

class BaseModel extends Model {
  static get QueryBuilder() {
    return ExObjectionQueryBuilder;
  }

  static createValidator() {
    return new CustomValidator();
  }

  static getYupSchema(patch) {
    try {

      let schema = this.yupSchema;

      if (patch) {

          if (!schema) {
            return;
          }

          const keys = Object.keys(schema.describe().keys || {});
            
          schema = schema
            .fork(keys, (s) => s.optional())
            .prefs({ noDefaults: true });

      }

      return schema.options({
        messages: {
          "string.base": 'deve ser do tipo texto',
          "string.empty": 'não pode estar vazio',
          "string.email": 'deve ser um email válido',
          "any.required": 'é obrigatório',
          "object.unknown": 'não é uma propriedade permitida'
        }
      });

    } catch(e) {
      console.log(e);
    }
  }
}

const internals = {};

// Converts a Joi error object to the format the Object.ValidationError constructor expects as input
// https://github.com/Vincit/objection.js/blob/aa3f1a0bb830211e478aa6a664561155c98850f4/lib/model/ValidationError.js#L10
internals.parseJoiValidationError = (validation, Model) => {
  const errors = validation.error.details;
  const validationInfo = {
      data: {},
      type: 'ModelValidation'
  };
  
  errors.forEach(error => {
      validationInfo.data[error.path] = validationInfo.data[error.path] || [];
      validationInfo.data[error.path].push({
          // Format matches data property documented here: http://vincit.github.io/objection.js/#validationerror
          message: error.message,
          keyword: error.type,
          params: error.context
      });
  });
  
  // inherited standard method on Objection models (http://vincit.github.io/objection.js/#createvalidationerror)
  // just handles creating a standard ValidationError
  return Model.createValidationError(validationInfo);
};

module.exports = { BaseModel };