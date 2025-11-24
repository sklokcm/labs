'use strict';

const ages = (persons) => {
  let people = {};
  for(let name in persons){
    let person = persons[name];
    people[name] = person.died - person.born;
  }
  return people;
};

let listPeople = {Amy: { born: 1983, died: 2011 },
 Aaliyah: { born: 1977, died: 2001 },
 Sophie: { born: 1986, died: 2021 },
 David: { born: 1947, died: 2016 }

}

console.log(ages(listPeople));

