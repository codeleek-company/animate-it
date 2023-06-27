function _animate(el, duration = 2000) {
  _begin_animate(el);
  _leave_animate(el, duration);
}
function _begin_animate(el, delay = 1) {
  el.classList.add("--reset");
  setTimeout(() => {
    el.classList.add("--happening");
  }, delay);
}
function _leave_animate(el, delay = 1) {
  setTimeout(() => {
    el.classList.add("--leaving");
    setTimeout(() => {
      rm_el(el);
    }, 200);
  }, delay);
}
