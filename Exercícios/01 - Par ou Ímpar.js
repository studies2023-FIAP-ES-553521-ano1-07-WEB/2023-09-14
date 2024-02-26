/*
1. Escreva um programa que verifica se um número é par ou ímpar e exibe uma mensagem apropriada.
*/

const prompt = require('prompt-sync')();

const n = Number(prompt('Digite um número: '));

if (n % 2 === 0) {
  console.log('Par');
} else {
  console.log('Ímpar');
}