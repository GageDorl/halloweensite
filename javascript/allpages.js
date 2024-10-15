var range = 1 / 1000;
var vw = range * Math.min(window.innerWidth, window.innerHeight);

document.documentElement.style.setProperty('--vw-scale', `${vw}`);

window.addEventListener('resize', () => {
  document.documentElement.style.setProperty('--vw-scale', `${range * Math.min(window.innerWidth, window.innerHeight)}`);
});