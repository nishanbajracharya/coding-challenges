function sumOfDigits(num: number) {
    const absNum = Math.abs(num);

    const absString = `${absNum}`.split('');

    let sum = 0;
    for (let i = 0; i < absString.length; i++) {
        if (absString[i] === '.') return sum;

        const val = Number(absString[i]);

        sum += val;
    }

    return sum;
}
