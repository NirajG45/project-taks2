let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let isRunning = false;

function updateDisplay() {
  const display = document.getElementById("display");
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  display.innerText = `${h}:${m}:${s}`;
}

function startStop() {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  isRunning = false;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    const laps = document.getElementById("laps");
    const li = document.createElement("li");
    li.textContent = document.getElementById("display").innerText;
    laps.appendChild(li);
  }
}

updateDisplay();

document.getElementById("start").addEventListener("click", startStop);
document.getElementById("stop").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", recordLap);

