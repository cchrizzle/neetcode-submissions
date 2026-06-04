class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const output = [];

        for (let i = 0; i < nums.length; i++) {
            for (let j = 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    output.push(i, j)
                    return output;
                }
            }
        }
    }
}
