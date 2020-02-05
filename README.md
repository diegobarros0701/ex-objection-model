# Extended Objection Query Builder

An extended model for Objection.js.  
This package adds extra methods to the Objection.js query builder.

## What it includes

* [ex-objection-query-builder](https://github.com/diegobarros0701/ex-objection-query-builder)

## Installation

```
npm install ex-objection-model
```
or
```
yarn add ex-objection-model
```

## How to use

Just require the package in your model and then extends the `BaseModel` class.  
Example:

```javascript
const { BaseModel } = require('ex-objection-model');

class User extends BaseModel {
  static tableName() {
    return 'user';
  }
}

User.whereLike(['name'], 'john'); // whereLike provided by extending BaseModel
```