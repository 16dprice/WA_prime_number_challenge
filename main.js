function checkPrime() {

    let num = document.getElementById('prime-input').value;

    if(isPrime(num)) {
        storePrime(num);
        document.getElementById('yes').style.display = 'block';
        document.getElementById('no').style.display = 'none';
    } else {
        storeComposite(num);
        document.getElementById('no').style.display = 'block';
        document.getElementById('yes').style.display = 'none';
    }

}

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

}

function storeComposite(num) {
    let existingComposites = JSON.parse(localStorage.getItem("composites"));

    if(existingComposites === null) existingComposites = [];
    if(!existingComposites.includes(num)) existingComposites.push(num);

    localStorage.setItem("composites", JSON.stringify(existingComposites));
}
