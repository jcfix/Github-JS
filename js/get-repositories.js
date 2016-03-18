var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var username = $('#ghUsername').val();
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(repos){
    console.log(repos);
    $('div.user-repos').append('<h2>Repositories</h2>');
    for(var i = 0; i < repos.length ; i++) {
      $('div.user-repos').append("<a href='https://github.com/" + username + "/" + repos[i].name + "'>" + repos[i].name + "</a><p>" + repos[i].description + "</p>");
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

// + moment(repos[i].created_at).format('L') + "</td></tr>"
