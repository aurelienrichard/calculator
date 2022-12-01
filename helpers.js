import Button from './button.js';

const loadButtons = (nodeList) => {
  const output = [];
  nodeList.forEach((button) => {
    const keybinds = button.value.split(' ');
    output.push(new Button(button.id, keybinds));
  });
  return output;
};

const DOM = {
  buttons: loadButtons(document.querySelectorAll('.calculator-body > button')),
  current: document.querySelector('#current > h1'),
  previous: document.querySelector('#previous > h2'),
};

const defaultFontSize = 2.7;

const adjustFontSize = () => {
  const currentFontSize = DOM.current.innerText.length;
  const newFontSize = Math.max(
    defaultFontSize - 0.1 * Math.max(currentFontSize - 7, 0),
    1.5
  );
  DOM.current.style.fontSize = `${newFontSize}rem`;
};

export { DOM, adjustFontSize };
