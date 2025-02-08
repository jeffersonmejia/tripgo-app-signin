const d = document,
  $modalForget = d.querySelector('.modal-forget-container'),
  $body = d.querySelector('body')

function forgetClicked() {
  $modalForget.classList.toggle('hidden')
}

function showInterface() {
  setTimeout(() => {
    $body.classList.toggle('hidden')
  }, 300)
}

d.addEventListener('click', (e) => {
  if (
    e.target.matches('#forget') ||
    e.target.matches('.btn-group-modal small')
  ) {
    forgetClicked()
  }
})

d.addEventListener('DOMContentLoaded', (e) => {
  showInterface()
})
