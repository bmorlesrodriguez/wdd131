const temperaturaC = 8;
const velocidadeVentoKmh = 10;

function calcularSensacaoTermica(temperatura, velocidadeDoVento) {
  return 13.12 + 0.6215 * temperatura - 11.37 * Math.pow(velocidadeDoVento, 0.16) + 0.3965 * temperatura * Math.pow(velocidadeDoVento, 0.16);
}

const yearElement = document.querySelector("#current-year");
const modifiedElement = document.querySelector("#last-modified");
const windChillElement = document.querySelector("#wind-chill");

yearElement.textContent = new Date().getFullYear();

const modifiedDate = new Date(document.lastModified);
const validModifiedDate = Number.isNaN(modifiedDate.getTime()) ? new Date() : modifiedDate;
const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
  timeStyle: "medium",
});
modifiedElement.dateTime = validModifiedDate.toISOString();
modifiedElement.textContent = dateFormatter.format(validModifiedDate);

if (temperaturaC <= 10 && velocidadeVentoKmh > 4.8) {
  const sensacaoTermica = calcularSensacaoTermica(temperaturaC, velocidadeVentoKmh);
  windChillElement.textContent = `${sensacaoTermica.toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })} °C`;
} else {
  windChillElement.textContent = "Não calculável";
}

const anoAtual = document.querySelector("#ano-atual");
const ultimaModificacao = document.querySelector("#ultima-modificacao");

anoAtual.textContent = new Date().getFullYear();
ultimaModificacao.textContent = document.lastModified;