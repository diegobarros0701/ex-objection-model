const { Validator } = require('objection');

class CustomValidator extends Validator {
  beforeValidate(args) {
    const json = args.json;
    const model = args.model;
    const options = args.options;
    const ctx = args.ctx;
    
    ctx.yupSchema = model.constructor.getYupSchema(options.patch);
  }

  validate(args) {
    const json = args.json;
    const model = args.model;
    const ctx = args.ctx;
    
    if (!ctx.yupSchema) {
        return json;
    }

    const validation = ctx.yupSchema.validate(json, { abortEarly: false });
    console.log({validation: validation.error});

    if (validation.error) {
      throw internals.parseJoiValidationError(validation, model.constructor);
    }

    return validation.value;
    
  }
}

module.exports = { CustomValidator };