function eraseOverlapIntervals(intervals: number[][]): number {
  const ordenados = ordenarPorFin(intervals);

  let aceptados = 1;
  let finUltimoAceptado = ordenados[0][1];

  for (let i = 1; i < ordenados.length; i++) {
    const [inicio, fin] = ordenados[i];

    if (inicio >= finUltimoAceptado) {
      aceptados++;
      finUltimoAceptado = fin;
    }
  }

  return intervals.length - aceptados;
}

function ordenarPorFin(lista: number[][]): number[][] {
  if (lista.length <= 1) return lista;

  const mitad = lista.length >> 1;
  const izquierda = ordenarPorFin(lista.slice(0, mitad));
  const derecha = ordenarPorFin(lista.slice(mitad));

  const mezcla: number[][] = [];
  let i = 0;
  let j = 0;

  while (i < izquierda.length && j < derecha.length) {
    if (izquierda[i][1] <= derecha[j][1]) mezcla.push(izquierda[i++]);
    else mezcla.push(derecha[j++]);
  }
  while (i < izquierda.length) mezcla.push(izquierda[i++]);
  while (j < derecha.length) mezcla.push(derecha[j++]);

  return mezcla;
}
