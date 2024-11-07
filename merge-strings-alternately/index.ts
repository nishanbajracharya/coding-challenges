function mergeAlternately(word1: string, word2: string): string {
    const maxLength = Math.max(word1.length, word2.length);

    let result = '';

    for (let i = 0; i < maxLength; i++) {
        const w1 = word1.charAt(i) || '';
        const w2 = word2.charAt(i) || '';

        result += w1 + w2;
    }

    return result;
};
