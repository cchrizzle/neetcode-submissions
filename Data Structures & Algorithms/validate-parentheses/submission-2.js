class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
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

        return true;
    }
}
