// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//chiedi all’utente il suo nome 
// e comunicagli se può partecipare o no alla festa.

// Strumenti 


// Array 
// prompt
// ciclo for + Array 

// creiamo una list adi partecipanti attravero Array 

const listName = [
    `Carolina`,
    `Pippo`,
    `Pluto`,
    `Paperino`,
    `Minni`,
    `Topolino`
];

// // console.log(listName);

// const nomeDaVisionare = prompt(`Scrivi il tuo nome`);

// // console.log(nomeDelPartecipante);

// // creaimo un ciclo for 

// let isValid = false;

// // Attravesro Array + ciclo visioniamo se la mail è presente nella lista 

// for (let i = 0; i < listName.length; i++) { 
//     const partecipante = listName [i]; 
//     // console.log(partecipante);
    
//     // verifichiamo se il nome corrisponde 
//     if (partecipante === nomeDaVisionare){ 
//         // nome valido
//         isValid = true;  
//     } 
    
// } 

// if (isValid) {
//     console.log(`Puoi entrare`);
// }else{
//     console.log(`Non puoi entare`);
// }


///////////////////// 


// ciclo while 

let isValid = false;

// // Attravesro Array + ciclo visioniamo se la mail è presente nella lista 
let i = 0;

while (i < listName.length) { 
    const partecipante = listName [i]; 
    // console.log(partecipante);
    
    // verifichiamo se il nome corrisponde 
    if (partecipante === nomeDaVisionare){ 
        // nome valido
        isValid = true;  
    } 

    i++
} 

if (isValid) {
    console.log(`Puoi entrare`);
}else{
    console.log(`Non puoi entare`);
}


