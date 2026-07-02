class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sSort = s.split('')
            .sort()

        const tSort = t.split('')
            .sort()

        return sSort.join('') === tSort.join('');
    }
}
