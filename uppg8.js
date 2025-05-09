
function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const personer = [
    { name: "Anton", age: 30 },
    { name: "Felix", age: 25 },
    { name: "Felica", age: 28 },
    { name: "Alex", age: 31 },
    { name: "Martin", age: 35 },]

function printnamesover30(arr) {                // Funktion som tar in en lista som argument

    for (let i = 0; i < arr.length; i++) {      // För varje person i listan görs en loop

        if (arr[i].age > 30) {                  // Om personens ålder är över 30
            console.log(arr[i].name);           // Skriv ut namnet i konsolen

        }
    }

}

printnamesover30(personer);                     // Anropar funktionen och skickar med listan som argument

}

module.exports = { uppg8 };