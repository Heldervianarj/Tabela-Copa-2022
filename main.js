function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="${player1}" />
      <strong> ${hour} </strong>
      <img src="./assets/icon-${player2}.svg" alt="${player2}" />
    </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
 delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
  </div>
`
}

document.querySelector("#cards").innerHTML = 
  createCard("24/11", "Quinta", createGame('Brazil', '16:00', "serbia") + createGame('Brazil', '16:00', "serbia")) +
  createCard("28/11", "Segunda", createGame('Brazil', '13:00', "switzerland") + createGame('Brazil', '16:00', "serbia")) +
  createCard("02/12", "Sexta", createGame('Brazil', '16:00', "cameroon") + createGame('Brazil', '16:00', "serbia"))
  
