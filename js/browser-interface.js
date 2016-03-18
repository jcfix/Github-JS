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
