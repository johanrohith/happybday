function showWish() {
  document.getElementById("wish").style.display = "block";
  document.getElementById("wish1").style.display = "block";
  startConfetti();
}

// Simple confetti effect
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfettiPiece() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 10 + 10,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 5
  };
}

function startConfetti() {
  confetti = Array.from({ length: 150 }, createConfettiPiece);
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();

    c.y += Math.sin(c.d) + 2;
    c.x += Math.sin(c.tilt / 2);

    if (c.y > canvas.height) {
      confetti[i] = createConfettiPiece();
    }
  });
  requestAnimationFrame(animateConfetti);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
