'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var _require=require("objection"),Model=_require.Model,_require2=require("ex-objection-query-builder"),ExObjectionQueryBuilder=_require2.ExObjectionQueryBuilder,_require3=require("../validator/CustomValidator"),CustomValidator=_require3.CustomValidator,BaseModel=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:"createValidator",value:function createValidator(){return new CustomValidator}},{key:"getYupSchema",value:function getYupSchema(a){try{var b=this.yupSchema;if(a){if(!b)return;var c=Object.keys(b.describe().keys||{});b=b.fork(c,function(a){return a.optional()}).prefs({noDefaults:!0});}return b.options({messages:{"string.base":"deve ser do tipo texto","string.empty":"n\xE3o pode estar vazio","string.email":"deve ser um email v\xE1lido","any.required":"\xE9 obrigat\xF3rio","object.unknown":"n\xE3o \xE9 uma propriedade permitida"}})}catch(a){console.log(a);}}},{key:"QueryBuilder",get:function get(){return ExObjectionQueryBuilder}}]),b}(Model);// Converts a Joi error object to the format the Object.ValidationError constructor expects as input
// https://github.com/Vincit/objection.js/blob/aa3f1a0bb830211e478aa6a664561155c98850f4/lib/model/ValidationError.js#L10
module.exports={BaseModel:BaseModel};

var BaseModel$1 = /*#__PURE__*/Object.freeze({
  __proto__: null
});

var src=BaseModel$1;

module.exports = src;
