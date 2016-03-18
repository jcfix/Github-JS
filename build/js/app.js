(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "f3e6a48c80583843f72aecc17212d22a01af5031";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getUserInfo = function() {
  var username = $('#ghUsername').val();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    console.log(response);

    if (response.avatar_url != null) {
      $('div.user-info').append('<img src ="' + response.avatar_url + '" alt ="user avatar image">');
    };
    $('div.user-info').append('<h1>' + response.login + '</h1>');
    if (response.name != null) {
      $('div.user-info').append('<h4>' + response.name + '</h4>');
    };
    if (response.company != null) {
      $('div.user-info').append('<p>' + response.company + '</p>');
    };
    if (response.email != null) {
      $('div.user-info').append('<p>' + response.company + '</p>');
    };
    if (response.location != null) {
      $('div.user-info').append('<p>' + response.location + '</p>');
    };

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}

// exports.getFollowers = function() {
//   var username = $('#ghUsername').val();
//   $.get('https://api.github.com/users/' + username + '/followers?access_token=' + apiKey).then(function(followers){
//     console.log(followers);
//     $('div.user-followers').append('<h4>FOLLOWERS<h4><br>');
//     var count = 0;
//     for(var i = 0; i < followers.length ; i++) {
//       $('div.users-followers').append('')
//     }
//   }).fail(function(error) {
//     console.log(error.responseJSON.message);
//   });
// }

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

// + moment(repos[i].created_at).format('L') + "</td></tr>"

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var getUserInfo = require('../js/github.js').getUserInfo;
// var getFollowers = require('../js/github.js').getFollowers;
var getRepos = require('../js/github.js').getRepos;

$(document).ready(function() {
  $('#clearResults').hide();
  $('form#generateUser').submit(function(event) {
    var username = $('#ghUsername').val();
    getUserInfo();
    // getFollowers();
    getRepos();
    $('form#generateUser')[0].reset();
    $('form#generateUser').hide();
    $('#clearResults').show();
    $('#clearResults').click(function() {
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
