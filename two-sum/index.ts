function twoSum(arr: number[], target: number): number[] | null {
    let p1: number = 0, p2: number = 1;

    while (p1 < arr.length && p2 < arr.length) {
        if (arr[p1] + arr[p2] === target) return [p1, p2];

        p2++;

        if (p2 === arr.length) {
            p1++;
            p2 = p1 + 1;
        }
    }

    return null;
}
