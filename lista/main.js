const frm = document.querySelector("form")
const des = frm.descrição //frm.querySelector("input")
const val = frm.valor //frm.querySelector("input")
const l1 = document.querySelector("ul#l1")
const l2 = document.querySelector("ul#l2")
const select = document.querySelector("select")

frm.addEventListener('submit', (ev) => {
    if(select.value == "Entrada") {
        ev.preventDefault()
        let valor = val.value
        let descricao = des.value
        if (valor.trim() == "") return
        l1.innerHTML += `
        <li>
            <button type="button" title="Remover lançamento">−</button>
            <span>${descricao}</span>
            <span class="valorT">R$ ${valor}</span>
        </li>
    `
    }

    else{
        ev.preventDefault()
        let valor = val.value
        let descricao = des.value
        if (valor.trim() == "") return
        l2.innerHTML += `
        <li>
            <button type="button" title="Remover lançamento">−</button>
            <span>${descricao}</span>
            <span class="valorT">R$ ${valor}</span>
        </li>
    `   
    }

    atualizarSaldo()
})

l1.addEventListener('click', (ev) => {
    if (!ev.target.closest('button')) return
    ev.target.closest('li').remove()
    atualizarSaldo()
})

l2.addEventListener('click', (ev) => {
    if (!ev.target.closest('button')) return
    ev.target.closest('li').remove()
    atualizarSaldo()
})

function calcularSaldo() {
    let saldo = 0
    const ListaDeEntrada = document.querySelectorAll("ul#l1 .valorT")
    const ListaDeSaida = document.querySelectorAll("ul#l2 .valorT")

    ListaDeEntrada.forEach(element => {
        saldo += parseFloat(element.textContent.replace("R$", "").trim())
    })

    ListaDeSaida.forEach(element => {
        saldo -= parseFloat(element.textContent.replace("R$", "").trim())
    })

    return saldo
}

function atualizarSaldo() {
    let saldo = calcularSaldo()
    const elementoSaldo = document.querySelector("#saldo")

    elementoSaldo.classList.toggle("positivo", saldo >= 0)
    elementoSaldo.classList.toggle("negativo", saldo < 0)

    document.querySelector("#saldoTexto").textContent = saldo.toFixed(2).replace(".", ",")
}