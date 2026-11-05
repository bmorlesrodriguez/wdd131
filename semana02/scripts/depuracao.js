const resultadoRaio = document.getElementById('raio');
const resultadoArea = document.getElementById('area');

const PI = 3.14159;
let raio = 10;

let area = PI * raio * raio;
resultadoRaio.textContent = raio;
resultadoArea.textContent = area.toFixed(2);

raio = 20;
area = PI * raio * raio;
resultadoRaio.innerHTML = `<strong>${raio}</strong>`;
resultadoArea.innerHTML = `<strong>${area.toFixed(2)}</strong>`;