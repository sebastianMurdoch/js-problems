let segundos = 0

function f() {
    setInterval(function () {
        segundos++;
        mostrar(segundos)
    }, 1000)
}
let seg = document.getElementById('seg')
function mostrar(segundos) {
    seg.innerText = segundos
}