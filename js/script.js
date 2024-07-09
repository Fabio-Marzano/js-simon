
//CREO ARRAY VUOTA//
const boxnumber = [];
// ATTIVO LA FUNZIONE CHE MI GENERE 5 NUMERI CASUALI//
function numbers  () {
    //AVVIO IL CICLO CHE MI GENERA I 5 NUMERI CASUALI//
    while(boxnumber.length < 5) {

        let randomNumbers = Math.floor(Math.random() * 100) + 1;
        //CREO LA CONDIZIONE CHE PERMETTE ALL'ARRAY DI INCLUDERE TUTTI I NUMERI//
        if(!boxnumber.includes(randomNumbers)) {
            boxnumber.push(randomNumbers);
        }
    }

}

numbers ();
//RECUPERO L'ELEMENTO DAL DOM//
let numeri  = document.getElementById('numeri');
numbers.innerHtml = boxnumber.join(' ');

let clock = setTimeout (function numero () {
    numbers.innerHtml = '';
} , 2000);

const persona = setTimeout (function numero () {

    for(i = 1; i<=5; i++) {

        let numero = prompt('Inserisci il valore ottenuto');
        console.log(numero);
    }
} , 4000);
 
  

