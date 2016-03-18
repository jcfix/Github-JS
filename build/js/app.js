(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "f3e6a48c80583843f72aecc17212d22a01af5031";

},{}],2:[function(require,module,exports){
// exports.Github = function(argument){
//   this.argument = argument;
// };
//
// exports.Github.prototype.method = function() {
//
// };

exports.getRepos = function() {
  $.get('')
}

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var Constructor = require('../js/function-name.js').Constructor;

$(document).ready(function() {

var newConstructor = new Constructor();


});


/* Front-end User interface (jquery) code goes in this file */

},{"../js/function-name.js":2,"./../.env":1}]},{},[3]);
