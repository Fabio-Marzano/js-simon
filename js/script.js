//ASSEGNO FUNZIONE PER OTTENERE I NUMERI CASUALI//
function generateRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}
// CREAO LA FUNZIONE PER OTTENERE ARRAY DEI NUMERI//
function createArrayNumbers() {
    let numbers = [];
    //CONTROLLO SE LA LUNGHEZZA DELL'ARRAY E' MINORE DI 5. SE RISULTA PUSHO IL NUMERO ALL'INTERNO DELL'ARRAY//
    while (numbers.length < 5) {
        //GENERO IL NUMERO USANDO LA STESSA FUNZIONE//
        let num = generateRandomNumber();
        //CONTROLLO CHE IL NUMERO NON SIA PRESENTE//
        if (!numbers.includes(num)) {
            //PUSHO IL NUMERO NELL'ARRAY//
            numbers.push(num);
        }
    }

    return numbers;
}
//DEFINISCO VARIABILE DALLA FUNZIONE CREATEARRAYNUMBERS//
let random_numbers = createArrayNumbers();

document.getElementById('numbers').innerHTML = random_numbers;
//GENERO SETTIMEOUT PER SVUOTARE LA LISTA//
setTimeout(function () {
    document.getElementById('numbers').innerHTML = '';

}, 30000);
//GENERO SETTIMEOUT PER PERMETTERE ALL'UTENTE DI INSERIRE I SUOI NUMERI//
setTimeout(function () {
    //CREO UN ARRAY VUOTO//
    let numero_utente = [];

    for (let i = 0; i < 5; i++) {

        numero_utente.push(parseInt(prompt('Registra il tuo numero')));
    }
    //DEFINISCO L'ARRAY DEI NUMERI TROVATI//
    let guessed = [];

    for (let i = 0; i <5; i++) {
        //VERIFICO CHE I NUMERI INSERITI SI TROVINO ALL'INTERO DELL'ARRAY//
        if (random_numbers.includes(numero_utente[i])) {
            guessed.push(numero_utente[i]);
        }
    }
    //MOSTRO IL RISULTATO//
    document.getElementById('numbers').innerHTML = `Hai indovinato ${guessed.length} numeri. Sono i seguenti ${guessed}`;

    
    

}, 5000);




 
  

