// Instrucciones importantes:
// El número de intentos debe poder cambiarse desde una variable.
// El número de celdas para las letras dependerá de la longitud de la palabra que salga.
// Recordad que existen los elementos del DOM, los children, los bucles anidados, los replace...
// Antes de escribir, PENSAD. Un sólo problema cada vez.
// Por último, las apariencias ENGAÑAN.

const gameboardElement = document.getElementById('gameboard');
const formElement = document.getElementById('form');
const solutionInputElement = document.getElementById('solution-input');
const messageElement = document.getElementById('message');

const allWords = ['zara'];

// const allWords = [
//   'zara',
//   'pelo',
//   'humo',
//   'chasqueador',
//   'zombie',
//   'atropello',
//   'ticket',
//   'infectado',
//   'hambre',
//   'accidente',
//   'vitrina',
//   'apocalipsis',
//   'supervivencia',
//   'sangre',
//   'hongo',
//   'cordyceps'
// ];
const numberOfTries = 5;
const alphabet = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

let wordSelected = '';
let currentRow = 0;

const getRandomWord = () => {
  const randomPosition = Math.floor(Math.random() * allWords.length);
  const randomWord = allWords[randomPosition];

  return randomWord;
};

const paintCells = () => {
  wordSelected = getRandomWord();
  const totalLetters = wordSelected.length;

  for (let i = 0; i < numberOfTries; i++) {
    const cellsContainer = document.createElement('div');
    cellsContainer.classList.add('cells-container');
    for (let j = 0; j < totalLetters; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cellsContainer.append(cell);
    }
    gameboardElement.append(cellsContainer);
  }
};
paintCells();

const putWordInCell = () => {
  let inputLength = solutionInputElement.value.length;

  for (let i = 0; i < inputLength; i++) {
    gameboardElement.children[currentRow].children[i].textContent =
      solutionInputElement.value[i];
  }
  //Llamo al hijo de gameboard de currentRow, para ir a la fila que quiero. Luego, quiero ir al hijo del Row, que es i, porque estoy recorriendo cada letra dentro del bucle.

  currentRow++;
};

const getClassColor = () => {
  //hay que recorrer cada letra del y ver si el valor de alphabet(includes) es igual. Hay que reocrrer cada letra del input
  //dvidir letras del input > buclaction
  //dividir letras del la palabra seleccionada
  //comparar
  //cojo zara > z a r a > cojo la z y comparo
  //PRIMERA LETRA DEL ARRAY
  //   const firstLetterInput = wordSelected.charAt(0);
  //   console.log(firstLetterInput);

  //   console.log(allWords[0].charAt(0));

  //   if (firstLetterInput === allWords[0].charAt(0)) {
  //     console.log(true);
  //   }

  const wordLength = wordSelected.length;

  for (let i = 0; i < wordLength; i++) {
    if (allWords[0].charAt(i) === solutionInputElement.value.charAt(i)) {
      console.log('ta bien');
    }
  }
};

const putWordInRow = event => {
  event.preventDefault();
  getClassColor();
  const wordLength = wordSelected.length;
  const inputLength = solutionInputElement.value.length;

  if (wordLength === inputLength) {
    putWordInCell();
    messageElement.textContent = '';
  } else {
    messageElement.textContent = `The word doesn't have ${wordLength} characters`;
  }
  event.target.reset();
};
formElement.addEventListener('submit', putWordInRow);
