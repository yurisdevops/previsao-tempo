const key = "8d5f1a8a6089e5aa8ab64b6371843fc9";

function colocarDadosNaTela(dados) {
  document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}`;
  document.querySelector(".temp").innerHTML = `${Math.floor(
    dados.main.temp
  )}°C`;
  document.querySelector(".clima").innerHTML = dados.weather[0].description;
  document.querySelector(
    ".umidade"
  ).innerHTML = `Umidade: ${dados.main.humidity}%`;
  document.querySelector(
    ".img-temp"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
  const test = [];
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());
  console.log(dados);
  test.push(dados);
  console.log(test);
  colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;
  buscarCidade(cidade);
}
document.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    cliqueiNoBotao();
  }
});
