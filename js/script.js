function calcoloCostoBiglietto() {
    // 1. chiedere num di KM da percorrere
    var kmViaggio = parseInt(prompt("Digita il numero di KM da percorrere"));
    // 2. chiedere età del passeggero
    var etaPax = parseInt(prompt("Digita la tua età"));
    // 3. calcolare costo del biglietto
    var costoBiglietto = kmViaggio * 0.21;
    // 4. applicare lo sconto in base all'età del passeggero
    if (etaPax < 18) {
        costoBiglietto = (kmViaggio * 0.21) * 0.20
    } else if (etaPax > 65) {
        costoBiglietto = (kmViaggio * 0.21) * 0.40
    }
    // 5. imposto solo 2 cifre dopo la virgola
    costoBiglietto = costoBiglietto.toFixed(2)
    // 6. mostra costo del biglietto nell'HTML
    document.getElementById("your-price").innerHTML = "€ " + costoBiglietto;
}