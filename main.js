document.addEventListener("DOMContentLoaded", function() {
    const existingPrimes = JSON.parse(localStorage.getItem("primes"));
    const existingComposites = JSON.parse(localStorage.getItem("composites"));

    if(existingPrimes !== null) document.getElementById('primes-textarea').innerHTML = existingPrimes.join(', ');
    if(existingComposites !== null) document.getElementById('composites-textarea').innerHTML = existingComposites.join(', ');
});

function checkPrime() {

    let num = document.getElementById('prime-input').value;
    if(num === "") return;
    if(num < 2) {
        document.getElementById('invalid').style.display = 'block';
        document.getElementById('yes').style.display = 'none';
        document.getElementById('no').style.display = 'none';
        return;
    }

    // store the number in local storage and display whether or not it was a prime number
    if(isPrime(num)) {
        storePrime(num);
        document.getElementById('yes').style.display = 'block';
        document.getElementById('no').style.display = 'none';
        document.getElementById('invalid').style.display = 'none';
    } else {
        storeComposite(num);
        document.getElementById('no').style.display = 'block';
        document.getElementById('yes').style.display = 'none';
        document.getElementById('invalid').style.display = 'none';
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
