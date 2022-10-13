// Il programma stampa la somma di tutti i numeri inseriti

//STRUMENTI

//ciclo for
//condizionale +

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
//  for (let i = 0; i <= 10; i++) {
//     console.log(i);;
    
//  }

const numbers = [
   `1`,
   `2`,
   `3`,
   `4`,
   `5`,
   `6`,
   `7`,
   `8`,
   `9`,
   `10`,
]
console.log(numbers);

let i = 10;

while (i <= numbers) {
   const number = numbers[i];
   console.log(number);

   const userNumber = Number(prompt(`scrivi un numero`));

   number+=userNumber

   i++
}
