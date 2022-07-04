const [input1, input2] = document.querySelectorAll("input")
const buton = document.querySelector('button')


function handleChange() {
    if (input1.value && input2.value.length >= 8) {
        buton.classList.add('show')
    } else {
        buton.classList.remove('show')
    }
}

input1.addEventListener('input', handleChange)
input2.addEventListener('input', handleChange)