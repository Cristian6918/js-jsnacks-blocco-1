

let total = 0;

let number = parseInt(prompt('Inserisci un numero'));
let str = number.toString();
while (Number.isNaN(number) || str.length !== 4) {
    alert('inserire un numero di 4 cifre');
    number = parseInt(prompt('Inserisci un numero'));
    str = number.toString();
}


for (i = 0; i < str.length; i++) {
    total = total + parseInt(str.charAt(i));
}

console.log('il numero da te selezionato è', str);
console.log('la somma è', total);

let result = document.querySelector('#res');
result.innerText = `Hai scelto il numero ${str} e la somma delle sue cifre è ${total}`;
