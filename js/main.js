// // Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.

// // Chiediamo all'utente il primo numero
// const primoNumero = prompt("Inserisci il primo numero:");

// // Chiediamo all'utente il secondo numero
// const secondoNumero = prompt("Inserisci il secondo numero:");

// // Generiamo un numero casuale compreso tra i due numeri
// const numeroCasuale =
//   Math.floor(
//     Math.random() *
//       (Math.max(primoNumero, secondoNumero) -
//         Math.min(primoNumero, secondoNumero) +
//         1)
//   ) + parseInt(Math.min(primoNumero, secondoNumero), 10);

// // Stampiamo il numero casuale generato
// console.log(
//   "Numero casuale compreso tra",
//   primoNumero,
//   "e",
//   secondoNumero,
//   ":",
//   numeroCasuale
// );

// Dare la possibilità di inserire due parole.

// Se hanno la stessa lunghezza, stamparle entrambe
// altrimenti stampare la più lunga delle due.

// // Chiedo all'utente di inserire la prima parola
// const primaParola = prompt("Inserisci la prima parola:");

// // Chiedo all'utente di inserire la seconda parola
// const secondaParola = prompt("Inserisci la seconda parola:");

// // Verificare che le due parole abbiano la stessa lunghezza.
// if (primaParola.length == secondaParola.length) {
//   console.log("Prima parola:", primaParola);
//   console.log("Seconda parola:", secondaParola);
// } else {
//   // Le due parole hanno lunghezze diverse, quindi stampo quella più lunga
//   if (primaParola.length > secondaParola.length) {
//     console.log("Prima parola:", primaParola);
//   } else {
//     console.log("Seconda parola:", secondaParola);
//   }
// }

// // Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.

// // Chiediamo all'utente il primo numero
// const primoNumero = prompt("Inserisci il primo numero:");

// // Chiediamo all'utente il secondo numero
// const secondoNumero = prompt("Inserisci il secondo numero:");

// // Generiamo un numero casuale compreso tra i due numeri
// const numeroCasuale =
//   Math.floor(
//     Math.random() *
//       (Math.max(primoNumero, secondoNumero) -
//         Math.min(primoNumero, secondoNumero) +
//         1)
//   ) + parseInt(Math.min(primoNumero, secondoNumero), 10);

// // Stampiamo il numero casuale generato
// console.log(
//   "Numero casuale compreso tra",
//   primoNumero,
//   "e",
//   secondoNumero,
//   ":",
//   numeroCasuale
// );

// Crea un array vuoto
//  e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// // Crea un array vuoto
// const numeriArray = [];

// // Continua a chiedere numeri all'utente finché la somma degli elementi è minore di 50
// let somma = 0;
// while (somma < 50) {
//   // Chiediamo all'utente di inserire un numero
//   const input = prompt("Inserisci un numero:");
//   somma += input;

//   if (somma < 50) {
//     numeriArray.push(input);
//   }
// }

// console.log(numeriArray);

// Trovare gli errori nel seguente codice:

--------------------------
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = "";
for (let i = 0; i < numbers.length - 1; i++;) {
    if (numbers % 2 = 0); {
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);

// dovrebbe restituire [1,3,5]	




// Correggere gli errori nel seguente modo

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(i);
  }
}

console.log(evenNumbers); 
// dovrebbe restituire [1, 3, 5]
