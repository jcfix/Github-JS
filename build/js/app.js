(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "d12ab8df5f4bc2480214870d33833e2b972417d1";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getUserInfo = function() {
  var username = $('#ghUsername').val();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    console.log(response);

    if (response.avatar_url != null) {
      $('div.user-info').append('<img src ="' + response.avatar_url + '" alt ="user avatar image">');
    };
    $('div.user-info').append('<a href="https://www.github.com/' + response.login + '"><h1>' + response.login + '</h1></a>');
    if (response.name != null) {
      $('div.user-info').append('<h4>' + response.name + '</h4>');
    };
    if (response.company != null) {
      $('div.user-info').append('<p>' + response.company + '</p>');
    };
    if (response.email != null) {
      $('div.user-info').append('<p>' + response.email + '</p>');
    };
    if (response.location != null) {
      $('div.user-info').append('<p>' + response.location + '</p>');
    };
    if (response.followers != null) {
      $('div.user-info').append('<p>FOLLOWERS: ' + response.followers + '</p>');
    } else {
      $('div.user-info').append('<p>FOLLOWERS: 0</p>');
    };

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}

exports.getRepos = function(){
  var username = $('#ghUsername').val();
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(repos){
    console.log(repos);
    $('div.user-repos').append('<h2>Repositories</h2>');
    for(var i = 0; i < repos.length ; i++) {
      $('div.user-repos').append("<a href='https://github.com/" + username + "/" + repos[i].name + "'><h4>" + repos[i].name + "</h4></a><p>" + repos[i].description + "</p>");
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var getUserInfo = require('../js/github.js').getUserInfo;
var getRepos = require('../js/github.js').getRepos;

$(document).ready(function() {
  $('#clearResults').hide();
  $('form#generateUser').submit(function(event) {
    var username = $('#ghUsername').val();
    getUserInfo();
    getRepos();
    $('.header').addClass('result');
    $('form#generateUser')[0].reset();
    $('form#generateUser').hide();
    $('#clearResults').show();
    $('#clearResults').click(function() {
      $('.header').removeClass('result');
      $('div.user-info').empty();
      $('div.user-repos').empty();
      $('form#generateUser').show();
      $('div.btn-holder').hide();
    });
    $('div.btn-holder').show();
    event.preventDefault();
  });

});

},{"../js/github.js":2,"./../.env":1}]},{},[3]);
