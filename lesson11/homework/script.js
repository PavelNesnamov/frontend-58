// ### Задание 1

const ages = [18, 27, 74, 34];
const people = [];

for(i = 0; i < names.length; i++) {
    people.push(names[i] + ' '+ ages[i] +' лет/годов')
};
 console.log(people);
document.body.append(people);

// ### Задание 2


const newPeople = [];
for (let i = names.length - 1; i >= 0; i--){
    newPeople.push(people[i])
};

 console.log(newPeople);
 document.body.append(newPeople);

// ### Задание 3

const fruits = [];
fruits.push("яблоко", "банан", "апельсин");
const lastFruit = fruits.pop();
fruits.unshift(lastFruit);
console.log(fruits);
document.body.append(fruits);

// ### Задание 4

const veggies = ['томаты','картофель', 'брюква']
const fruitsAndVeggies = [...fruits, ...veggies];
const [fruits1,  veggies1] = fruitsAndVeggies;
console.log(fruitsAndVeggies);
document.body.append(fruitsAndVeggies);
