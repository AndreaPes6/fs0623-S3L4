//costanti generali
const numeri = []



//PRIMA FUNZIONE MINORE
const numeriEffettivi = function(){
    const numeriDentroIlTabellone = numeri
    for(let i = 1; i <= 76; i++ ){
       numeriDentroIlTabellone.push(i)
    }
    return numeriDentroIlTabellone
}

//SECONDA FUNZIONE MINORE
const estraiUnNumeroCasuale = function(){
    const casuale = numeri[Math.floor(Math.random() * numeri.length)]
    alert('Numero Estratto: ' + casuale)
}

//TERZA FUNZIONE MINORE
const AggiornaSfondo = function () {
    const numeriTabellone = document.querySelectorAll('.numero')
    numeriTabellone.forEach(numeroElementi => {
        const numero = parseInt(numeroElementi.textContent);
        switch (numero) {
            case 1:
                numeroElementi.style.backgroundColor = "darkviolet";
                break;
            default:
                numeroElementi.style.backgroundColor = "#0F101C"; 
        }
    })
}

//PRIMA FUNZIONE
const tabellone = function(){
    const spazioDedicato = document.getElementById("tombola")
    numeriEffettivi().forEach(numero => {
        const numeroElementi = document.createElement("div")
        numeroElementi.textContent = numero
        numeroElementi.classList.add(numero)
        spazioDedicato.appendChild(numeroElementi)
    })
}

//SECONDA FUNZIONE
const estrazione = function(){
    const estraiIlNumero = document.getElementById("bottone")
    estraiIlNumero.addEventListener("click", function() {
        estraiUnNumeroCasuale()
        AggiornaSfondo()
    })
    return estraiIlNumero
}



//EVOCAZIONE FUNZIONI
estrazione()
tabellone()
numeriEffettivi()


//Non sono riuscito a far colorari gli sfondi a seconda del numero estratto :(


