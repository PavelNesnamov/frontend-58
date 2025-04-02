const formHeader = document.getElementById('form');
const filmList = document.getElementById('film-list');
//console.log(formHeader, filmList);

function clearList () {
    while (div.hasChildNodes()) {
        div.firstchild.remove()
    }
}

const filmsList = [
    {
        film: "Хоббит. Нежданное путешествие",
        author: "Питер Джексон",
        year: "2012",
        photo:"https://io.gidonline.fun/img/6666fed48_200x300.jpg"
    },
    {
        film: "Властелин колец. Братство кольца",
        author: "Питер Джексон",
        year: "2001",
        photo:"https://io.gidonline.fun/imgs/1/479.jpg"
    },
    {
        film: "Звездные войны",
        author: "Джорж Лукас",
        year: "1977",
        photo:"https://io.gidonline.fun/imgs/1/207.jpg"
    }
]

// const changeStatus = (event) => {
//     if (event.target.)
// }
