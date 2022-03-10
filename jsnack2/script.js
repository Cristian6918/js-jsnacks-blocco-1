let array = [];

for (let i = 0; i < 6; i++) {
    let number = parseInt(prompt('Inserisci un numero'));
    while (Number.isNaN(number)) {
        alert('inserire un numero');
        number = parseInt(prompt('Inserisci un numero'));

    }
    if (number % 2 === 1) {
        array.push(number);
    }
}

let numbers = document.querySelector('#numbers');
numbers.innerText = `L'array con i numeri dispari è ${array}`;


