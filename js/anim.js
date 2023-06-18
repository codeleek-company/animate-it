function cr_overlay() {
  var overlay = cr_el("overlay");
  return overlay;
}
function cr_el(name) {
  var el = document.createElement("div");
  el.className = name;
  document.body.appendChild(el);
  return el;
}
function rm_el(el) {
  el.remove();
}
function alerter(massage, duration = 2000) {
  var el = cr_el("alerter");
  el.innerHTML = massage;
  animate(el, duration);
}
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
function pop_up(
  subject = "confirming",
  text = "please confirm this form.",
  button = "ok"
) {
  var overlay = cr_overlay();
  begin_animate(overlay);
  var pop_up = cr_el("pop_up");
  pop_up.innerHTML = `
    <h2>${subject}</h2><p>${text}</p>
    <div><a onclick="pop_up_close(this.parentElement.parentElement)">${button}</a></div>
  `;
  begin_animate(pop_up);
}
function pop_up_choice(
  subject = "confirming",
  text = "Please confirm",
  button_1 = "cancel",
  button_2 = "confirm",
  callback
) {
  pop_up(subject, text, `${button_1}</a><a class="btn-confirm">${button_2}`);
  var btn_confirm = document.querySelector(".btn-confirm");
  btn_confirm.addEventListener("click", () => {
    pop_up_close(btn_confirm.parentElement.parentElement);
    callback();
  });
}
function pop_up_close(el) {
  leave_animate(el);
  leave_animate(document.querySelector(".overlay"));
}
pop_up_choice(
  "redirecting",
  "You will be redirected, be sure that the link is safe.",
  "come back",
  "go",
  () => {
    alerter("Thanks for filling up the requiremetn");
  }
);
