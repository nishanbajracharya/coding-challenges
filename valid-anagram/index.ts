function validAnagram(s: string, t: string) {
    if (s.length !== t.length) return false;

    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
}