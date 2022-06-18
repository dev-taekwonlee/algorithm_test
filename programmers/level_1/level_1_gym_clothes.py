def solution(n, lost, reserve):
	lost, reserve = list(set(lost) - set(reserve)), list(set(reserve) - set(lost))
	for i in reserve:
		if i-1 in lost:
			lost.remove(i-1)
		elif i+1 in lost:
			lost.remove(i+1)
	return n - len(lost)

# example
print(solution(5, [1,2], [2,3,4]))
# return value should be 4
