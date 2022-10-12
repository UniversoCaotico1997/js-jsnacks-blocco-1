// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga. 

//STRUMENTI
//prompt
// >
//length

// L’utente inserisce due parole in successione, con due prompt.
const primaParola = prompt(`scrivi la prima parola`)
const secondaParola = prompt(`scrivi la seconda parola`)



// Il software stampa prima la parola più corta, poi la parola più lunga. 

if (primaParola.length > secondaParola.length) {
    console.log(`la prima parola più lunga`,primaParola);

} else if (secondaParola.length > primaParola.length) {
    console.log(`la seconda parola più lunga`,secondaParola);

}else{
    console.log();
}