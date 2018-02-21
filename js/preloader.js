var rotateY = 0,
    rotateX = 0;

function cudeRotation() {
  rotateX += 1;
  rotateY += 1;
  document.querySelector('.cube').style.transform =
    'rotateY(' + rotateY + 'deg)'+
    'rotateX(' + rotateX + 'deg)';
}

function rotate() {
  setInterval(cudeRotation, 24);
}

// rotate();
