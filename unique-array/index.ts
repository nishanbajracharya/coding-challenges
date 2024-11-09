function findUnique(input: number[]): number[] {
    const mapArray: [number, number][] = [];
    const mapIndex: {[key: string]: number} = {};
    let counter = 0;

    for (let num of input) {
        if (!mapIndex[num] && mapIndex[num] !== 0) {
            mapIndex[num] = counter;
            mapArray.push([num, 0]);
            counter++;
        }

        mapArray[mapIndex[num]][1]++;
    }

    return mapArray.filter(([_, count]) => count === 1).map(([num]) => Number(num));
}
