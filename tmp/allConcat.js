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
