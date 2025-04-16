// Instrucciones importantes:
// El número de intentos debe poder cambiarse desde una variable.
// El número de celdas para las letras dependerá de la longitud de la palabra que salga.
// Recordad que existen los elementos del DOM, los children, los bucles anidados, los replace...
// Antes de escribir, PENSAD. Un sólo problema cada vez.
// Por último, las apariencias ENGAÑAN.

const gameboardElement = document.getElementById('gameboard');
const solutionButtonElement = document.getElementById('solution-button');

const allWords = [
	'zara',
	'pelo',
	'humo',
	'chasqueador',
	'zombie',
	'atropello',
	'ticket',
	'infectado',
	'hambre',
	'accidente',
	'vitrina',
	'apocalipsis',
	'supervivencia',
	'sangre',
	'hongo',
	'cordyceps'
];
const numberOfTries = 5;

let wordSelected = '';

const getRandomWord = () => {
	const randomPosition = Math.floor(Math.random() * allWords.length);
	const randomWord = allWords[randomPosition];

	wordSelected = randomWord;
};
getRandomWord();

const paintCells = () => {
	// const cell = document.createElement('div');
	// cell.classList.add('cell');
	// gameboardElement.prepend(cell);
	const totalLetters = wordSelected.length;

	for (let i = 0; i < totalLetters; i++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');
		gameboardElement.prepend(cell);
	}

	// for (const letter of totalLetters) {
	// 	const totalCells = letter;
	// 	gameboardElement.prepend(totalCells);
	// }
};
paintCells();
