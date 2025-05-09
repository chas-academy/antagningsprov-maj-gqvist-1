
function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    const nummer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function sort(arr) {                       // Funktion som tar in en lista som argument
                    
        for (let i = 0; i < arr.length; i++) {      // För varje tal i listan görs en loop
                  
            if (arr[i] % 2 === 0) {                 // Använd modulus operatorn för att kolla om talet är jämt (resten efter division med 2 är 0)
                console.log(arr[i], "jämt")         // Skriv ut talet och "jämt" i konsolen

            }
            
            else {
                console.log(arr[i], "udda")
        }
    }
  
    sort(nummer);                              // Anropar funktionen och skickar med listan som argument    
}
}

module.exports = { uppg9 };