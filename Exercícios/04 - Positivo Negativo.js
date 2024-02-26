/*
4. Crie um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem apropriada.
*/

const prompt = require('prompt-sync')();

const num = Number(prompt('Digite a 1ª nota: '));

if (num > 0) {
  console.log('Positivo');
} else if (num < 0) {
  console.log('Negativo');
} else {
  console.log('Zero');
}