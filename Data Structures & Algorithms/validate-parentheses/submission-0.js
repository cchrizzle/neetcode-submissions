class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let left = 0;
        let right = s.length - 1;

        const validParentheses = {
            '(': ')',
            '{': '}',
            '[': ']',
        }

        
        while (left < right) {
            if (s[right] !== validParentheses[s[left]]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
