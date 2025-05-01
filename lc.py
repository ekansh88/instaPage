import bisect


def countSubarrays(nums, k) -> int:
    maxi = max(nums)
    res = 0
    pos = []
    for i in range(len(nums)):
        if nums[i]==maxi:
            pos.append(i)
    print(pos)
    for i in range(len(nums)):
        print("---")
        midStart = bisect.bisect_left(nums, i)
        print(i, midStart)
        if len(nums)<midStart: break

        midEnd = -1 if len(pos)<midStart+1 else midStart+1
        if midEnd<midStart: break
        print(midEnd)

        maxEnd = len(pos)-1 if len(pos)-1<midEnd+1 else midEnd+1 
        print(maxEnd)
        maxEnd =  maxEnd if maxEnd<len(nums) else -1
        print(i, maxEnd-midEnd)
        print(midEnd, maxEnd)
        res += pos[maxEnd]-pos[midEnd]

    return res

nums = [1,3,2,3,3]
k = 2
print(nums)
print(countSubarrays(nums, k))