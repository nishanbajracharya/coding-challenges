function majorityElement(arr: number[]): number {
  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]

    const count = map.get(num) || 0;

    map.set(num, count + 1);
  }

  const highest =  [...map.entries()].reduce(([prevNum, prevCount], [num, count]) => {
    if (count > prevCount) return [num, count];
    return [prevNum, prevCount];
  }, [0, 0]);

  return highest[0];
}
