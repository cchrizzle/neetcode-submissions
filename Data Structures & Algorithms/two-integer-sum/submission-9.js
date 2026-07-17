class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = {};

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if (diff in numsMap) {
                return [numsMap[diff], i];
            } else {
                numsMap[nums[i]] = i;
            }
        }
    }
}
