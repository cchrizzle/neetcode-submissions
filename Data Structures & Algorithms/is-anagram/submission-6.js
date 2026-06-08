class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = {};

        for (const letter of s) {
            sMap[letter] = (sMap[letter] || 0) + 1;
        }

        for (const letter of t) {
            if (!sMap[letter]) return false;
            sMap[letter]--;
        }

        return true;
    }
}
