function cr_el(name, parent = document.body) {
  var el = document.createElement("div");
  el.className = name;
  parent.appendChild(el);
  return el;
}
function rm_el(el) {
  el.remove();
}
function cr_overlay(parent = document.body, ad_name) {
  var overlay = cr_el(`overlay ${ad_name}`, parent);
  return overlay;
}
function cr_style(href) {
  var style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = `../css/themes/${href}.css`;
  document.head.appendChild(style);
}
document.body.dataset.animateIt.split(" ").forEach((el) => {
  cr_style(el);
});
function _alert(massage = "Thanks", duration = 2000, toggle = false) {
  var el = cr_el("alerter --pop-up");
  el.innerHTML = massage;
  if (!toggle) {
    _animate(el, duration);
  } else {
    _begin_animate(el);
  }
  return el;
}
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
  const timeout = setTimeout(() => {
    el.classList.add("--leaving");
    setTimeout(() => {
      rm_el(el);
    }, 200);
  }, delay);
  return timeout;
}
function cr_popup(
  elClass = "",
  data = {
    subject,
    text,
    button,
  }
) {
  data.subject = _assign(data.subject, "Confirming");
  data.text = _assign(data.text, "Please confim this form.");
  data.button = _assign(data.button, "Ok");
  var overlay = cr_overlay();
  _begin_animate(overlay);
  var pop_up = cr_el(`--pop-up ${elClass}`);
  pop_up.innerHTML = `
    <h2>${data.subject}</h2>
    <p>${data.text}</p>
    <div><a>${data.button}</a></div>
  `;
  _begin_animate(pop_up);
  return pop_up;
}
function _confirm_alert(
  data = {
    subject: "confirming",
    text: "Please confirm this form",
    button: "Ok",
  }
) {
  data.subject = _assign(data.subject, "confirming");
  data.text = _assign(data.text, "please confirm this form.");
  data.button = _assign(data.button, "ok");
  cr_popup(
    "pop_up",
    (data = { subject: data.subject, text: data.text, button: data.button })
  );
  document.querySelector(".pop_up a").addEventListener("click", _close_popup);
}
function _popup_choice(
  data = {
    subject: "Confirming",
    text: "Please confirm",
    button_1: "cancel",
    button_2: "confirm",
  },
  callback
) {
  data.subject = _assign(data.subject, "Confirming");
  data.text = _assign(data.text, "Please confirm");
  data.button_1 = _assign(data.button_1, "cancel");
  data.button_2 = _assign(data.button_2, "confirm");
  cr_popup("", {
    subject: data.subject,
    text: data.text,
    button: `${data.button_1}</a><a class="btn-confirm">${data.button_2}`,
  });
  var btn_confirm = document.querySelector(".btn-confirm");
  btn_confirm.addEventListener("click", _close_popup);
  btn_confirm.addEventListener("click", callback);
  document
    .querySelector(".--pop-up div a:first-child")
    .addEventListener("click", _close_popup);
}
function _close_popup() {
  _leave_animate(document.querySelector(".--pop-up"));
  _leave_animate(document.querySelector(".overlay"));
}
function _prompt(
  data = { subject: "Type in the form", button: "Send" },
  callback
) {
  data.subject = _assign(data.subject, "Type in the form");
  data.button = _assign(data.button, "Send");
  cr_popup("--prompt", {
    subject: data.subject,
    text: "<input type='text' class='prompt-input' />",
    button: data.button,
  });
  var a = document.querySelector(".--prompt a");
  a.classList.add("--disabled");
  var input = document.querySelector(".prompt-input");
  input.addEventListener("keyup", (ev) => {
    var canClose = false;
    if (input.value !== "") {
      canClose = true;
      a.classList.remove("--disabled");
    } else {
      a.classList.add("--disabled");
    }
    if (ev.key == "Enter") {
      a.click();
    }
  });
  var _en_callback = () => {
    if (a.className.indexOf("--disabled") <= -1) {
      callback(input.value);
      _close_popup();
    }
  };
  a.addEventListener("click", _en_callback);
}
function _notify(
  massage = "Thanks",
  options = { duration: 5000, onHoverPause: true }
) {
  var notification = _alert(massage, 5000, true);
  options.duration = _assign(options.duration, 5000);
  options.onHoverPause = _assign(options.onHoverPause, true);
  notification.classList.add("--notification");
  var duration = options.duration;
  notification.style.setProperty(
    "--notification-after-duration",
    `${duration}ms`
  );
  var newDuration,
    delay = Date.now();
  duration += 29;
  var timer = _leave_animate(notification, duration);
  var once = true;
  var overlay;
  if (options.onHoverPause) {
    notification.classList.add("--on-hover-pause");
    notification.addEventListener("mouseover", () => {
      clearTimeout(timer);
      if (once) {
        newDuration = duration - (Date.now() - delay);
        overlay = cr_overlay(notification, "--overlay-inboxed");
        var x_span = document.createElement("span");
        x_span.className = "x-span";
        overlay.appendChild(x_span);
        once = false;
        overlay.addEventListener("click", () => {
          _leave_animate(notification);
        });
      }
    });
    notification.addEventListener("mouseleave", () => {
      timer = _leave_animate(notification, newDuration);
      rm_el(overlay);
      once = true;
      delay = Date.now();
      duration = newDuration;
    });
  }
}
function _null(txt) {
  if (txt == null) return true;
  else return false;
}
function _assign(txt_1, txt_2) {
  if (_null(txt_1)) return txt_2;
  else return txt_1;
}
function _log(logCommand, callback) {
  var actions = logCommand.split(",");
  var logParams = actions[0].split(":");
  var mainCommand = logParams[0];
  var mainContext = logParams[1].split(",")[0],
    wiki = "";
  if (actions[1]) {
    var wikiLink = actions[1].trim().split("wiki:")[1];
    console.log(actions[1].trim().split("wiki:"));
    // if (wikiLink.trim() == "http" || wikiLink.trim() == "https") {
    //   wikiLink += actions[1].split(":")[2];
    // }
    wiki = `<hr> You can know more about that in <a class="link" href=${wikiLink}>${wikiLink}</a>`;
  }
  if (mainCommand == "Error") {
    cr_popup("--log", {
      subject: "Error occured",
      text: `<hr /> You have made an"${mainContext}" <hr>  Error has been occured at <span class="bg-yl">${Date()}</span>.${wiki}`,
      button: "Go back",
    });
  }
  document.querySelector(".--log div a").addEventListener("click", () => {
    _close_popup();
    callback();
  });
}
