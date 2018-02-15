function mobileMenuOnClick() {
  var topNavMenu = document.getElementById('idTopNavMenu');
  var menuBtn = document.getElementById('idTopNavMenuBtn');

  topNavMenu.classList.toggle('responsive');
  menuBtn.classList.toggle('change');
}

/**********************************/
/* cube */

var rotateY = 0;

function toggleClassCube(element, className) {
  if (element.classList.contains(className) > 0) {
    return;
  } else {
    element.className = 'cube';
    element.classList.toggle(className);
  }
}

function displayMenu(name) {
  var cubeElem = document.getElementById('idCube');

  switch (name) {
    case 0: toggleClassCube(cubeElem, 'dspSideHome'); break;
    case 1: toggleClassCube(cubeElem, 'dspSideExperience'); break;
    case 2: toggleClassCube(cubeElem, 'dspSideSelfProjects'); break;
    case 3: toggleClassCube(cubeElem, 'dspSideContacts'); break;
  }
}

displayMenu(3);

(function setSideMaxHeight() {
  var sideFront = document.getElementById('idSideFront');
  var sideBack = document.getElementById('idSideBack');
  var sideRight = document.getElementById('idSideRight');
  var sideLeft = document.getElementById('idSideLeft');

  var maxHeight = 0;
  if (sideFront.offsetHeight > maxHeight) {
    maxHeight = sideFront.offsetHeight;
  }
  if (sideBack.offsetHeight > maxHeight) {
    maxHeight = sideBack.offsetHeight;
  }
  if (sideRight.offsetHeight > maxHeight) {
    maxHeight = sideRight.offsetHeight;
  }
  if (sideLeft.offsetHeight > maxHeight) {
    maxHeight = sideLeft.offsetHeight;
  }

  sideFront.style.height = maxHeight + 'px';
  sideBack.style.height = maxHeight + 'px';
  sideRight.style.height = maxHeight + 'px';
  sideLeft.style.height = maxHeight + 'px';
})();
