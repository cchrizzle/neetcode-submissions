class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
         let left = 0;
         let right = 1;
         let maxProfit = 0;

         while (right < prices.length) {
            const diff = prices[right] - prices[left];

            if (prices[right] < prices[left]) {
                left = right;
            }

            if (diff > maxProfit) {
                maxProfit = diff;
            }

            right++;
         }

         return maxProfit;
    }
}
