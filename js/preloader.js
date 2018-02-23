var rotateCube = 0;

function cudeRotation() {
	if (rotateCube === 360) {
		rotateCube = 0;
	}
  rotateCube++;
  document.querySelector('.cube').style.transform =
    'rotateY(' + rotateCube + 'deg)'+
    'rotateX(' + rotateCube + 'deg)';
}

function rotate() {
  setInterval(cudeRotation, 50);
}

rotate();
