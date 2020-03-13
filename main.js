function checkPrime() {

    let num = document.getElementById('prime-input').value;

    if(isPrime(num)) {
        document.getElementById('yes').style.display = 'block';
        document.getElementById('no').style.display = 'none';
    } else {
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
