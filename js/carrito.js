let contador = 0;
let productosActual = document.getElementById("contador-producto1")

document.getElementById("incrementar1").addEventListener('click', () => {
    contador++;
    document.getElementById("contador-producto1").textContent = contador;
});

document.getElementById('disminuir1').addEventListener('click', () => {
    if (contador>0) {
        contador--;
    }
        document.getElementById('contador-producto1').textContent = contador;
});

let contador2 = 0;
let productosActual2 = document.getElementById("contador-producto2")

document.getElementById("incrementar2").addEventListener('click', () => {
    contador2++;
    document.getElementById("contador-producto2").textContent = contador2;
});

document.getElementById('disminuir2').addEventListener('click', () => {
    if (contador2>0) {
        contador2--;
    }
        document.getElementById('contador-producto2').textContent = contador2;
});
