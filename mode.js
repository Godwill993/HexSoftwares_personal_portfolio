document.getElementById('toggle-mode').onclick = function() {
    const style = document.getElementById('theme-style');
  if(style.innerHTML.includes('#fff')) {
    style.innerHTML = 'body { background: #222; color: #fff; }';
  } else {
    style.innerHTML = 'body { background: #fff; color: #000; }';
  }
};