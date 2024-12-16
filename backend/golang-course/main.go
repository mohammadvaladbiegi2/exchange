package main

import (
	"fmt"
	"golang-course/utils"
)

func main() {
	f := []int{1, 2, 3}
	s := []int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}
	fmt.Println(utils.RemoveDuplicates(f))
	fmt.Println(utils.RemoveDuplicates(s))
}
