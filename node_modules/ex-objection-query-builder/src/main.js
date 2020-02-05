const { QueryBuilder } = require('objection');

class ExObjectionQueryBuilder extends QueryBuilder {

  /**
   * Filter the specified columns for the given value
   * 
   * @param {string[]} columns array of columns to filter
   * @param {string} value value to filter the columns
   * @param {{ ignoreAccent?: boolean, ignoreMask?: boolean, ignoreCase?: boolean }} options set of configurations for filter
   */
  whereLike(columns = [], value, options = {}) {
    if (columns.length == 0 || !value)
      return this;

    options = Object.assign({
      ignoreAccent: true,
      ignoreMask: true,
      ignoreCase: true
    }, options);

    let operator = options.ignoreCase ? 'ilike' : 'like';
    let rawQuery = '';

    if (options.ignoreMask) {
      value = removeMask(value);
    }

    this.where(function () {
      columns.forEach((column, index) => {
        if (options.ignoreAccent) {
          rawQuery = `unaccent(${column}::text) ${operator} unaccent(?)`;
        } else {
          rawQuery = `${column}::text ${operator} ?`;
        }

        if (index == 0) {
          this.whereRaw(rawQuery, '%' + value + '%');
        } else {
          this.orWhereRaw(rawQuery, '%' + value + '%');
        }
      });
    });

    return this;
  }
}

function removeMask(text) {
  return text.replace(/[-.,()\/\\\[\]]/, '');
}

module.exports = { ExObjectionQueryBuilder };