// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// STRUMENTI 
// prompt 
// condizionale >
// if

// L’utente inserisce due numeri in successione, con due prompt.
const primoNumero  = Number( prompt(`scrivi il primo numero`))
const secondoNumero = Number( prompt (`scrivi il secondo numero `))



 if (primoNumero > secondoNumero) {
    console.log(primoNumero);

 }else if (secondoNumero > primoNumero){
    console.log(secondoNumero);

 }else{
    console.log();
 }

