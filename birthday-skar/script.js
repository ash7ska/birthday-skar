const music = document.getElementById('bg-music');
const btn = document.getElementById('musicBtn');

btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.textContent = '🔊';
  } else {
    music.pause();
    btn.textContent = '🎵';
  }
});
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
