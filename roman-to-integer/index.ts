function romanToInt(s: string): number {
    const valueMap: {
        [key: string]: number
    } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const nextChar = s[i + 1];

        if (['IV', 'IX', 'XL', 'XC', 'CD', 'CM'].includes(`${char}${nextChar}`)) {
            result += valueMap[nextChar] - valueMap[char];
            i++;
        } else {
            result += valueMap[char];
        }
    }

    return result;
};
