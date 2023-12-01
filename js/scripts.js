const kilometriDaPercorrere = prompt('Dimmi quanti kilometri vuoi percorrere');

if (isNaN(kilometriDaPercorrere)){
    alert("Scrivi i kilometri in numero")
}

const etàDelPasseggero = prompt('Dimmi quanti hanni hai');

if (isNaN(etàDelPasseggero)){
    alert("Scrivi l'eta in numero")
}

let PrezzoBiglietto = (kilometriDaPercorrere * 0.21);

console.log

if (etàDelPasseggero < 18){
    Prezzo = (PrezzoBiglietto * 0.8).toFixed(2);
}

else if(etàDelPasseggero > 65){
    Prezzo = (PrezzoBiglietto * 0.6).toFixed(2);
}

else{
     Prezzo = PrezzoBiglietto.toFixed(2);
 }

 console.log('Prezzo' + Prezzo + typeof prezzo);

document.getElementById ('prezzo-biglietto').innerHTML += Prezzo + '$'


