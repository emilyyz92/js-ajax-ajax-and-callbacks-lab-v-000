$(document).ready(function (){
});

function searchRepositories() {
  const searchTerm = $('#searchTerms').val()
  $.get(
    `https://api.github.com/search/repositories?q=${searchTerm}`,
    function(response) {
      let responseList = '<ul'> + response.items.map(item =>
        '<li>' + item.name +
        '- <a onclick="showCommits" src="#">Show Commits</a>'
        + '</li>').join() + '</ul>'
      $('#results').html(responseList)

  }).fail(
    debugger;
    displayError())
}

function displayError() {
  let error = `Error, cannot find page`
  $('#errors').html(error)
}

function displaySearch(response) {
  responseList = '<ul'> + response.items.map(item =>
    '<li>' + item.name +
    '- <a onclick="showCommits" src="#">Show Commits</a>'
    + '</li>').join() + '</ul>'
  $('#results').html(responseList)
}
