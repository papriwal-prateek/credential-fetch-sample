const URL = './target.md'

function updateText(id, text) {
  document.getElementById(id).textContent = text
}

fetch(URL)
  .then(res => res.text())
  .then(text => updateText('fetch', text))

fetch(URL, { credentials: 'same-origin' })
  .then(res => res.text())
  .then(text => updateText('fetch-same-origin', text))

fetch(URL, { credentials: 'include' })
  .then(res => res.text())
  .then(text => updateText('fetch-include', text))

fetch(URL, { credentials: 'omit' })
  .then(res => res.text())
  .then(text => updateText('fetch-omit', text))
