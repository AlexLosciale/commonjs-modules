/*
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/

import createName from './names.js';
import createHobbies from './hobbies.js';

function createPerson() {
    const name = createName('Alex', 'Losciale');
    const hobbies = createHobbies('leggere', 'palestra', 'giochi');
    return {
        fullname: name,
        hobbies
    }
};

console.log(createPerson());
