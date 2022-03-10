let invitations = ["Cristian", "Francesco", "Michele", "Federico", "Giuseppe", "Chiara", "Alessandra", "Simona"];



let checkButton = document.querySelector('#verify_button');
let result = document.querySelector('#result');

checkButton.addEventListener('click', function () {
    let personName = document.querySelector('#person_name');
    if (personName.value === '') {
        result.innerText = 'Non hai inserito nessun Dato'
    } else {
        if (invitations.includes(personName.value) === true) {
            result.innerText = `Welcome ${personName.value}`;
            personName.value = '';
        } else {
            result.innerHTML = "Sorry, you're not in the list! <a id='add' href='#'>Add me </a>";
            const addButton = document.querySelector('#add');
            addButton.addEventListener('click', function () {
                invitations.push(personName.value);
                personName.value = '';
                result.innerText = '';
            })
        }
    }
})



