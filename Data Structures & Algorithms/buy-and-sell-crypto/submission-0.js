class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = Math.min(...prices)

        let highest = 0

        for (let i = 0; i < prices.length; i++) {
            const lowestIndex = prices.indexOf(lowest)
            if (i > lowestIndex && prices[i] > highest) {
                highest = prices[i];
            }
        }

        if (highest > lowest) return highest - lowest;
        else {return 0}
    }
}
