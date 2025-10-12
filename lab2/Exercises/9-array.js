'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    {name: "Camila", phone: 35344273},
    {name: "Lauren", phone: 1257829},
    {name: "Normani", phone: 2935128},
    {name: "Ally", phone: 446796},
    {name: "Dinah", phone: 419495},
]

const findPhoneByName = (name) =>{
    for(const i of phonebook){
        if(i.name === name){
            return i.phone;
        }
    }
}

console.log(findPhoneByName("Lauren"));
