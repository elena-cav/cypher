package main

import (
	"fmt"
	"testing"
)

func TestCypher(t *testing.T) {

	tables := []struct {
		x []byte
		y int
		n string
	}{
		{[]byte("hello"), 2, "jgnnq"},
		{[]byte("helloy"), 3, "khoorb"},
		{[]byte("hello"), -1, "gdkkn"},
		{[]byte("aello"), -1, "zdkkn"},
		{[]byte("hel.l,o"), 2, "jgn.n,q"},
	}

	for _, table := range tables {
		cyphered := cypher(table.x, table.y)
		if cyphered.String() != table.n {
			fmt.Printf("error")
			t.Errorf("Expected '%s' but got '%s'", table.n, cyphered)
		}
	}

}
