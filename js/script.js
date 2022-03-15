const switcher = document.querySelector('.switcher')
switcher.addEventListener('click', function () {
  const body = document.querySelector('body')
  const input = document.querySelector('input')
  if (input.checked) body.classList.add('sun')
  else body.classList.remove('sun')
})
