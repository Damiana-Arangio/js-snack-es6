/* 
    Snack 2
    Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
    Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
    e stampiamo tutto in console.
*/

/*****************
    DEFINIZIONI
******************/

// Array di oggetti
const squadre = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
];

// Nuovo array che conterrà solo nome + falliSubiti
const nuovoArraySquadre = [];


/*****************
    ELABORAZIONE
******************/

for (let squadra of squadre) {
    squadra.puntiFatti = genNumRandom(0, 10);
    squadra.falliSubiti = genNumRandom(0, 20);

    // Aggiungo al nuovo array
    nuovoArraySquadre.push ( { nome: squadra.nome, falliSubiti: squadra.falliSubiti} );
}

console.log("ARRAY SQUADRE");
console.log(squadre);
console.log("NUOVO ARRAY SQUADRE");
console.log(nuovoArraySquadre);



/*****************
    FUNZIONI
******************/

// Generazione numero random con min e max inclusi
function genNumRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
