const foxBtn = document.getElementById('fox-btn');
const foxImg = document.getElementById('fox-img');

const fetchFox = () => {
    fetch("https://randomfox.ca/floof")
    .then(res => {
        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`)
        }
        return res.json()
    })
    .then((data) => {
        console.log(data);

        foxImg.src = data.image;

    })
    .catch(error => {
        console.error('Ошибка при запросе: ', error.message)
    })
}

foxBtn.addEventListener('click', fetchFox)

fetchFox();