const seats = document.querySelectorAll(".seat");
const pelicula = document.getElementById("pelicula");
const count = document.getElementById("count");
const total = document.getElementById("total");

let price = parseInt(pelicula.value);
let seatsSelected = 0;

function selectSeat(seat) {
    length = seat.classList.length;

    if (length === 1) {
        seat.classList.add("selected");
        seatsSelected++;
    }
    else if (length === 2) {
        seat.classList.remove("selected");
        seatsSelected--;
    }

    count.innerText = seatsSelected;
    total.innerText = (price * seatsSelected);

}

seats.forEach(seat => {
    seat.addEventListener("click", () => { selectSeat(seat) })
});

pelicula.addEventListener("change", () => {
    price = parseInt(pelicula.value);
    total.innerText = (price * seatsSelected);
})


