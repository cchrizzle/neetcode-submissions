class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const splitSortJoinS = s.split('')
                            .sort()
                            .join('')

        const splitSortJoinT = t.split('')
                            .sort()
                            .join('')

        return splitSortJoinS === splitSortJoinT;
    }
}
