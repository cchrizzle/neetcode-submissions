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
            sMap.set(letter, (sMap.get(letter) || 0) + 1)
        }

        for (const letter of t) {
            if(!sMap.get(letter)) return false;

            sMap.set(letter, (sMap.get(letter) || 0) - 1);

            if(sMap.get(letter) < 0) return false;
        }

        return true;
    }
}
