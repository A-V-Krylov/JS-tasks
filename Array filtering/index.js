/*Дан массив:
[31, 10, `chicken`, 9, `fish`, `10`]
Необходимо получить массив в котором останутся 
только строки / элементы со значением 10*/

function filterArr(value) {
    return value === 10 || typeof value === "string";
  }

  let arr = [31, 10, `chicken`, 9, `fish`, `10`];
  let newArr = arr.filter(filterArr);
  console.log(newArr);