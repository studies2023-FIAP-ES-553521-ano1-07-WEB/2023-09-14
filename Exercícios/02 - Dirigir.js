/*
2. Crie um programa que determina se uma pessoa pode dirigir com base na idade (idade mínima de 18 anos) e exiba "Pode dirigir" ou "Não pode dirigir".
*/

const prompt = require('prompt-sync')();

const age = Number(prompt('Digite sua idade: '));

if (age >= 18) {
  console.log('Pode dirigir');
} else {
  console.log('Não pode dirigir');
}