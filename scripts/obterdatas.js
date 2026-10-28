// Preenche o ano atual e a data da última modificação no rodapé
const anoAtual = document.querySelector("#ano-atual");
const ultimaModificacao = document.querySelector("#ultima-modificacao");

anoAtual.textContent = new Date().getFullYear();
ultimaModificacao.textContent = document.lastModified;