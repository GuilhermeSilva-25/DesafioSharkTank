const iniciar = document.getElementById("iniciar");
const cards = [
  document.getElementById("card1"),
  document.getElementById("card2"),
  document.getElementById("card3"),
  document.getElementById("card4"),
  document.getElementById("card5"),
  document.getElementById("card6"),
  document.getElementById("card7"),
  document.getElementById("card8"),
  document.getElementById("card9"),
];
let marvel = 0;
let dc = 0;
let cardAtual = 0;

function chamarPerguntas() {
  iniciar.style.display = "none";
  mostrarCard(cardAtual);
}

function mostrarCard(index) {
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.style.display = "none";
  }
  if (cards[index]) {
    cards[index].style.display = "block";
  }
}

function opcao1() {
  marvel++;
  proximoCard();
}

function opcao2() {
  dc++;
  proximoCard();
}

function proximoCard() {
  cards[cardAtual].style.display = "none";
  cardAtual++;

  if (cardAtual < cards.length) {
    mostrarCard(cardAtual);
  } else {
    resultado();
  }
}

function resultado() {
  if (marvel > dc) {
    window.location.href = "pagina_marvel.html";
  } else if (dc > marvel) {
    window.location.href = "pagina_dc.html";
  }
}
