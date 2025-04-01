//! Arrays methods 
//  в этом объекте все значения лежат по "ящичкам с надписями"
let obj = {name: "Stive", lastname: "Jobs", company: 'apple', isBusinessman: true};

let arr = [person, person];
// в массиве все значения находятся по порядку но не имеют наименования значения
let arr1 = ["Stive", "Jobs", "apple", true];

const brothers = [
    {name: 'Gendalt', height: 160, hasMagic: true, race: 'maia', age: 2000},
    {name: 'Legolas', height: 170, hasMagic: true, race: 'elf', age: 1000},
    {name: 'Frodo', height: 60, hasMagic: false, race: 'hobbit', age: 30},
    { name: "Saruman", height: 155, hasMagic: true, race: "maia", age: 2000 },
    { name: "Aragorn", height: 160, hasMagic: false, race: "human", age: 120 },
    { name: "Sam", height: 63, hasMagic: false, race: "hobbit", age: 32 }
  ];

  const hero = {name: 'Arwen', height: 175, hasMagic: true, race: 'elf', age: 850};
  
  brothers.push(hero)

  // * map() (не мутирующий), метод возращает новый массив с количеством исходного
  // используется для создания нового на основе исходного
  // так же для последующих операций без изменения над элементами исходного массива
  // итерируется по элемнтам исходного массива

  // создаем массив из имен наших героев
  //передаем в качестве аргумента стелочную функцию. =>
  // за место параметна el будет приходить последовательно элементы массива
  const brothersNames = brothers.map(el => el.name);

  const brothersAge = brothers.map(hero => hero.age);

  // * создаем массив из строк с именами и возрастом

const nameAndAges = brothers.map(el => el.name + ': '+ el.age);
console.log(nameAndAges)

// * filter() (не мутирующий метод)
// возращает новый массив элементов, поэтому задаем ему новую переменную,
// удовлетворяют заданному условию
// если элементов подходящих условию нет, то приходит пустой массив

//const brothers1 = brothers.filter(el => (el.age) > 100 
 //                           && (el.hasMagic === true));

const elfs = brothers.filter(el => el.race === 'elf');

// * find() (не мутирующий) возращает первый элемент уд-щий условию

const brothers1 = brothers.find(el => el.name === 'Saruman');

// * reduce() (не мутирующий) в примере считает сумму возрастов всех братьев
// первый аргумент => с описанием действия (0 - точка отсчета)
// второй аргумент - начальное значение аккуммулируемой переменной
const sumOfAges = brothersAge.reduce((acc, current) => acc + current, 0);

// * сложение строк в reduce()

const brothersNames1 = brothers.reduce((acc, el) => acc + el.name + ', ', 'Братство Кольца: ');

// * sclice() (не мутирующий) обрезает массив и возращает новый
// передаем два аргумента: индекс с которого обрезаем и индекс до которого обрезаем

const shortBrothers = brothers.slice(1, 4);

const lastTwoBrothers = brothers.slice(-2);

const result = brothers.slice(-2).map(el => el.age).reduce((acc, el) => acc + el, 0);

//! functions

// функции позволяют переиспользовать написанный код
// помогают организовывать и структурировать код

// * function declaration
// объявление финкции через ключевое слово function

function greeting(value){
    console.log('Hello,' + value + '!');
}

// чтобы функция заработала ее нужно вызвать
// передоваемое на место параметра значение при вызове функции называют аргументом

// * функции могут быть вызваны много раз с разными аргументами

greeting('arrays');
greeting('function');
greeting('objects');

let returnedValue = greeting('arrays');

//! функции без return возращают underfined - будьте внимательны
//также функции объявленные с помощью function могут быть вызваны до объявления - это называется "поднятие" (hoisting)

// * стрелочные функции - arrow function называются так из-за =>
// такие функции не используются до объявления

// стрелочные функции из простой операции в одну строку не требует return - 
//возращенным значением становится результат операции после =>

const sum = (num1, num2) => num1 + num2;

//const result1 = sum(42, 30);

// *  если мы хотим написать операцию из нескольких строк нам нужны фигурные скобки
//! а в фигурных скобках нужно будет не забыть написать return

const multiply = (a, b, c) => {
    const result = a*b*c
    return`${result} - это результат умножения ${a}, ${b}, ${c}`
}

const result2 = multiply(22, 25, 16);

// console.log(result2)
// console.log(multiply(30, 20, 5))
