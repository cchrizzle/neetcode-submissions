class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closedToOpen = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        const stack = [];

        for (const char of s) {
            if (char in closedToOpen) {
                if (stack.at(-1) === closedToOpen[char]) {
                    stack.pop()
                } else return false;
            } else {
                stack.push(char)
            }
        }

        if (stack.length !== 0) return false;
        else return true;
    }
}
