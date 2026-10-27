const frm = document.querySelector("form")
const inp = frm.item //frm.querySelector("input")
const lst = document.querySelector("ul")

frm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const valor = inp.value
    if (valor.trim() == "") return
    inp.value = ""
    lst.innerHTML += `
    <li>
        <button>remover</button>
        <span>${valor}</span>
    </li>
    `
})

lst.addEventListener('click', (ev)=>{
    if (!ev.target.closest('button')) return
    ev.target.closest('li').remove()
})