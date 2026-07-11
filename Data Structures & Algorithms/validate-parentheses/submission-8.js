class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0 || s.length < 2) return false;

        const validParentheses = {
            ')': '(',
            '}': '{',
            ']': '[',
        };

        const stack = [];

        for (const char of s) {
            if (char in validParentheses) {
                if (stack.pop() !== validParentheses[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        if (stack.length !== 0) return false;
        return true;
    }
}
