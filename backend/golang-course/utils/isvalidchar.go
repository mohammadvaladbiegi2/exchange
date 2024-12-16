package utils

func IsValid(s string) bool {

	mapping := map[string]string{
		")": "(",
		"}": "{",
		"]": "[",
	}

	for _, char := range s {
		value, ok := mapping[string(char)]
		if ok {
			found := false
			for _, c := range s {
				if string(c) == value {
					found = true
					break
				}
			}

			if !found {
				return false
			}
		}
	}
	return true
}
