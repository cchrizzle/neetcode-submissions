class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length < 2 || s.length % 2 !== 0) return false;

        const validParentheses = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        const stack = [];

        for (const char of s) {
            if (char in validParentheses) {
                if (stack.pop() !== s[char]) {
                    return false;
                } else {
                    stack.pop();
                }
            } else {
                stack.push(s[char]);
            }
        }

        if (stack.length !== 0) return false
        return true;
    }
}
