function tabHandler (evt) {
  if (evt.key !== 'Tab') {
    return;
  }

  document.documentElement.classList.add('js-tab--active');
  document.addEventListener('click', clickHandler);
  window.removeEventListener('keydown', tabHandler);
}

function clickHandler () {
  document.documentElement.classList.remove('js-tab--active');
  document.removeEventListener('click', clickHandler);
  window.addEventListener('keydown', tabHandler);
}

document.documentElement.classList.add('js-tab');
window.addEventListener('keydown', tabHandler);
