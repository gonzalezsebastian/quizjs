document.addEventListener('DOMContentLoaded', () => {
    const numeroInput = document.getElementById('numero');
    const calcularBtn = document.getElementById('calcular');
    const resultadoList = document.getElementById('resultado');

    calcularBtn.addEventListener('click', () => {
        resultadoList.innerHTML = '';
        const n = parseInt(numeroInput.value);

        if (!isNaN(n) && n >= 0) {
            let contador = 0;
            let numeroActual = 0;

            while (contador < n) {
                const cubo = numeroActual ** 3;
                const cuboStr = cubo.toString();
                const numeroStr = numeroActual.toString();

                if (cuboStr.endsWith(numeroStr)) {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${numeroActual} (cubo: ${cubo})`;
                    resultadoList.appendChild(listItem);
                    contador++;
                }

                numeroActual++;
            }
        } else {
            alert('Por favor, ingrese un número válido y positivo para N.');
        }
    });
});