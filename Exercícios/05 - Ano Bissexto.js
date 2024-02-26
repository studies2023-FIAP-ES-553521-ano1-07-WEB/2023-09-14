/*
5. Escreva um programa que determine se um ano é bissexto ou não (anos bissextos têm 366 dias, com fevereiro tendo 29 dias).
*/

const prompt = require('prompt-sync')();

const year = Number(prompt('Digite um ano: '));

if (year % 4 === 0) {
  console.log('Ano bissexto');
} else {
  console.log('Ano não bissexto');
}