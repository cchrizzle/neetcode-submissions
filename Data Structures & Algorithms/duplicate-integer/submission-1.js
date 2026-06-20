class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return nums.map((c, i, a) => a.indexOf(c) === a.lastIndexOf(c) ? true : false)
    }
}
