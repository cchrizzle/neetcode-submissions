class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for (const str of strs) {
            const values = new Array(26).fill(0);

            for (const char of str) {
                values[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = values.join(',');

            if (!res[key]) {
                res[key] = [];
                res[key].push(str);
            } else {
                res[key].push(str);
            }
        }

        return Object.values(res)

    }
}
