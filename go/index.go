package main

import (
	"bytes"
	"fmt"
	"os"
	"time"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}
func main() {
	dat, _ := os.ReadFile("../prideAndPrejudice2.txt")
	shift := -1
	start := time.Now()
	var cyphered = cypher(shift, dat)
	fmt.Println("Milliseconds to process:", time.Since(start))
	err := os.WriteFile("../cypheredGO.txt", cyphered.Bytes(), 0644)
	check(err)
}

func cypher(shift int, text []byte) *bytes.Buffer {

	buffer := bytes.NewBuffer([]byte{})
	for _, s := range text {

		isUpperCase := s > 64 && s < 91
		isLowerCase := s > 96 && s < 123

		shiftChar := func(s byte, v int) byte {
			calcShift := (int(s) + shift - v) % 26
			var res byte
			if calcShift < 0 {
				res = byte((calcShift) + v + 26)
			} else {
				res = byte((calcShift) + v)
			}
			return res
		}
		if isUpperCase {
			s = shiftChar(s, 65)
		}
		if isLowerCase {
			s = shiftChar(s, 97)
		}
		buffer.WriteByte(s)
	}
	return buffer
}
