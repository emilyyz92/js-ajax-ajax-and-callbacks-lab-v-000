$(document).ready(function (){
});

function searchRepositories() {
  const searchTerm = $('#searchTerms').val()
  debugger;
  $.get(
    `https://api.github.com/search/repositories?q=${searchTerm}`,
    response => displaySearch(response)).fail(
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

function showCommits() {
  
}
