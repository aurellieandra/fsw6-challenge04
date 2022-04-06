const element1 = document.querySelector("#textinput1");
const element2 = document.querySelector("#textinput2");

[element1, element2].map(element => element.addEventListener('change', function () {
    e.preventDefault()
    filterCar(element1, element2)
}))