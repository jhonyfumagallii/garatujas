const rng = Math.round(Math.random()*5)
const inp = document.querySelector("#numero")
const btn = document.querySelector("button")
const erros = document.querySelector(".erros")
const acertos = document.querySelector(".acertos")
let erro=0
let acerto = 0

btn.onclick = function () {
    const val = parseInt(inp.value)
    if(rng==val){
        alert("Aeeee ganho")
        acerto++
        acertos.textContent = acerto
    } else {
        alert("perdeu seu merda")
        erro++
        erros.textContent = erro
    }
    
}