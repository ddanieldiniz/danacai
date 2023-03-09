function abrirTelaInicial() {
    document.getElementById('tela-inicial').classList.remove('d-none');
    document.getElementById('tela-pedido').classList.add('d-none');
    document.getElementById('tela-contato').classList.add('d-none');
}

function abrirTelaPedido() {
    document.getElementById('tela-inicial').classList.add('d-none');
    document.getElementById('tela-pedido').classList.remove('d-none');
    document.getElementById('tela-contato').classList.add('d-none');
}

function abrirTelaContato() {
    document.getElementById('tela-inicial').classList.add('d-none');
    document.getElementById('tela-pedido').classList.add('d-none');
    document.getElementById('tela-contato').classList.remove('d-none');
}