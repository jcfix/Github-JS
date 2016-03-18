var apiKey = require('./../.env').apiKey;
// var getRepos = require('../js/get-repositories.js').getRepos;

$(document).ready(function() {
  $('form#generateUser').submit(function(event) {
    event.preventDefault();
    var username = $('#ghUsername').val();
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
      console.log(JSON.stringify(response));
      $('div.search-result').html('<h1>' + username + '</h1>');
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
  });

});
