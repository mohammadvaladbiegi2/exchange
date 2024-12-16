package utils

func RemoveDuplicates(nums []int) []int {

	if len(nums) == 0 {
		return 0
	}

	writeIndex := 0

	for readIndex := 1; readIndex < len(nums); readIndex++ {
		if nums[readIndex] != nums[readIndex-1] {
			nums[writeIndex] = nums[readIndex]
			writeIndex++
		}
	}

	return nums[:writeIndex]

}
