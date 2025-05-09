
function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

    const bigEven = [];
    const smallOdd = [];
    const other = [];

    for (let i = 0; i < numbers.length; i++) {              // För varje tal i listan görs en loop

        if (numbers[i] > 10 && numbers[i] % 2 === 0)        // Tal som är större än 10 och jämnt delbara med 2
          bigEven.push(numbers[i]);

        else if (numbers[i] < 10 && numbers[i] % 2 != 0)    // Tal som är mindre än 10 och inte är jämt delbart med 2
          smallOdd.push(numbers[i]);

        else
          other.push(numbers[i]);                           // Alla andra tal
    }  

    return {                                                // Returnerar ett objekt med de nya listorna
        bigEven: bigEven,
        smallOdd: smallOdd,
        other: other
    }

}
  
module.exports = { uppg10 };
  