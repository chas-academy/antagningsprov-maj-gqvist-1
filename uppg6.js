
function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen

    const names = ["Anton", "Felix", "Felicia", "Alex", "Martin"];

    for (let i = 0; i < names.length; i++)  {   // Loopar igenom listan tills det inte finns fler namn kvar, för varje namn i listan skrivs namnet ut i konsolen.
        console.log(names[i]);                  // Så första loopen så skrivs namnet i listan som står på plats 0 (index 0) ut i konsolen, sen plats 1 osv.
    }
 
}

module.exports = { uppg6 };