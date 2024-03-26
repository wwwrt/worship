document.addEventListener("DOMContentLoaded", () => {
  loadSongs();
});

function addSong() {
  let songTitle = document.getElementById("songTitle").value.trim();
  let songLink = document.getElementById("songLink").value.trim();
  if (songTitle && songLink) {
    let songs = JSON.parse(localStorage.getItem("songs")) || [];
    songs.push({ title: songTitle, link: songLink });
    localStorage.setItem("songs", JSON.stringify(songs));
    loadSongs(); // Reîncărcați lista de cântări
    document.getElementById("songTitle").value = ""; // Resetați valorile câmpurilor
    document.getElementById("songLink").value = "";
  } else {
    alert("Vă rugăm să completați ambele câmpuri.");
  }
}

function loadSongs() {
  let songs = JSON.parse(localStorage.getItem("songs")) || [];
  let songsList = document.getElementById("songsList");
  songsList.innerHTML = ""; // Golește lista pentru a evita duplicarea elementelor la reîncărcare

  songs.forEach((song, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <a href="${song.link}" target="_blank">${song.title}</a>
        <button onclick="deleteSong(${index})"><i class="fas fa-trash"></i></button>
    `;
    songsList.appendChild(li);
  });
}

function deleteSong(index) {
  let songs = JSON.parse(localStorage.getItem("songs")) || [];
  // Elimină cântarea de la indexul specificat
  songs.splice(index, 1);
  // Actualizează localStorage cu noul array de cântări
  localStorage.setItem("songs", JSON.stringify(songs));
  // Reîncarcă lista de cântări pentru a reflecta schimbarea
  loadSongs();
}

document.addEventListener("DOMContentLoaded", () => {
  loadSongs();
});
