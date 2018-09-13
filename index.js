$(document).ready(function (){
});

function searchRepositories() {
  let searchTerm = $('#searchTerms').val()
  $.get(
    `https://api.github.com/search/repositories?q=${searchTerm}`,
    function(response) {
      let responseList = '<ul'> + response.items.map(item =>
        '<li>' + item.name +
        '- <a onclick="showCommits" src="#">Show Commits</a>'
        + '</li>').join() + '</ul>'
      $('#results').html(responseList)
      debugger;
  }).fail(displayError())
}

function displayError() {
  let error = `Error, cannot find page`
  $('#errors').html(error)
}
