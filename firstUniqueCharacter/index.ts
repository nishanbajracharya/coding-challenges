function firstUniqueCharacter(str: string): string | number {
  const map = new Map<string, number>();

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    const count = map.get(char) || 0;

    map.set(char, count + 1);
  }

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    const count = map.get(char);

    if (count === 1) {
      return char;
    }
  }

  return -1;
}