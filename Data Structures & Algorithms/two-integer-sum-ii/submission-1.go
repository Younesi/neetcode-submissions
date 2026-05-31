func twoSum(numbers []int, target int) []int {
    for i, num := range numbers {
        tmp := target - num
        l,r := i+1, len(numbers) -1
        for l <= r {
            mid := l + (r-l)/2
            if numbers[mid] == tmp {
                return []int{i+1, mid +1}
            } else if numbers[mid] < tmp {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return []int{}
}
