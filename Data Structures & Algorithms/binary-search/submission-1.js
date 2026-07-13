class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const search = nums[mid];

            if (search === target) return mid;
            if (search > target) high = mid - 1;
            else low = mid + 1;
        }

        return -1;        
    }
}
