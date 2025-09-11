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
  localStorage.setItem("marvel", marvel);
  localStorage.setItem("dc", dc);
  window.location.href = "resultado.html";
}

  marvel = parseInt(localStorage.getItem("marvel")) || 0;
  dc = parseInt(localStorage.getItem("dc")) || 0;
  const img = document.getElementById("imagemResultado");

  const imagens = [
    "../img/logo_marvel.jpg",
    "../img/logo_dc.png",
    "../img/m01.jpg",
    "../img/m02.jpg",
    "../img/m03.png",
    "../img/m04.png",
    "../img/m05.jpg",
    "../img/d01.jpg",
    "../img/d02.png",
    "../img/d03.jpg",
    "../img/d04.png",
    "../img/d05.jpg",
  ];

  let intervalo;
  let index = 0;

  function iniciarRoleta() {
    intervalo = setInterval(() => {
      img.src = imagens[index];
      index = (index + 1) % imagens.length;
    }, 100);

    setTimeout(() => {
      clearInterval(intervalo);
      mostrarResultadoFinal();
    }, 3000);
  }

  function mostrarResultadoFinal() {
    if (marvel > dc) {
      document.body.classList.add("marvel-bg");
      img.src = "../img/logo_marvel.jpg";
    } else if (dc > marvel) {
      document.body.classList.add("dc-bg");
      img.src = "../img/logo_dc.png";
    }
  }

  window.onload = iniciarRoleta;