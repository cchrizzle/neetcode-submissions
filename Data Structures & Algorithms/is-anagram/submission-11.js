class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sMap = new Map();

        for (const letter of s) {
            sMap[letter] = (sMap[letter] || 0) + 1
        }

        for (const letter of t) {
            if (!sMap[letter]) return false;

            sMap[letter]--;

            if (sMap[letter] < 0) return false;
        }

        return true;
    }
}
