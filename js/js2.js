document.getElementById('gaussForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Leer los valores del formulario y construir la matriz aumentada
  let matrix = [
    [
      parseFloat(document.getElementById('a11').value),
      parseFloat(document.getElementById('a12').value),
      parseFloat(document.getElementById('a13').value),
      parseFloat(document.getElementById('b1').value)
    ],
    [
      parseFloat(document.getElementById('a21').value),
      parseFloat(document.getElementById('a22').value),
      parseFloat(document.getElementById('a23').value),
      parseFloat(document.getElementById('b2').value)
    ],
    [
      parseFloat(document.getElementById('a31').value),
      parseFloat(document.getElementById('a32').value),
      parseFloat(document.getElementById('a33').value),
      parseFloat(document.getElementById('b3').value)
    ]
  ];

  // Función para aplicar Gauss-Jordan en la matriz aumentada 3x4
  function gaussJordan(mat) {
    let n = 3;

    for (let i = 0; i < n; i++) {
      // Hacer el pivote 1 dividiendo toda la fila entre el elemento pivote
      let pivot = mat[i][i];
      if (pivot === 0) {
        return null; // No se puede dividir entre 0, sistema singular o requiere pivoteo
      }
      for (let j = 0; j < n + 1; j++) {
        mat[i][j] /= pivot;
      }

      // Eliminar la variable i en las otras filas
      for (let k = 0; k < n; k++) {
        if (k !== i) {
          let factor = mat[k][i];
          for (let j = 0; j < n + 1; j++) {
            mat[k][j] -= factor * mat[i][j];
          }
        }
      }
    }
    // Extraer soluciones
    return [mat[0][n], mat[1][n], mat[2][n]];
  }

  let resultado = gaussJordan(matrix);

  let resultadoDiv = document.getElementById('resultado');
  if (resultado === null) {
    resultadoDiv.textContent = 'El sistema no tiene solución única o requiere pivoteo.';
  } else {
    resultadoDiv.innerHTML = `
      <p><strong>Solución:</strong></p>
      <p>x = ${resultado[0].toFixed(4)}</p>
      <p>y = ${resultado[1].toFixed(4)}</p>
      <p>z = ${resultado[2].toFixed(4)}</p>
    `;
  }
});

// Botón para limpiar el formulario y el resultado
document.getElementById('limpiarBtn').addEventListener('click', function() {
  document.getElementById('gaussForm').reset();
  document.getElementById('resultado').innerHTML = '';
});
