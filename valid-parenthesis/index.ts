function isValid(s: string): boolean {
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (['(', '[', '{'].includes(char)) stack.push(char);

        const bracketMap = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        if (bracketMap[char]) {
            if (stack[stack.length - 1] === bracketMap[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};