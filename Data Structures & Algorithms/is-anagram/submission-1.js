class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sLetters = {};
        const tLetters = {};

        for (let i = 0; i < s.length; i++) {
            sLetters[s[i]] = (sLetters[s[i]] || 0) + 1;
            tLetters[t[i]] = (tLetters[t[i]] || 0) + 1;
        }

        for (const key in sLetters) {
            if (sLetters[key] !== tLetters[key]) return false;
        }

        return true;
    }
}
