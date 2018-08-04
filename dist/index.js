"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = _default;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AmiraliCoin = artifacts.require('./AmiraliCoin.sol');

var app = (0, _express.default)();
app.get('/', function (req, res, next) {
  res.send('Welcome!');
});

function _default(callback) {
  AmiraliCoin.deployed().then(function (instance) {
    console.log('Connected to Blockchain Successfully!');
  }).then(function (value) {
    app.listen(4000, function (err) {
      console.log('Server is listening on port 4000 ...');
    });
    // callback();
  });
}

// module.exports = exports["default"];