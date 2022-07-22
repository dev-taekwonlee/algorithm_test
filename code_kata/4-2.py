def maxProfit(prices):
  prices_list = []
  for i in range(len(prices) - 1, -1 ,-1):
    for j in range(i - 1, -1, -1):
      prices_list.append(prices[i] - prices[j])
  result = max(prices_list)
  if result < 0:
    return 0
  return(result)
