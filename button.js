class Button {
  constructor(id, keybinds) {
    this.id = id;
    this.keybinds = keybinds;
  }

  get selector() {
    return document.querySelector(`#${this.id}`);
  }

  click() {
    this.selector.click();
  }

  animate() {
    this.selector.classList.add('active');
    setTimeout(() => {
      this.selector.classList.remove('active');
    }, 100);
  }
}

export default Button;
