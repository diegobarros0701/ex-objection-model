# Extended Objection Query Builder

An extended query builder for Objection.js.  
This package adds extra methods to the Objection.js query builder.

## Installation

```
npm install ex-objection-query-builder
```
or
```
yarn add ex-objection-query-builder
```

## How to use

Just require the package in your model and then override the `QueryBuilder` method.  
Example:

```javascript
const { Model } = require('objection');
const { ExObjectionQueryBuilder } = require('ex-objection-query-builder');

class User extends Model {
  static get QueryBuilder() {
    return ExObjectionQueryBuilder;
  }
}
```

## Methods

All the available methods are listed below

### # whereLike(columns = [], value, options = {})

Search for results that **contains** the specified value at the specifieds columns.  

| Parameter | Type | Default | Description |
| -- | -- | -- | -- |
| `columns` | `string[]` | `[]` | An array containing the columns to filter  |
| `value` | `string` | `undefined` | The value to filter |
| `options` | `object` | `{}` | A set of configurations for the filter (see [options object](#options-object)) |

#### # options object

| Property | Type | Default | Description |
| -- | -- | -- | -- |
| `ignoreAccent` | `boolean` | `true` | Ignore words accents |
| `ignoreCase` | `boolean` | `true` | Ignore words case |
| `ignoreMask` | `boolean` | `true` | Remove any mask (`-.,()/\[]`) of the informed value |


**Important:**  

The `ignoreAccent` is working only with postgres because of the use of `unaccent`function.  
To use it you need to activate this function. For that just ran the following:

```
CREATE EXTENSION unaccent;
```  
  
The `ignoreCase` also works only with postgres because of the operator `ILIKE`
