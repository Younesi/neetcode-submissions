func isValid(s string) bool {
    stack := []string{}
    closeToOpen := map[string]string {
        "}" : "{",
        "]" : "[",
        ")" : "(",
    }
    for _, c := range s {
        char := string(c)
        if open, exists := closeToOpen[char]; exists {
            if len(stack) > 0 && stack[len(stack)-1] == open {
               stack = stack[:len(stack)-1]
            } else {
                return false
            }
        } else {
            stack = append(stack, char)
        }
    }
    return len(stack) == 0
}
