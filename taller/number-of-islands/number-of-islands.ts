function numIslands(grid: string[][]): number {
  const filas = grid.length;
  const columnas = grid[0].length;

  const direcciones = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let islas = 0;

  for (let f = 0; f < filas; f++) {
    for (let c = 0; c < columnas; c++) {
      if (grid[f][c] !== "1") continue;

      islas++;

      const cola: number[][] = [[f, c]];
      grid[f][c] = "0";
      let cabeza = 0;

      while (cabeza < cola.length) {
        const [filaActual, columnaActual] = cola[cabeza++];

        for (const [df, dc] of direcciones) {
          const nf = filaActual + df;
          const nc = columnaActual + dc;

          const dentro = nf >= 0 && nf < filas && nc >= 0 && nc < columnas;
          if (dentro && grid[nf][nc] === "1") {
            grid[nf][nc] = "0";
            cola.push([nf, nc]);
          }
        }
      }
    }
  }

  return islas;
}
