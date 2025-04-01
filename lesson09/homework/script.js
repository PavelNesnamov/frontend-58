const btn = document.getElementById('magic-btn')
const cloneBtn = btn.cloneNode(true)
cloneBtn.id = 'magic-btn-2';
btn-addEventListener('click', () => {
    cloneBtn.classList.add('second-btn')
    cloneBtn.style.color = 'white'
    cloneBtn.style.backgroundColor = '#a78b71'
    cloneBtn.innerText = 'Я изменю тебя'
    document.body.append(cloneBtn)
})

cloneBtn.addEventListener('click', () => {
    btn.style.color ='black'
    btn.style.backgroundColor = '#9c4a1a'
})