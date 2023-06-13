const prompt = require('readline-sync')

let recorde_atual = 0;
let pontuador = 10;
let rankingGeral = [];

if (recorde_atual === 0) {
  console.log("Vocês são os primeiros jogadores da partida.");
}

function jogo() {
  let N = Math.floor(Math.random() * 100);
  let jogador1 = prompt.question("Qual o seu nome do jogador 1?");
  let jogador2 = prompt.question("Qual o seu nome do jogador 2?");
  let pontuacao1 = 100;
  let pontuacao2 = 100;

  for (let i = 0;; i++) {
    // Jogador 1
    let chute1 = parseInt(prompt.question(`Jogador 1, qual o seu chute?`));

    if (chute1 !== N && chute1 > N) {
      pontuacao1 -= pontuador;
      console.log(`${jogador1}, você errou! Seu chute foi maior que o número secreto.`);
    } else if (chute1 !== N && chute1 < N) {
      pontuacao1 -= pontuador;
      console.log(`${jogador1}, você errou! Seu chute foi menor que o número secreto.`);
    } else if (pontuacao1 === 0) {
      console.log(`Game Over! ${jogador1}, suas chances acabaram!`);
      break;
    } else if (chute1 === N) {
      console.log(`Parabéns ${jogador1}! Você acertou em ${i + 1} tentativas!`);
      console.log(rankingGeral)
      atualizarRanking(jogador1, pontuacao1);
      exibirRanking();
      break;
    }

    // Jogador 2
    let chute2 = parseInt(prompt.question(`Jogador 2, qual o seu chute?`));

    if (chute2 !== N && chute2 > N) {
      pontuacao2 -= pontuador;
      console.log(`${jogador2}, você errou! Seu chute foi maior que o número secreto.`);
    } else if (chute2 !== N && chute2 < N) {
      pontuacao2 -= pontuador;
      console.log(`${jogador2}, você errou! Seu chute foi menor que o número secreto.`);
    } else if (pontuacao2 === 0) {
      console.log(`Game Over! ${jogador2}, suas chances acabaram!`);
      break;
    } else if (chute2 === N) {
      console.log(`Parabéns ${jogador2}! Você acertou em ${i + 1} tentativas!`);
      console.log(rankingGeral)
      atualizarRanking(jogador2, pontuacao2);
      exibirRanking();
      break;
    }
  }

  encerraOuRecomeca();
}

function atualizarRanking(jogador, pontuacao) {
  rankingGeral.push({ jogador, pontuacao });
  rankingGeral.sort((a, b) => b.pontuacao - a.pontuacao);
}

function exibirRanking() {
  console.log("Ranking Geral:");
  rankingGeral.forEach((item, index) => {
    console.log(`${index + 1}. ${item.jogador} - ${item.pontuacao} pontos`);
  });
}

function encerraOuRecomeca() {
  let opcao = parseInt(prompt.question("*\n0 - Sair. \n1 - Jogar novamente\n"));
  if (opcao === 0) {
    console.log('Jogo encerrado!');
    exibirRanking();
    return false;
  } else if (opcao === 1) {
    jogo();
    return true;
  } else {
    console.log("Por favor, escolha uma das opções válidas: 0 ou 1.");
    return encerraOuRecomeca();
  }
}

jogo();
