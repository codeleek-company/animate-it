function animate(el, duration = 2000) {
  begin_animate(el);
  leave_animate(el, duration);
}
function begin_animate(el, delay = 1) {
  el.classList.add("--reset");
  setTimeout(() => {
    el.classList.add("--happening");
  }, delay);
}
function leave_animate(el, delay = 1) {
  setTimeout(() => {
    el.classList.add("--leaving");
    setTimeout(() => {
      rm_el(el);
    }, 200);
  }, delay);
}
