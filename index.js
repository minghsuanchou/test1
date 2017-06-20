document.getElementsByClassName('card')[0].addEventListener('click', function(e) {
  if (this.className.search('flipped') == -1) {
    this.className = this.className + ' flipped';
  } else {
    this.className = 'card';
  }
});

