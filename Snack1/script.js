/* 
    Snack 1
    Creare un array di oggetti:
    Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
*/


/*****************
    DEFINIZIONI  
******************/

// Array di oggetti
const bici = [ 
    { nome: "Bike-A" , peso: 7},
    { nome: "Bike-B", peso: 11 },
    { nome: "Bike-C", peso: 5 },
    { nome: "Bike-D", peso: 10 },
    { nome: "Bike-E", peso: 6 }
];

// Variabile: supponiamo che la bici più leggera sia la prima
let biciLeggera = bici[0];          


/*****************
    ELABORAZIONE
******************/

for (let i in bici) {
    biciLeggera = confrontoPeso(biciLeggera, bici[i])   //Chiamata funzione
}

console.log("Bici con peso minore: \n");
console.log(biciLeggera);


/**************
    FUNZIONI
***************/

// Funzione che confronta il peso tra due bici e restituisce quella più leggera
function confrontoPeso (biciAttuale, biciNuova) {

    if (biciNuova.peso < biciAttuale.peso) {
            return biciNuova;
    }

    return biciAttuale;
}