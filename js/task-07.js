


const inputChange = document.querySelector('input#font-size-control')
const abracadabra = document.querySelector('span#text')

abracadabra.style.fontSize = inputChange.value + 'px';
inputChange.addEventListener('input', makeMagic)

function makeMagic(event) {
    abracadabra.style.fontSize = `${event.target.value }px`
}



