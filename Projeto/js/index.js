var SetaDireita = window.document.getElementById('seta-direita');
var leonardo = window.document.getElementById('leonardo');
var samanta = window.document.getElementById('samanta');
var bruna = window.document.getElementById('bruna');
var SetaEsquerda = window.document.getElementById('seta-esquerda');

function RolarParaDireita() {
  leonardo.style.display = 'none';
  bruna.style.display = 'flex';
  SetaDireita.style.display = 'none';
  SetaEsquerda.style.display = 'flex';
}

function RolarParaEsquerda() {
  leonardo.style.display = 'flex';
  bruna.style.display = 'none';
  SetaDireita.style.display = 'flex';
  SetaEsquerda.style.display = 'none';
}
