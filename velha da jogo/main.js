const btns = document.querySelectorAll("main button")

let turn = 0
const ox = ["O", "X"]


function teste(bt, index) {
    bt.onclick = function () {
        if (bt.textContent.trim() != "") return
        bt.textContent = ox[turn % 2]
        const col = index % 3
        turn++
    }
}

btns.forEach(teste)