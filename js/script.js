
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
    //RESTITUISCO IL VALORE GENERATO NELL'ARRAY//
    return boxnumber;
}

numbers ();
//RECUPERO L'ELEMENTO DAL DOM//
let numeri  = document.getElementById('numeri');
boxnumber.innerHtml = 0;
//APPENDO IL DOM//
numeri.append(boxnumber);

setTimeout
