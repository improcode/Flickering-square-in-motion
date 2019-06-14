const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 2;

const c = canvas.getContext("2d");

let x = 0;
let dx = 5;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  changeColorMoment = x % 50 === 0 || x === 0;

  if (changeColorMoment) {
    // console.log('Position: ' + x + '. Time to color change!')
    c.fillStyle = getRandomColor();
  }

  c.fillRect(x, 0, x * 0.1, x * 0.1);

  if (x > innerWidth - 150 || x < 0) {
    dx = -dx;
  }
  x += dx;
}

function getRandomColor() {
  var r = (255 * Math.random()) | 0,
    g = (255 * Math.random()) | 0,
    b = (255 * Math.random()) | 0;
  return "rgb(" + r + "," + g + "," + b + ")";
}

animate();
