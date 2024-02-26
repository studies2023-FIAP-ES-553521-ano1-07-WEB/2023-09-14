/*
3. Escreva um programa que calcule a média de três notas e atribua uma letra (A, B, C, D ou F) com base na média (A >= 90, B >= 80, C >= 70, D >= 60, F < 60).
*/

const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Digite a 1ª nota: '));
const nota2 = Number(prompt('Digite a 2ª nota: '));
const nota3 = Number(prompt('Digite a 3ª nota: '));

const media = ((nota1 + nota2 + nota3) / 2);

let notaFinal = '';

if (media >= 90) {
  notaFinal = 'A';
} else if (media >= 80) {
  notaFinal = 'B';
} else if (media >= 70) {
  notaFinal = 'C';
} else if (media >= 60) {
  notaFinal = 'D';
} else {
  notaFinal = 'F';
}

console.log('A nota final é: ' + notaFinal);