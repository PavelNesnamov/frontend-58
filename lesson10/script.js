// ! Объявление переменных

//* через ключевое слово let
//* такой переменной можно переприсвоить значение

let hello = 'hello,  js!';
hello = 'привет, js!';
//  и даже значения других типов данных
// hello = 1000
// console.log(hello);

//через ключевое слово const
// с const  нужно определить значение в момент создания переменной
// нельзя переприсваивать значенние
const language = 'JaveScript';
//language = 'JS';

//! примитивные данные в JS

// 1. string
//при созданиии строк в js можно использовать двойные, одинарные и косые кавычки
// "Earth" 'Earth', вопрос выбора - стилизационный

let planet = "Earth"

let greeting = "We are from" + planet +'!';
let planetNumber = 3;
let greeting1 = `мы живем на планете ${planet} в солнечной системе. Это ${planetNumber} планет а от солнца`;
//console.log(greeting1)

//* 2.number
//в js все типы чисел - один тип данных

let n1 = 41;
let n2 = 3.14;
let n3 = -40;

let lastInteger = Number.MAX_SAFE_INTEGER
console.log(lastInteger)

//* 3.boolean

let isStudent = true;
let isBackend = false;

let hasLicense = true;

//пример тернарного оператора:
let canIDrive = hasLicense ? 'You can drive a car!' : 'Pleas stop!';

//* 4. undefined - неопределенное значение
// не явное указание на отсутсвие значение 
// часто приходит как результат недопустимых операций

let object;

//5* null - пустое значение
// явное указание на отсутствие значения

let user = null;

//* 6 bigint - большое число
// для операции с числами больше, чем Number.MAX_SAFE_INTEGER
let bigNumber = 1000n;
let bigResult = bigNumber + 1000n;
console.log(typeof bigResult);

//* 7. symbol - символ
//уникальное значение  используемое в объектах
//неперезаписываемое свойство объекта

//! операции над данными а js

// 1.преобразование в строку

let sum = 14 + 2 + '2';

//  с помощью string
let sum1 = String(42) + "- ответ не главный вопрос";

//* 2. преобразование в число
//*  с помощью Number
//но преобразовывать можно только строки с допустимыми значениями символов
//иначе в ответе придет NaN (not a number)
let sum2 = 2 + Number('16');

// parseInt
// метод преобразует строку в число до первого недопустимого символа
let sun3 = 42 + parseInt ('30€');

//* 3. преобразование в булевое значения

// значение для false в js:

// false
// 0
// null
// uneerfined
// ""
// NaN
// 0n (bigint)
// -0

// остальные значения считаются истинными true

//! математические операторы

//арифметические операции

let b1 = 12 + 45; // сложение
let b2 = 12 - 45; // вычитание
let b3 = 12 * 45; // умножение
let b4 = 12 / 45; // деление
let b5 = 12 ** 45; // возведение в степень
let b6 = 12 % 45; // остаток от деления
let b7 = Math.sqrt // квадратный корень

// случайное число от 1 до 100
let random = Math.random();

//  случайное число от 1 до 100
//Math.floor округляет до целого числа
let random1 = Math.floor(Math.random() * 100) +1;

//* операторы сравнения

// >, <, ==, ===, !, !==
// скобки в выражениях приоритезируют операции

// == равенство с приведением типов
console.log(99 == '99');
 
// === строгое хорошее равенство (рекомендуется к использованию)
//console.log(99 === '99');

const r1 = 25 !== '25'//true
const r2 = !true // false

// операторы && and || or
console.log(true || false); //true
console.log(true && false); //false

// порядок приоритета при операциях

// 1. ! (NOT)
// && (AND)
// || (OR)

const a = 5;
const b = 10;

const res = (a > 0 && b < 20) || (a === 0)
// const res1 = a > 0 && b < 20 || a === 0


// console.log(res)