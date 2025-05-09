
function uppg7() {
   
    // skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10

    function addition(a, b) {           //Funktion som tar in två tal som argument
        return a + b;                   //Returnerar summan av argumenten
    }

    return addition(5, 10);             //Returnerar summan av talen

}

module.exports = { uppg7 };