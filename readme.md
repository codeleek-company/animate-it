# DEV

<div style="display: flex; justify-content: space-between;"><img src="https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/354262053_118580681263551_2140061046569093118_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0wE09JkJ4IEAX_nSkEJ&_nc_ht=scontent.fcai22-4.fna&oh=00_AfAVwXmN-VKeD2qbsHoZR7WoZqebPwzM72xK_jRlwQNRpQ&oe=64941B39" alt="drawing" width="200" style="border-radius: 50%;" />
  <img src="https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/352563104_119099257878360_5006024896091772594_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=0wPDyupSVkYAX-PYqDJ&_nc_ht=scontent.fcai22-4.fna&oh=00_AfBQ0LCs36CJfhi3rqzOMC_ZMHF9ciEQs0WyjZFfrAknQg&oe=6494CC60" alt="drawing" width="200" />
</div>

## Animate-it@1.3.2

---

- [Installation](#Installation)
  - [Download](#Download)
  - [NPM-Installation](#NPM-Installation)
- [Docs](#Docs)
- [Feature](#Features)
- [Contact](#Contact)

---

### Installation

#### Download

- First of all, you are going to include the js file `anim.min.js`, or rather `anim.js` for developers.
  Then, you are going to add the `anim.min.css`, or rather `anim.css` for developers which is the style file.

> If you came from the previous versions, and you wonder where are the theme files, the answer is that, we have changed it.
> Now, if you want to include any theme file, just write it in `data-animate-style` as an attribute for the body element.

---

#### NPM-Installation

- Run `npm i dev-animate`.

- Then include the animate script `<script src="./node_modules/dev-animate/js/anim.min.js"></script>`.

- Then include the animate style `<link type="stylesheet" href="./node_modules/dev-animate/css/anim.min.css" />`.

---

### Docs

There are various built-in functions in this library.

1 - `_popup_choice({subject, text, button_1, button_2}, callback())`. this function is made to make a pop-up window
and you can add callback function, which will be called when the second action `confirm` is made like in

> You cannot pass any data through the `pop_up_choice()`. And It will appear with the default text.

2 - `_alert(massage, duration = 1000)`. Which is an enhanced alerter instead of the `window.alert(massage)`, because `window.alert(massage)` is a sync process.

3 - `_confirm_alert({subject, text, button})`. It is like `pop_up_choice()`, but with no return,
with only one choice. Actually, you can say that it is a toggle alerter.

4 - `_notify(massage, options = {})`. It is a alert, but with different style, and with timer-progress bar.

> Options Object has two properties.
> **onHoverPause**, which is the hover pause action. Its default is true
> **Duration**. And its default is 5000ms

5 - `_log(command, callback())`. Actually, it is one of the most incredible functions, you will ever see. It is like the `header()` function in php. You pass a certain command such as:

```
_log("Error: Invalid Input", () => {
  _notify("Try resubmitting the form");
})
```

Actually, there are no commands right now, maybe in the next versions. Also there are the wiki command, like:

```
_log("Error: Forbidden URL, wiki: https://mywebsite.com/support", () => {
  _alert("Try in another time");
});
```

##### Next, we have the animation functions

1 - `_begin_animate(element, delay = 1)`. Which will animate the element to enter the screen. Just make that element hidden. And it will make anything. Because in the beggining of the animation, it will give the element high zIndex, block display, and low opacity. Then, it will animate it.

2 - `_leave_animate(element, delay = 1)`. It is the opposite of `_begin_animate`.

### Features

1 - **Optional properties**. Now, every single property is optional. Now, if you passed an empty data object for
any function, it will work such as

```
_prompt({}, (txt) => {
  console.log(txt)
});
```

> Also, it is recommended to pass through the data object

```
var data = {
  subject: "Confirming",
  text: "Please confirm the form",
  button: "Ok",
}
```

2 - **Various Styles**. You can customize your styles by passing different arguments to the `data-animate-style` attribute
for the body element

```
<!-- Example -->
<body data-animate-style="circles dark"></body>
```

> Actually, we have only those two arguments. We will add more in the next versions.

### Contact

- [Facebook](https://www.facebook.com/profile.php?id=100093348596605)
- [GitHub](https://github.com/devcompany-public)
- [NPM](https://www.npmjs.com/~dev-company)

- Donate: [Come and buy me a pizza](https://bmc.link/devcompany)
