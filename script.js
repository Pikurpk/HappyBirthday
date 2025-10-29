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

// 🔁 Change photo + message
function changePhoto() {
  photoElement.src = photos[index];
  messageElement.textContent = messages[index];
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
