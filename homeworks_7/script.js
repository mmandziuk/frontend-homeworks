// Задача 1
const numbers = [1, 2, 3, 4, 5];
const multNumbers = numbers.map((number) => number * 2);
// console.log(numbers);
// console.log(multNumbers);

// Задача 2
const names = ["anna", "bob", "charlie"];
const namesUpperCase = names.map((name) => name.toUpperCase());
// console.log(names);
// console.log(namesUpperCase);

// Задача 3
const prices = [100, 200, 300];
const pricesWithTax = prices.map((price) => price + price * 0.2);
// console.log(prices);
// console.log(pricesWithTax);

// Задача 4
const numbers2 = [5, 12, 8, 130, 44];
const numMoreTen = numbers2.filter(function (number) {
  if (number > 10) return number;
});
// console.log(numbers2);
// console.log(numMoreTen);

// Задача 5
const words = ["apple", "banana", "kiwi", "strawberry"];
const newWords = words.filter(function (word) {
  if (word.length > 5) {
    return word;
  }
});
// console.log(words);
// console.log(newWords);

// Задача 6
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers3.filter(function (number) {
  if (number % 2 == 0) {
    return number;
  }
});
// console.log(numbers3);
// console.log(evenNumbers);

// Задача 7
const fruits = ["apple", "banana"];
fruits.push("orange", "grape");
console.log(fruits);

// Задача 8
const numbers4 = [1, 2, 3, 4, 5];
const deletedEl = numbers4.pop();
console.log(numbers4);
console.log(deletedEl);

// Задача 9
const ordinalNumbers = ["second", "third"];
ordinalNumbers.unshift("first");
console.log(ordinalNumbers);

// Задача 10
const numbers5 = [10, 20, 30, 40];
const deletedNum = numbers5.shift();
console.log(numbers5);
console.log(deletedNum);

// Задача 11
const numbers6 = [1, 2, 3, 4, 5, 6];
const evenNumbers1 = numbers6.filter(function (number) {
  if (number % 2 == 0) {
    return number;
  }
});
// console.log(evenNumbers1);
const multEvenNumbers = evenNumbers1.map((number) => number * 3);
// console.log(multEvenNumbers);

// Задача 12
const arr = [];
arr.push(1, 2, 3);
// console.log(arr);
arr.shift();
// console.log(arr);
