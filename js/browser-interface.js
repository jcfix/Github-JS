var apiKey = require('./../.env').apiKey;
// var getRepos = require('../js/get-repositories.js').getRepos;
var getUserInfo = require('../js/get-user-info.js').getUserInfo;

$(document).ready(function() {
  $('form#generateUser').submit(function(event) {
    event.preventDefault();
    var username = $('#ghUsername').val();
    getUserInfo();

  });

});





















// $(document).ready(function() {
//   $('form#generateUser').submit(function(event) {
//     event.preventDefault();
//     var username = $('#ghUsername').val();
//     $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
//       console.log(response);
//       $('div.user-info').html('<h1>' + username + '</h1><h4>' + response.name + '</h4><p>' + response.company + '</p><p>' + response.location);
//       $('div.user-repos').html('<h4>' + response.repos_url + '</h4>');
//     }).fail(function(error) {
//       console.log(error.responseJSON.message);
//     });
//   });
//
// });
