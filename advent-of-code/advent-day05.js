console.log("advent day 05 is on")

let seats = Array.from(document.querySelectorAll(".seat"));

console.log(seats)

let highestSeatValue = 0
let highestSeatText = "FFFFFFFLLL"

seats.forEach(ticket => {
    let ticketText = ticket.textContent
    let rowPosition = ticketText.substring(0, 7)
    let columnPosition = ticketText.substring(7, ticketText.length)
})


"BBBBBFFRRL"