let [ms, sec, min] = [0, 0, 0];
let display = document.getElementById("display");
let laps = document.getElementById("laps");
let interval = null;
function updateDisplay() {
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  let msDisplay = ms < 10 ? "0" + ms : ms;
  display.innerText = `${m}:${s}:${msDisplay}`;
}
function stopwatch() {
  ms += 1;
  if (ms == 100) {
    ms = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }
  updateDisplay();
}
function startStopwatch() {
  if (interval !== null) return;
  interval = setInterval(stopwatch, 10);
}
function pauseStopwatch() {
  clearInterval(interval);
  interval = null;
}
function resetStopwatch() {
  clearInterval(interval);
  interval = null;
  [ms, sec, min] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = "";
}
function lapTime() {
  const lapText = document.createElement("p");
  lapText.textContent = display.innerText;
  laps.appendChild(lapText);
}