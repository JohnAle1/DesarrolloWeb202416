generar = () => {
  const tablero = document.getElementById("tablero");
  tablero.innerHTML = "";
  let contador = 1;
  for (let fila = 0; fila < 5; fila++) {
    const filaElemento = document.createElement("tr");
    for (let columna = 0; columna < 5; columna++) {
      const casilla = document.createElement("td");
      filaElemento.appendChild(casilla);
      casilla.textContent = contador;
      contador++;
    }
    tablero.appendChild(filaElemento);
  }
};
