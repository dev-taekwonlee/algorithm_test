def get_max_area(height):
  area_list = []
  for w1 in range(len(height)):
    for w2 in range(len(height)):
      h1 = height[w1]
      h2 = height[w2]
      area_list.append(abs(w1-w2) * min(h1,h2))
  return max(area_list)

# get_max_area([1, 8, 6, 2, 5, 4, 8, 3, 7])
