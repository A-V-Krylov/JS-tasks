/*Дан массив элементов
[`cat`, `dog`, `parrot`, `horse`]
Как узнать индекс элемента `parrot`?*/

let arr = [`cat`, `dog`, `parrot`, `horse`];
console.log(arr.indexOf('parrot')); //2
for (i = 0; i < arr.length; i++)
    if (arr[i] == 'parrot') 
        console.log(i); //2