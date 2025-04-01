// * Arrays - Массивы
// тип данных, который хранит 
// * создание массива:
const arr1 = new Array();
const arr2 = []; //-предпочтительный способ

// * создание массава со значением:
const numbers = [4, 8, 15, 16, 23,42];
const fruits = ['apple', 'orange', 'pear'];

//обращение к элементам массива через индекс:
const pear = fruits[2];

// обращение по индексу к несуществующему элементу возвращает underfined
const none = fruits[8];

const party = ['alien', 42, underfined, ['man', 'woman']];// можем создавать массивы разных типов данных, но как правило это не нужно и не удобно

// * как узнать длину массива

const numbersLength = numbers.length;

//! цикл for loop

for (let i = 0; i < numbers.length; i++) {
    console.log([i] + 1 +'й ' + ' элемент: ' + numbers[i]);
}

//! цикл while

let i = 0;

while (i < 6) {
  console.log(i + 'раз')
  i++  
}

//! методы массивов
// функции которые позволяют удобно совершать основные операции с массивом
// они делятся на мутирующие и не мутирующие
// 1. мутирующие - изменяют исходный массив и они не возращают новый массив
// 2. не мутирующие не изменяют исходный, часто возращают новый массив с измененными значениями

const animals = ['panda', 'otter', 'capybara','rabbit'];

// * push() добавляет элемент в конец массива (мутирующий)

//const el = animals.push('hippo'); //!  el возращает длину массива 

// * pop() удаление элемента с конца массива (мутирующий)

const el = animals.pop(); //удалили 'hippo' //! метод возращает удаленный элемент

//при работе с мутирующими методами - создавай копию массива

// * anshift() добавляет элемент в начало массива (мутирующий)

animals.unshift('racon');

// * shift() удаление элемента из начала массива (мутирующий)

animals.shift();

//! spread syntax

//позволяет создавать копии массивов
// перед переменной ссылкой на массив пишем '...'

const newAnimals = [...animals];
newAnimals.unshift('racoon');

//сливание массивов из двух массивов

const fruitsAndAnimals = [...fruits, ...animals];

//! не путай сливание с созданием нового массива:

const fruitsAndAnimals1 = [fruits, animals];

// * со spread можно дописывать новые элементы в массив

const zoo = ["squirrel", ...newAnimals, "🦊", "🐊"];

// console.log(zoo)

// ! деструктуризация массивов

// это способ в одну строку:
// объявить новые переменные
// забрать данные из исходного массива
// и положить в эти переменные

const cities = ["Hamburg", "Leipzig", "Berlin", "Hannover"];

// * решение задачи без деструктуризации (в четыре строки)

// const hamburg = cities[0];
// const leipzig = cities[1];
// const berlin = cities[2];
// const hannover = cities[3];


// * решение задачи c деструктуризацией (в одну строку)
// значение переменных зависит от их индекса и порядка при деструктуризации - имя переменной может быть любым

// если какой-то элемент не нужен - мы пропускаем его

const [hamburg, leipzig, ,hannoverCity] = cities

console.log(hannoverCity);

/ ! объекты - objects

// сложный тип данных, в котором данные хранятся в формате 'ключ: значение'
// ключи - это строковые значения

// * получить значения объекта можно обратившись к его ключу через точку

const person1 = {
  name: "Ron",
  lastname: "Weasley",
  age: 16,
  isAdult: false,
  siblings: ["Fred", "George", "Jinny"]
};

const person2 = {
  name: "Fred",
  lastname: "Weasley",
  age: 19,
  isAdult: true,
  siblings: ["Ron", "George", "Jinny"]
};

const family = [person1, person2];

// * практикуем цикл с массивом из объектов

for (let i = 0; i < family.length; i++) {
  // перезаписываем данные по возрасту на каждой итерации
  family[i].age = family[i].age + 2
}


const person3 = {
  name: "Jinny",
  lastname: "Weasley",
  age: 14,
  isAdult: false,
  siblings: ["Ron", "George", "Fred"]
};

// * добавили нового ребенка в семью

family.push(person3)

// family.shift()


person3.siblings.push('Bill')


for (let i = 0; i < person3.siblings.length; i++) {
  console.log(person3.siblings[i])
}

// ! document - это очень большой и подробный объект описывающий все данные о странице в браузере

console.dir(document)

// let el = document.getElementsByTagName('h1')

// console.log(el[0])