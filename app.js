
const button = document.getElementsByClassName('btn')[0]
const screamer = document.getElementById('screamer')
const fishing = document.getElementById('fishing')

button.addEventListener('click', () => {
    if (screamer.classList.contains('hidden')){
        screamer.classList.remove('hidden')
        fishing.classList.add('hidden')
    } else {
        fishing.classList.remove('hidden')
        screamer.classList.add('hidden')
    }
})
console.log(button)