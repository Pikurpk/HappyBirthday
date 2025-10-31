// ===================== CONFIG =====================
const photos = [
  "Images/photo1.jpg",
  "Images/photo2.jpg",
  "Images/photo3.jpg",
  "Images/photo4.jpg"
];

const messages = [
  "Wishing you endless happiness on your special day 💖",
  "May your day be filled with love and laughter 🎂",
  "You are truly special — enjoy your birthday to the fullest 🎉",
  "Keep shining bright like you always do 🌟"
];
// ====================================================

let index = 0;
const photoElement = document.getElementById("photo");
const messageElement = document.getElementById("message");
const titleElement = document.getElementById("mainTitle");

// 🎁 Get name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
if (name) titleElement.textContent = `🎉 Happy Birthday ${name} 🎉`;

// ✨ Typewriter effect for messages
function typeMessage(text) {
  messageElement.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    messageElement.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 50);
}

// 🔁 Change photo + message automatically
function changePhoto() {
  photoElement.classList.remove("fadeIn");
  void photoElement.offsetWidth; // restart animation

  photoElement.src = photos[index];
  photoElement.classList.add("fadeIn");

  typeMessage(messages[index]);
  index = (index + 1) % photos.length;
}

changePhoto();
setInterval(changePhoto, 4000);

// 🔊 Music Control
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔈 Music Playing";
  } else {
    music.pause();
    musicBtn.textContent = "🔊 Play Music";
  }
});

// 🎵 Auto-play when user first taps anywhere (for Android/iPhone)
document.body.addEventListener("click", function startMusic() {
  music.play().catch(() => {});
  document.body.removeEventListener("click", startMusic);
  musicBtn.textContent = "🔈 Music Playing";
});
