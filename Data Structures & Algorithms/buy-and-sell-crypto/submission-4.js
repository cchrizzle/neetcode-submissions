class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let maxProfit = 0;

        while (right < prices.length - 1) {
            const difference = prices[right] - prices[left];

            if (prices[right] < prices[left]) {
                left = right;
            } else {
                if (difference > maxProfit) {
                    maxProfit = difference;
                }
            }
            right++
        }
        return maxProfit;
    }
}
