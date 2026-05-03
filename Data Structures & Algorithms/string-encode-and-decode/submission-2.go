type Solution struct{}

func (s *Solution) Encode(strs []string) string {
	var sb strings.Builder

	for i :=0; i <len(strs); i ++ {
			sb.WriteString(strconv.Itoa(len(strs[i])))
			sb.WriteString("#")
			sb.WriteString(strs[i])
	}
	return sb.String()
}

func (s *Solution) Decode(encoded string) []string {
 	var res []string
	i := 0

	for i < len(encoded) {
		// 1. read number (length)
		j := i
		for j < len(encoded) && encoded[j] != '#' {
			j++
		}

		length, _ := strconv.Atoi(encoded[i:j])

		// 2. skip '#'
		j++

		// 3. read next `length` characters
		value := encoded[j : j+length]
		res = append(res, value)

		// 4. move forward
		i = j + length
	}

	return res
}

