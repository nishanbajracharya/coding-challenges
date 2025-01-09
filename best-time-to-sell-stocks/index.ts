function sellStocks(stocks: number[]) {
  let minPrice = stocks[0];
  let maxProfit = 0;

  for (let i = 1; i < stocks.length; i++) {
    if (stocks[i] < minPrice) {
      minPrice = stocks[i];
    } else {
      maxProfit = Math.max(maxProfit, stocks[i] - minPrice);
    }
  }

  return maxProfit;
}