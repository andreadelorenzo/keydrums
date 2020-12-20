// recuperare tutti gli elementi con classe key
const keys = document.querySelectorAll(".key");
// ascoltare l'evento transitionend per animare i pulsanti
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
// ascoltare l'evento keydown per riprodurre i suoni
window.addEventListener("keydown", playSound);
// funzione per riprodurre il suono
function playSound(event) {
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  const key = document.querySelector(`div[data-key='${event.keyCode}']`);
  if (!audio) {
    return;
  }
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
// funzione per animare i pulsanti pigiati
function removeTransition(event) {
  if (event.propertyName !== "transform") {
    return;
  } else {
    event.target.classList.remove("playing");
  }
}
