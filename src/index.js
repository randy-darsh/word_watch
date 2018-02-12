import $ from 'jquery'

$(document).ready(() => {
  fetch("https://wordwatch-api.herokuapp.com/api/v1/top_word")
  .then(response => { return response.json() })
  .then(data => {
    $('.word-count').prepend(
      "<div class='row'>" +
      `<div class="row-name">Word: ${Object.keys(data.word)[0]}</div>` +
      `<div class="row-number">Count: ${Object.values(data.word)[0]}</div>` +
      "</div>"
    )
  })
})

$(document).ready(() => {
  $('button').on('click', function(event) {
    var text = $('textarea').val()
    var wordArray = text.toLowerCase().split(" ")
    var counts = {}
    for (var i = 0, j = wordArray.length; i < j; i++) {
      counts[wordArray[i]] = (counts[wordArray[i]] || 0) + 1
    }
    $('.word-count').append(Object.keys(counts).forEach((word) => {
      "<div class='row'>" +
      `<div class="row-name">Word: <font size="${counts[word]}em">${word}</font></div>` +
      "</div>"
      // debugger
      })
    )
  })
})

$(document).ready(() => {
  function createNewWord(word) {
    var newWord = { "word": { "value": "${word}" } }
    fetch("https://wordwatch-api.herokuapp.com/api/v1/words", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWord)
    })
    .then(response => {
      return response.json()
    })
  }
})
