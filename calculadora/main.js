const inp = document.querySelector(".calc input")
const btns = document.querySelectorAll(".calc .num")

btns.forEach(function(bt) {
    bt.onclick = function() {
        inp.value += bt.textContent
    }
}); 