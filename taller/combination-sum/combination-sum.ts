function combinationSum(candidates: number[], target: number): number[][] {
  const resultado: number[][] = [];
  const combinacion: number[] = [];

  function buscar(desde: number, resto: number): void {
    if (resto === 0) {
      resultado.push([...combinacion]);
      return;
    }

    for (let i = desde; i < candidates.length; i++) {
      if (candidates[i] > resto) continue;

      combinacion.push(candidates[i]);

      buscar(i, resto - candidates[i]);

      combinacion.pop();
    }
  }

  buscar(0, target);
  return resultado;
}
