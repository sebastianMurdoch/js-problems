let segundos = 0
let seg = document.getElementById('seg')

function f() {
    setInterval(function () {
        segundos++;
        mostrar(segundos)
    }, 1000)
}

function mostrar(segundos) {
    seg.innerText = segundos
}