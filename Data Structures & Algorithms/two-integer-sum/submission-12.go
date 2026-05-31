func twoSum(nums []int, target int) []int {
    mem := make(map[int]int)
    for i,n := range nums {
        reminder := target - n
        if j, found := mem[reminder]; found {
            return []int{j, i}
        }
        mem[n]=i
    }
    return []int{}
}
