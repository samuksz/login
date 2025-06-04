function fazerLogin() {
  const nome = document.getElementById("usuario").value || "cliente";

  // Salva no localStorage
  localStorage.setItem("nomeUsuario", nome);

  // Troca as telas
  document.getElementById("telaLogin").style.display = "none";
  document.getElementById("telaUsuario").style.display = "block";

  // Atualiza saudações
  const boasVindas = document.getElementById("boasVindas");
  if (boasVindas) {
    boasVindas.textContent = `Bem-vindo, ${nome}!`;
  }

  const nomeMenu = document.getElementById("ola-usuario");
  if (nomeMenu) {
    nomeMenu.textContent = `Olá, ${nome}!`;
  }
}


function abrirPopup() {
  document.getElementById("popup").style.display = "flex";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

function abrirMenu() {
  document.getElementById("menuLateral").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function fecharMenu() {
  document.getElementById("menuLateral").style.left = "-400px";
  document.getElementById("overlay").style.display = "none";
}
function abrirNotificacoes() {
  const painel = document.getElementById("painelNotificacoes");
  const overlay = document.getElementById("overlayNotificacoes");

  painel.style.height = "50%";
  painel.style.padding = "25px 20px";
  overlay.style.display = "block";
}

function fecharNotificacoes() {
  const painel = document.getElementById("painelNotificacoes");
  const overlay = document.getElementById("overlayNotificacoes");

  painel.style.height = "0";
  painel.style.padding = "0 20px";
  overlay.style.display = "none";
}
function abrirPopupEndereco() {
  document.getElementById("popupEndereco").style.display = "flex";
}

function fecharPopupEndereco() {
  document.getElementById("popupEndereco").style.display = "none";
}

function salvarEndereco() {
  const endereco = document.getElementById("campoEndereco").value;
  if (endereco.trim() !== "") {
    const botao = document.querySelector(".botao-endereco");
    botao.textContent = endereco;
    fecharPopupEndereco();
  } else {
    alert("Por favor, digite um endereço.");
  }
}
function abrirDetalhesLavanderia() {
  document.getElementById("popupLavanderia").style.display = "block";
}

function fecharDetalhesLavanderia() {
  document.getElementById("popupLavanderia").style.display = "none";
}
// Permite selecionar apenas um serviço por vez
const servicos = document.querySelectorAll('.card-servico.selecionavel');

servicos.forEach((card) => {
  card.addEventListener('click', () => {
    servicos.forEach(c => c.classList.remove('selecionado')); // desmarca todos
    card.classList.add('selecionado'); // marca o clicado
  });
});
function irParaTelaServico() {
  document.getElementById("telaUsuario").style.display = "none";
  document.getElementById("telaServico").style.display = "block";
}

function voltarTelaUsuario() {
  document.getElementById("telaServico").style.display = "none";
  document.getElementById("telaUsuario").style.display = "block";
}
function irParaTelaSolicitacao() {
  document.getElementById("telaServico").style.display = "none";
  document.getElementById("telaSolicitacao").style.display = "block";
  
  // Só carrega os horários quando os elementos estiverem visíveis
  preencherHorarios();
}

function voltarParaTelaServico() {
  document.getElementById("telaSolicitacao").style.display = "none";
  document.getElementById("telaServico").style.display = "block";
}
flatpickr("#calendario", {
  mode: "range",
  dateFormat: "d/m/Y",
  minDate: "today"
});
function preencherHorarios() {
  const horarios = [
    "00h", "01h", "02h", "03h", "04h", "05h", "06h", "07h", "08h", "09h",
    "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h",
    "20h", "21h", "22h", "23h"
  ];

  const retirada = document.getElementById("horaRetirada");
  const entrega = document.getElementById("horaEntrega");

  // Evita duplicar as opções se a função for chamada mais de uma vez
  retirada.innerHTML = "<option value=''>--</option>";
  entrega.innerHTML = "<option value=''>--</option>";

  horarios.forEach((hora) => {
    const option1 = document.createElement("option");
    option1.text = hora;
    retirada.appendChild(option1);

    const option2 = document.createElement("option");
    option2.text = hora;
    entrega.appendChild(option2);
  });
}
function irParaTelaPagamento() {
  document.getElementById("telaSolicitacao").style.display = "none";
  document.getElementById("telaPagamento").style.display = "block";
}
function irParaTelaConfirmacao() {
  document.getElementById("telaPagamento").style.display = "none";
  document.getElementById("telaConfirmacao").style.display = "block";
}

function voltarParaSolicitacao() {
  document.getElementById("telaPagamento").style.display = "none";
  document.getElementById("telaSolicitacao").style.display = "block";
}
function voltarParaTelaUsuario() {
  document.getElementById("telaConfirmacao").style.display = "none";
  document.getElementById("telaUsuario").style.display = "block";
}
function abrirPopupComprovante() {
  document.getElementById("popupComprovante").style.display = "flex";
}

function fecharPopupComprovante() {
  document.getElementById("popupComprovante").style.display = "none";
}

function abrirPopupChat() {
  document.getElementById("popupChat").style.display = "flex";
}

function fecharPopupChat() {
  document.getElementById("popupChat").style.display = "none";
}