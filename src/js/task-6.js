// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру. Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = document.querySelector('input');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

boxesDiv.style.display = 'flex';
boxesDiv.style.flexWrap = 'wrap';
boxesDiv.style.alignItems = 'center';
boxesDiv.style.marginTop = '30px';

function createBoxes(amount) {
  amount = Number(input.value);

  if (isValidInput(amount)) {
    const divEl = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      size += 10;
      const div = document.createElement('div');

      div.style.backgroundColor = getRandomHexColor();
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.marginRight = '30px';
      div.style.marginBottom = '30px';
      divEl.push(div);
    }

    boxesDiv.append(...divEl);
    input.value = '';
  }
}

createEl.addEventListener('click', createBoxes);

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

destroyEl.addEventListener('click', destroyBoxes);

function isValidInput(value) {
  return Number.isInteger(value) && value >= 1 && value <= 100;
}
