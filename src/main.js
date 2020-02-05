const { Model } = require('objection');
const { ExObjectionQueryBuilder } = require('ex-objection-query-builder');

class BaseModel extends Model {

  static get QueryBuilder() {
    return ExObjectionQueryBuilder;
  }

}

module.exports = { BaseModel };