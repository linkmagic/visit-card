var idFineButton = document.getElementById('idFineButton');
var backgroundLayer = idFineButton.getElementsByClassName('Background')[0];
var foregroundLayer = idFineButton.getElementsByClassName('Foreground')[0];

foregroundLayer.addEventListener('mousemove', function(event) {
  const skewValue = 1.0;

  if (event.offsetX <= foregroundLayer.clientWidth / 2) {
    foregroundLayer.style.transform = 'skewY(' + (-skewValue) + 'deg)';
    backgroundLayer.style.transform = 'skewY(' + skewValue + 'deg)';
  } else {
    foregroundLayer.style.transform = 'skewY(' + skewValue + 'deg)';
    backgroundLayer.style.transform = 'skewY(' + (-skewValue) + 'deg)';
  }
});

foregroundLayer.addEventListener('mouseenter', function(event) {
  // foregroundLayer.style.top = '-108px';
});

foregroundLayer.addEventListener('mouseout', function(event) {
  foregroundLayer.style.transform = 'skewY(0deg)';
  backgroundLayer.style.transform = 'skewY(0deg)';
  foregroundLayer.style.top = '-112px';
});