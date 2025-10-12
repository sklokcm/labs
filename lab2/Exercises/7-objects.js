'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () =>{
    const obj1 = {
        name: "Yves"
    }
    let obj2={
        name: "Pink"
    }

    console.log(obj1, obj2);

    obj1.name = "Luna";
    obj2.name = "Viktoria";

    console.log(obj1, obj2);

    //obj1 = {name: "Sam"};
    obj2 = {name: "Panther"};

    console.log(obj1, obj2);

};

fn();
