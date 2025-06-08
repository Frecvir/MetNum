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
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var n = parseInt(document.getElementById('n').value);

    // Supongamos que la función f(x) es x^2 (puedes cambiarla a cualquier otra)
    function f(x) {
        return x * x;
    }

    var h = (b - a) / n; // Ancho de los subintervalos
    var sum = f(a) + f(b); // Suma inicial con los extremos

    // Suma de los valores intermedios
    for (var i = 1; i < n; i++) {
        sum += 2 * f(a + i * h);
    }

    // Resultado del trapecio
    var result = (h / 2) * sum;

    document.getElementById('trapecioResult').innerText = 'Resultado del método del trapecio: ' + result;
}
