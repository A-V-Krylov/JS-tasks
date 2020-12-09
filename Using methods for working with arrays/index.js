// slice
let fruits = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'];
let citrus = fruits.slice(1, 3);
console.log(citrus); //['Апельсин', 'Лимон']
 
// splice
let myFish = ['angel', 'clown', 'drum', 'sturgeon'];
let removed = myFish.splice(2, 1, 'trumpet');
console.log(myFish); //["angel", "clown", "trumpet", "sturgeon"]
console.log(removed); // ["drum"]

// map
let numbers = [1, 4, 9];
let doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(numbers); //[1, 4, 9]
console.log(doubles); //[2, 8, 18]

// for && forEach
const items = ['item1', 'item2', 'item3']
const copy = []

for (let i = 0; i < items.length; i++) {
  copy.push(items[i])
}

items.forEach(function(item){
  copy.push(item)
})
console.log(items); //["item1", "item2", "item3"]
console.log(copy); //["item1", "item2", "item3", "item1", "item2", "item3"]


// filter
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); //["exuberant", "destruction", "present"]

// total
let total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
  });
  console.log(total); //6

// sort
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let arr = [ 10, 8, 5, 3, 1 ];
  arr.sort(compareNumeric);
  console.log(arr);  // [1, 3, 5, 8, 10]

// some
function isBiggerThan10(element) {
    return element > 10;
  }
  console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // false
  console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true

// every
function isBigEnough(element) {
    return element >= 10;
  }
  console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
  console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

