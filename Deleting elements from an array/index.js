/*Дан массив элементов
[`cat`, `dog`, `parrot`, `horse`, `fish`, `chicken`, `lion`]
Как удалить элемент `fish`? 
Как удалить элемент cat? 
Как удалить последние 2 элемента?*/

let arr = [`cat`, `dog`, `parrot`, `horse`, `fish`, `chicken`, `lion`];
console.log(arr.indexOf('fish')); //4
arr.splice(4, 1);
arr.shift();
console.log(arr); //["dog", "parrot", "horse", "chicken", "lion"]
