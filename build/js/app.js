(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "f3e6a48c80583843f72aecc17212d22a01af5031";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
// var getRepos = require('../js/get-repositories.js').getRepos;

$(document).ready(function() {
  $('form#generateUser').submit(function(event) {
    event.preventDefault();
    var username = $('#ghUsername').val();
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
      console.log(response);
      $('div.search-result').html('<h1>' + username + '</h1><div class="user-info"><h4>' + response.name + '</h4><p>' + response.company + '</p><p>' + response.location + '</div><div class="user-repos"><h4>' + response.repos_url + '</h4></div>');
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
  });

});

},{"./../.env":1}]},{},[2]);
