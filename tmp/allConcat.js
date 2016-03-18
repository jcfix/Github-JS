var apiKey = require('./../.env').apiKey;
var getRepos = require('../js/github-interface.js').getRepos;
var getUserInfo = require('../js/github-interface.js').getUserInfo;

$(document).ready(function() {
  $('#clearResults').hide();
  $('form#generateUser').submit(function(event) {
    var username = $('#ghUsername').val();
    getUserInfo();
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

var apiKey = require('./../.env').apiKey;

exports.getUserInfo = function() {
  var username = $('#ghUsername').val();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    console.log(response);

    $('div.user-info').append('<h1>' + response.login + '</h1>');
    if (response.name != null) {
      $('div.user-info').append('<h4>' + response.name + '</h4>');
    };
    if (response.company != null) {
      $('div.user-info').append('<p>' + response.company + '</p>');
    };
    if (response.location != null) {
      $('div.user-info').append('<p>' + response.location + '</p>');
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

// + moment(repos[i].created_at).format('L') + "</td></tr>"
