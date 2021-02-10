import { DOM, adjustFontSize } from './helpers.js';
import Calculator from './calculator.js';

const calculator = new Calculator(DOM.previous, DOM.current);

const sortInput = (element) => {
  switch (element.id) {
    case 'sum':
      calculator.setOperation('+');
      break;
    case 'subtract':
      calculator.setOperation('-');
      break;
    case 'multiply':
      calculator.setOperation('*');
      break;
    case 'divide':
      calculator.setOperation('/');
      break;
    case 'sign':
      calculator.sign();
      break;
    case 'clear':
      calculator.clear();
      break;
    case 'delete':
      calculator.delete();
      break;
    case 'equals':
      calculator.compute();
      break;
    case 'comma':
      calculator.append('.');
      break;
    default:
      calculator.append(element.innerText);
  }
  calculator.display();
};

document.addEventListener('click', (event) => {
  DOM.buttons.forEach((button) => {
    if (button.id === event.target.id) {
      sortInput(event.target);
      adjustFontSize();
    }
  });
});

document.addEventListener('keydown', (event) => {
  DOM.buttons.forEach((button) => {
    if (button.keybinds.includes(event.key)) {
      button.click();
      button.animate();
    }
  });
});
