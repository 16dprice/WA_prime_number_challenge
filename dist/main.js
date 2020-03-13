document.addEventListener("DOMContentLoaded", function() {
    const existingPrimes = JSON.parse(localStorage.getItem("primes"));
    const existingComposites = JSON.parse(localStorage.getItem("composites"));

    if(existingPrimes !== null) document.getElementById('primes-textarea').innerHTML = existingPrimes.join(', ');
    if(existingComposites !== null) document.getElementById('composites-textarea').innerHTML = existingComposites.join(', ');
});

function checkPrime() {

    let invalidMsg = document.getElementById('invalid');
    let yesMsg = document.getElementById('yes');
    let noMsg = document.getElementById('no');

    let num = document.getElementById('prime-input').value;

    if(num === "") return;
    if(num < 2) {
        invalidMsg.classList.add('show');

        yesMsg.classList.remove('show');
        noMsg.classList.remove('show');
        return;
    }

    // store the number in local storage and display whether or not it was a prime number
    if(isPrime(num)) {
        storePrime(num);
        yesMsg.innerHTML = `Yes, ${num} <i>is</i> prime!`;
        yesMsg.classList.add('show');

        noMsg.classList.remove('show');
        invalidMsg.classList.remove('show');
    } else {
        storeComposite(num);
        noMsg.innerHTML = `No, ${num} <i>is not</i> prime!`;
        noMsg.classList.add('show');

        yesMsg.classList.remove('show');
        invalidMsg.classList.remove('show');
    }

}

// simple prime checking function
function isPrime(num) {
    let sqrtNum = Math.sqrt(num);

    for(let i = 2; i <= sqrtNum; i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function storePrime(num) {
    let existingPrimes = JSON.parse(localStorage.getItem("primes"));

    if(existingPrimes === null) existingPrimes = [];
    if(!existingPrimes.includes(num)) existingPrimes.push(num);

    localStorage.setItem("primes", JSON.stringify(existingPrimes));
    document.getElementById('primes-textarea').innerHTML = existingPrimes.join(', ');

}

function storeComposite(num) {
    let existingComposites = JSON.parse(localStorage.getItem("composites"));

    if(existingComposites === null) existingComposites = [];
    if(!existingComposites.includes(num)) existingComposites.push(num);

    localStorage.setItem("composites", JSON.stringify(existingComposites));
    document.getElementById('composites-textarea').innerHTML = existingComposites.join(', ');

}
