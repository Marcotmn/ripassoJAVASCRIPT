/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

var string1 = "cane";
var num = 5;
var boolean = true;

console.log(string1, num, boolean);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const string = "marco";

console.log(string);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 5;
let num2 = 6;

let sum = num1 + num2;

console.log(sum);

////////////////////////////

function somma(num1, num2) {
  return num1 + num2;
}

console.log(somma(num1, num2));

///////////////////////////

let sum3 = (num1, num2) => num1 + num2;
console.log(sum3(num1, num2));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

console.log(x);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

const string2 = "tumminia";

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = x - 4;
console.log(sottrazione);

/////////////////////////

let y = 4;

function sottrazione2(x, y) {
  return x - y;
}

console.log(sottrazione2(x, y));

/////////////////////////

let sottrazione3 = (x, y) => x - y;

console.log(sottrazione3(x, y));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

////// var name1 = "mark"; solo per testare l'else if//////

var name1 = "john";
var name2 = "John";

function uguaglianza(name1, name2) {
  if (name1 === name2) {
    return true;
  } else if (name1.toLowerCase() === name2.toLowerCase()) {
    console.log("true but with .toLowerCase() only");
    return true;
  } else {
    return false;
  }
}

console.log(uguaglianza(name1, name2));
