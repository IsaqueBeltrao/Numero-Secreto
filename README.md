![image](https://github.com/IsaqueBeltrao/Numero-Secreto/assets/147349236/ccc9c4a9-c700-46a7-8912-2bafc4f4e889)

O jogo do Número Secreto é um jogo simples desenvolvido utilizando as tecnologias JavaScript, HTML e CSS. No jogo, o jogador deve adivinhar um número secreto entre 1 e 50. O jogo fornece dicas sobre se o número é maior ou menor do que o chute do jogador. O objetivo é acertar o número secreto com o menor número de tentativas.

## Funcionalidades

### Exibir Mensagem Inicial
A função `exibirMensagemInicial()` é responsável por exibir a mensagem de boas-vindas e instruções iniciais do jogo.

### Verificar Chute
A função `verificarChute()` é acionada quando o jogador faz um chute. Ela verifica se o chute corresponde ao número secreto e fornece feedback ao jogador. Além disso, ela atualiza o número de tentativas e limpa o campo de entrada.

### Gerar Número Aleatório
A função `gerarNumeroAleatorio()` gera um número aleatório entre 1 e 50, garantindo que o número gerado não se repita. Ela utiliza uma lista para armazenar os números sorteados e evita repetições.

### Limpar Campo
A função `limparCampo()` limpa o campo de entrada, permitindo que o jogador faça um novo chute.

### Reiniciar Jogo
A função `reiniciarJogo()` reinicia o jogo, gerando um novo número secreto, limpando o campo de entrada e redefinindo o número de tentativas.

### Exibir Texto na Tela
A função `exibirTextoNaTela(tag, texto)` é responsável por exibir texto na tela do jogo e reproduzir o texto em voz alta usando a API de síntese de fala.

## Variáveis

- `listaDeNumerosSorteados`: Armazena os números sorteados.
- `numeroLimite`: Define o limite superior para o número secreto (50 neste caso).
- `numeroScreto`: Armazena o número secreto gerado pela função `gerarNumeroAleatorio()`.
- `tentativas`: Contador de tentativas do jogador.

## Uso das Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:
- JavaScript
- HTML
- CSS
