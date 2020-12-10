/*Вам дам объект
```
const person = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  age: 25,
  location: 'Caribbean sea',
}
```
1) Необходимо вывести все свойства и значения в следующем виде
```
<property>: <value>
```
2) Необходимо вывести отфарматированные свойства и значения:
```
First name: Jack
Last name: Sparrow
Age: 25 ages
Where to find: Caribbean sea
```*/

const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  };

for (let key in person) {
  console.log(`<${key}>: <${person[key]}>`);
}

const newPerson = {
  'First Name': person.firstName,
  'Last name': person.lastName, 
  'Age' : `${person.age} ages`,
  'Where to find' : person.location
}

for (let key in newPerson) {
  console.log(`${key}: ${newPerson[key]}`);
}