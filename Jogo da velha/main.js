const bt11 = document.querySelector(".grid :nth-child(1)")

let turn = 0
const ox = ["O", "X"]

bt11.onclick = function() {
    if (bt11.textContent.trim() != "") return
    bt11.textContent = ox[turn % 2]
    turn++
}