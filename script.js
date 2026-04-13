function checkPass() {
  let p = document.getElementById("pass").value;
  if (p === "fs") {
    window.location.href = "home.html";
  } else {
    alert("Wrong 😢");
  }
}

function go(page) {
  window.location.href = page;
}

function cutCake() {
  alert("Cake Cut 🎂❤️");
  window.location.href = "memories.html";
}

/* Music Control */
function toggleMusic() {
  let music = document.getElementById("music");
  if (music.paused) music.play();
  else music.pause();
}

let canvas = document.getElementById("fireworks");

if (canvas) {
  let ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function createFirework() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: x,
        y: y,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 6 + 2,
        radius: Math.random() * 3
      });
    }

    // Play sound
    let sound = document.getElementById("boom");
    if (sound) sound.play();
  }

  function animate() {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "hsl(" + Math.random() * 360 + ",100%,50%)";
      ctx.fill();

      p.speed *= 0.97;

      if (p.speed < 0.5) particles.splice(i, 1);
    });

    requestAnimationFrame(animate);
  }

  setInterval(createFirework, 800);
  animate();
}

/* Confetti */
setInterval(() => {
  let confetti = document.createElement("div");
  confetti.innerHTML = "🎊";
  confetti.style.position = "fixed";
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.top = "-10px";
  confetti.style.fontSize = "20px";
  document.body.appendChild(confetti);

  let fall = setInterval(() => {
    confetti.style.top = (parseFloat(confetti.style.top) + 2) + "px";
  }, 20);

  setTimeout(() => {
    clearInterval(fall);
    confetti.remove();
  }, 5000);
}, 300);