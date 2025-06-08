// Función para calcular la interpolación lineal
function calcularInterpolacion() {
    var x = parseFloat(document.getElementById('x').value);
    var X0 = parseFloat(document.getElementById('X0').value);
    var fX0 = parseFloat(document.getElementById('fX0').value);
    var X1 = parseFloat(document.getElementById('X1').value);
    var fX1 = parseFloat(document.getElementById('fX1').value);

    // Fórmula de interpolación lineal
    var result = fX0 + ((x - X0) * (fX1 - fX0)) / (X1 - X0);

    document.getElementById('fX').innerText = 'Resultado de la interpolación: ' + result;
}

// Función para calcular el error
function calcularErrores() {
    var valorReal = parseFloat(document.getElementById('valorReal').value);
    var valorAproximado = parseFloat(document.getElementById('valorAproximado').value);

    // Cálculos de error
    var absoluteError = Math.abs(valorReal - valorAproximado);
    var relativeError = absoluteError / Math.abs(valorReal);
    var percentageError = relativeError * 100;

    document.getElementById('absoluteError').innerText = 'Error Absoluto: ' + absoluteError;
    document.getElementById('relativeError').innerText = 'Error Relativo: ' + relativeError;
    document.getElementById('percentageError').innerText = 'Error Porcentual: ' + percentageError + '%';
}

// Función para calcular el método del Trapecio
function calcularTrapecio() {
    // Obtener valores desde el formulario
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var n = parseInt(document.getElementById('n').value);
    var funcionTexto = document.getElementById('funcion').value;

    // Validación básica
    if (isNaN(a) || isNaN(b) || isNaN(n) || !funcionTexto) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    // Intentar convertir el texto en una función real de JavaScript
    let f;
    try {
        f = new Function("x", "return " + funcionTexto + ";");
        // Prueba rápida de ejecución
        f(a);
    } catch (error) {
        alert("Error en la función ingresada. Verifica la sintaxis. Ej: x*x + 2");
        return;
    }

    // Cálculo del método del trapecio
    var h = (b - a) / n;
    var sum = f(a) + f(b);

    for (var i = 1; i < n; i++) {
        sum += 2 * f(a + i * h);
    }

    var resultado = (h / 2) * sum;

    // Mostrar resultado
    let salida = document.getElementById("resultadoTrapecio");
    if (!salida) {
        salida = document.createElement("p");
        salida.id = "resultadoTrapecio";
        salida.style.color = "white";
        document.getElementById("interpolationForm").appendChild(salida);
    }
    salida.textContent = "Resultado aproximado: " + resultado.toFixed(6);
}
