// apabila ada input berupa teks
// file ini tidak digunakan

const textinput = document.getElementById('textinput1')

textinput.addEventListener('change', (e) => {
    e.preventDefault()
    filterCar(e.target.value)
})