fetch("https://hp-api.onrender.com/api/characters")
  .then((res) => res.json())
  .then((data) => {
    // обрезаем массив не мутирующим slice
    const shortHeroes = data.slice(0, 50);
    // обрезаем shortHeroes мутирующим splice
    // первый аргумент - с какого индекса
    // второй аргумент - кол-во удаляемых элементов
    shortHeroes.splice(1, 10);
    // заводим переменную под персонажа
    const hero = shortHeroes[0];
    // ! string methods - методы строк

    // * length - сво-во возражающее длину строки
    // console.log(hero.name.length);

    // * slice() обрезает строку по индексам
    // console.log(hero.name.slice(0, 5));

    // * indexOf() ищет индекс символа или подстроки
    // возвращает -1 если не находит искомое значение
    // console.log(hero.name.indexOf("ry"));

    // * получаем переменные только имена персонажей
    data.map((el) => {
      const actor = el.actor;
      const indexOfSpace = actor.indexOf(" ");
      const firstWord = indexOfSpace !== -1 ? actor.slice(0, indexOfSpace) : actor;
      // console.log(firstWord)
    });

    // * изменение регистра
    // к верхнему регистру
    const capsLockName = hero.actor.toUpperCase().slice(0, 6);

    // к нижнему регистру + заглавная буква для имени
    const formattedName = capsLockName.charAt(0).toUpperCase() + capsLockName.toLowerCase().slice(1);
    // console.log(formattedName)

    // * charAt() возвращает символ в строке про индексу
    // console.log(hero.name.charAt(0))

    // ! строки в JS иммутабельны - нет мутирующих методов
    // * split() делает из строки массив с элементами
    // принимает аргументом символ-разделитель

    // * reverse() - метод массива меняющий последовательность элементов в массиве

    // console.log(hero.house.split('').reverse().join(''))

    // * join() - склеивает строку
    // принимает аргументом символ-объединитель

    // console.log(hero.name.split(' ').reverse().join(' '))

    // ! Objects methods
    // * Object.values() - массив из всех зночений объекта
    // console.log(Object.values(hero));

    // * Object.keys() - массив из ключей объекта
    Object.keys(hero).map(el => {
        const p = document.createElement('p');
        p.textContent = `Поле: ${el}`
        document.body.appendChild(p);
    });

    // * for ... цикл для объектов
    for (const key in hero) {
    //     console.log(`По ключу ${key} лежит значение ${hero[key]}`);
    //     console.log(key, hero[key]);
    }
});
