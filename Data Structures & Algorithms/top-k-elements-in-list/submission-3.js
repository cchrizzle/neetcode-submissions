class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsCount = {};
        const freq = Array.from({ length: nums.length + 1}, () => []);

        for (const num of nums) {
            numsCount[num] = (numsCount[num] ?? 0) + 1;
        }

        for (const num in numsCount) {
            freq[numsCount[num]].push(Number((num)));
        }

        const mostFreq = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const num of freq[i]) {
                mostFreq.push(num);

                if (mostFreq.length === k) {
                    return mostFreq;
                }
            }
        }
    }
}
