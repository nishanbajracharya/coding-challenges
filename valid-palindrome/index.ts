function validPalindrome(s: string) {
    const str = s.toLowerCase();
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let filteredStr = '';
    let reversedFilteredStr = '';

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (lowercaseChars.includes(char)) {
            filteredStr += char;
        }
    }

    for (let i = filteredStr.length - 1; i >=0; i--) {
        reversedFilteredStr += filteredStr.charAt(i);
    }

    return filteredStr === reversedFilteredStr;
}