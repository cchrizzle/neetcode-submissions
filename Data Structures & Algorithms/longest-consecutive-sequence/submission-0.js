class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sorted = nums.sort((a, b) => a - b);
        let count = 0;

        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i] - 1 === sorted[i - 1]) {
                count++;
            }
        }

        return count;
    }
}
