let rng = Math.floor(Math.random() * 5) + 1;
const numero = document.getElementById('input');
const button = document.querySelector('button');
const erros = document.getElementById('erros');
const acertos = document.getElementById('acertos');
let errosCont = 0;
let acertosCont = 0;

button.onclick = () => {
    const tentativa = parseInt(numero.value);
    if  (tentativa == rng) {
        acertosCont++;
        acertos.textContent = acertosCont;
    } else {
        errosCont++;
        erros.textContent = errosCont;
    }
    rng = Math.floor(Math.random() * 5) + 1;
};