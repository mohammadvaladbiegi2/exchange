package utils

import (
	"strings"
)

func LengthOfLastWord(s string) int {
	listword := strings.Fields(s)
	last := listword[len(listword)-1]

	return len(last)
}
