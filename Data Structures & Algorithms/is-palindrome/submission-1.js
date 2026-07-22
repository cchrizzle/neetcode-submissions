class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const charsOnly = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

        let left = 0;
        let right = charsOnly.length - 1;


        while (left < right) {
            if (charsOnly[left] !== charsOnly[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
