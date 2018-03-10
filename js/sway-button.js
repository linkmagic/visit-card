(function swayButtonAnimate() {
  var idSwayButton = document.getElementById('idSwayButton');
  var backgroundLayer = idSwayButton.getElementsByClassName('Background')[0];
  var foregroundLayer = idSwayButton.getElementsByClassName('Foreground')[0];

  foregroundLayer.addEventListener('mousemove', function(event) {
    const skewValue = 1.0;
    const widthPart = foregroundLayer.clientWidth / 3;
    
    if (event.offsetX <= widthPart) {
      foregroundLayer.style.transform = 'skewY(' + (-skewValue) + 'deg)';
      backgroundLayer.style.transform = 'skewY(' + skewValue + 'deg)';
      foregroundLayer.style.top = '-100px';
      backgroundLayer.style.top = '-2px';
    }
    if (event.offsetX >= widthPart && event.offsetX <= widthPart * 2) {
      foregroundLayer.style.transform = 'skewY(0deg)';
      backgroundLayer.style.transform = 'skewY(0deg)';
      foregroundLayer.style.top = '-99px';
      backgroundLayer.style.top = '-2px';
    }
    if (event.offsetX >= widthPart * 2) {
      foregroundLayer.style.transform = 'skewY(' + skewValue + 'deg)';
      backgroundLayer.style.transform = 'skewY(' + -skewValue + 'deg)';
      foregroundLayer.style.top = '-100px';
      backgroundLayer.style.top = '-2px';
    }
  });

  foregroundLayer.addEventListener('mousedown', function(event) {
    foregroundLayer.style.top = '-97px';
    backgroundLayer.style.top = '-3px';
  });

  foregroundLayer.addEventListener('mouseup', function(event) {
    foregroundLayer.style.top = '-99px';
    backgroundLayer.style.top = '-2px';
  });

  foregroundLayer.addEventListener('mouseout', function(event) {
    foregroundLayer.style.transform = 'skewY(0deg)';
    backgroundLayer.style.transform = 'skewY(0deg)';
    foregroundLayer.style.top = '-100px';
    backgroundLayer.style.top = '0px';
  });
})();