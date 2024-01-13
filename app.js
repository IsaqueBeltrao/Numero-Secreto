let listaDeNumerosSorteados = [];
let numerolimite = 50;
// vai pegar o resultado do numero aleatório da ultima função e guardar na variável " numeroScreto"
//  TBM esta variável está recebendo o valor de uma função
let numeroScreto = gerarNumeroAleatorio();
// contador se houver erros
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
}
exibirMensagemInicial();

// funcção sem parametro ( vazio) e sem retorno
function verificarChute() {
    //"input" = entrada do usuário
    let chute = document.querySelector('input').value;
   
    if (chute == numeroScreto) {
        exibirTextoNaTela('h1','Acertou!');
        
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa'; 
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        
        if (chute > numeroScreto) {
            exibirTextoNaTela('p',' O número é menor que o chute');
        }else{
            exibirTextoNaTela ('p','O número secreto é maior que o chute');
        }
        tentativas++;
        limparCampo();
    }
}   

// funções sem parametros porem com retorno
    function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numerolimite  + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if ( quantidadeElementosNaLista == numerolimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
 
// função criada para limpar o campo 
    function limparCampo () {
        chute = document.querySelector('input');
// String vazia        
        chute.value = '';

    }
    
    function reiniciarJogo() {
        numeroScreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById ('reiniciar').setAttribute('disabled',true);
    }



