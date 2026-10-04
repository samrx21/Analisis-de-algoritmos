function merge(intervals: number[][]): number[][] {
  const ordenados = ordenarPorInicio(intervals);
  const resultado: number[][] = [];

  let actual = [ordenados[0][0], ordenados[0][1]];

  for (let i = 1; i < ordenados.length; i++) {
    const [inicio, fin] = ordenados[i];

    if (inicio <= actual[1]) {
      if (fin > actual[1]) actual[1] = fin;
    } else {
      resultado.push(actual);
      actual = [inicio, fin];
    }
  }

  resultado.push(actual);
  return resultado;
}

function ordenarPorInicio(lista: number[][]): number[][] {
  if (lista.length <= 1) return lista;

  const mitad = lista.length >> 1;
  const izquierda = ordenarPorInicio(lista.slice(0, mitad));
  const derecha = ordenarPorInicio(lista.slice(mitad));

  const mezcla: number[][] = [];
  let i = 0;
  let j = 0;

  while (i < izquierda.length && j < derecha.length) {
    if (izquierda[i][0] <= derecha[j][0]) mezcla.push(izquierda[i++]);
    else mezcla.push(derecha[j++]);
  }
  while (i < izquierda.length) mezcla.push(izquierda[i++]);
  while (j < derecha.length) mezcla.push(derecha[j++]);

  return mezcla;
}
