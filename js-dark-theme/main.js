let clicks = 0

function cambiarEstilo() {
    clicks++;
    if (clicks%2==0) {
        document.querySelector('body').className = '';
        return
    }
    document.querySelector('body').className = 'dark';

}

document.getElementById('selector_estilo').addEventListener('click', cambiarEstilo)