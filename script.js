function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const clock = document.getElementById("clock");
  clock.textContent = `${hours}:${minutes}:${seconds}`;

  if (hours >= 6 && hours < 18) {
    document.body.className = "day-theme";
  } else {
    document.body.className = "night-theme";
  }
}

setInterval(updateClock, 1000);
updateClock();
