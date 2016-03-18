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
