'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    Elizabeth: 456793,
    Ella: 69530,
    Hollis: 56483,
    Loona: 1212121212,
    Joe: 58495,
    Irene: 1063096012
};

const findPhoneByName = (name) => phonebook[name];


console.log(findPhoneByName("Loona"));
