class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length < 2) return false;

        const parentheses = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        const stack = [];

        for (const char of s) {
            if (char in parentheses) {
                if (stack.at(-1) === parentheses[char]) stack.pop();
                else return false;
            } else stack.push(char)
        }

        if (stack.length !== 0) return false
        return true;
    }
}
