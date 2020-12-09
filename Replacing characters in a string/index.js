/*Можем ли мы заменить в строке:
Я изучаю JavaScipt
символ ю на другой? Если да, то как?
Можем ли заменить слово JavaScript на 'Frontend`?*/

let str = `Я изучаю JavaScipt`;
str = str.replace('изучаю', 'изучал');
console.log(str);// Я изучал JavaScipt
str = str.replace('JavaScipt', 'Frontend')// Я изучал Frontend
