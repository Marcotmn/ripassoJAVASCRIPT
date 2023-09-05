/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 4;
let y = 7;

if (x > y) {
  console.log("4 è maggiore di 7");
} else {
  console.log("7 è maggiore di 4");
}

/////////////

function maggiore(x, y) {
  if (x > y) {
    return "x è maggiore di y";
  } else {
    return "y è maggiore di x";
  }
}

console.log(maggiore(x, y));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let int = 4;

if (int !== 5) {
  console.log("not equal");
} else {
  console.log("is equal");
}

/////////////////

function isEqual(int) {
  if (int !== 5) {
    return "is not equal";
  } else {
    return "is equal";
  }
}
console.log(isEqual(int));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let divisibile = 25;

if (divisibile % 5 == 0) {
  console.log("il numero è divisibile per 5");
} else {
  console.log("il numero non è divisibile per 5");
}

///////////////////

function isDiv(divisibile) {
  if (divisibile % 5 == 0) {
    return "divisibile per 5";
  } else {
    return "non è divisibile per 5";
  }
}

console.log(isDiv(divisibile));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let int1 = 4;
let int2 = 8;

if (int1 === 8 && int2 === 8) {
  console.log("almeno uno dei due interi è uguale a 8");
} else if (int1 === 8) {
  console.log("il primo intero fornito è uguale a 8");
} else if (int2 === 8) {
  console.log("il secondo intero fornito è uguale a 8");
} else {
  console.log("nessuna delle condizioni è soddisfatta");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 40;
let costoSpedizione = 10;

if (totalShoppingCart > 50) {
  console.log(
    "Hai raggiunto il minimo d'ordine per la spedizione gratuita, il costo totale è pari a" +
      totalShoppingCart +
      "€"
  );
} else {
  console.log(
    "Il costo totale dell'ordine è pari a " +
      (totalShoppingCart + costoSpedizione) +
      "€"
  );
}

//////////////////////

function totaleCarrello(totalShoppingCart, costoSpedizione) {
  if (totalShoppingCart > 50) {
    return (
      "Hai raggiunto il minimo d'ordine per la spedizione gratuita, il costo totale è pari a " +
      totalShoppingCart +
      "€"
    );
  } else {
    return (
      "Non hai raggiunto il minimo d'ordine per la spedizione gratuita, il costo totale è pari a " +
      (totalShoppingCart + costoSpedizione) +
      "€"
    );
  }
}

console.log(totaleCarrello(totalShoppingCart, costoSpedizione));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

if (totalShoppingCart - (totalShoppingCart * 20) / 100 > 50) {
  console.log(
    "hai diritto alla spedizione gratuita, il costo totale è " +
      totalShoppingCart * 0.2
  );
} else {
  console.log(
    "non ha raggiunto il minimo d'ordine per la spedizione gratuita, il costo totale è di " +
      (totalShoppingCart - totalShoppingCart * 0.2 + costoSpedizione) +
      "€"
  );
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
