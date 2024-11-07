function nonRepeatingElement(arr: number[]) {
    const map = {};

    arr.forEach(num => {
        if (!map[num]) map[num] = 0;
        map[num]++;
    });

    const single = Object.entries(map).find(el => el[1] === 1);

    if (!single) return null;
    
    return single[0];
}
