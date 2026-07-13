/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(list *ListNode) *ListNode {
    if list == nil {
        return nil
    }
    newList := list
    if list.Next != nil {
        newList = reverseList(list.Next)
        list.Next.Next = list
    }
    list.Next = nil
    return newList
}