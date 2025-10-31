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
  "Love You Madam💖",
];
// ====================================================

let index = 0;
const photoElement = document.getElementById("photo");
const messageElement = document.getElementById("message");
const titleElement = document.getElementById("mainTitle");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// 🎁 Get name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
if (name) titleElement.textContent = `🎉 Happy Birthday ${name} 🎉`;

// ✨ Typewriter effect
function typeMessage(text) {
  messageElement.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    messageElement.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 50);
}

// 🔁 Change photo + message
function changePhoto() {
  photoElement.classList.remove("fadeIn");
  void photoElement.offsetWidth;
  photoElement.src = photos[index];
  photoElement.classList.add("fadeIn");
  typeMessage(messages[index]);
  index = (index + 1) % photos.length;
}

changePhoto();
setInterval(changePhoto, 4000);

// 🎶 MUSIC LOGIC (auto + manual)
let userInteracted = false;

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play().catch(() => {});
    musicBtn.textContent = "🔈 Music Playing";
  } else {
    music.pause();
    musicBtn.textContent = "🔊 Play Music";
  }
  userInteracted = true;
});

// 🔊 Play after first user tap anywhere
document.body.addEventListener("touchstart", startMusicOnce);
document.body.addEventListener("click", startMusicOnce);

function startMusicOnce() {
  if (!userInteracted) {
    music.play().then(() => {
      musicBtn.textContent = "🔈 Music Playing";
    }).catch(() => {
      console.log("Autoplay blocked, wait for button click");
    });
    userInteracted = true;
  }
  document.body.removeEventListener("touchstart", startMusicOnce);
  document.body.removeEventListener("click", startMusicOnce);
}
