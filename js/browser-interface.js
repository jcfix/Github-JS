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
