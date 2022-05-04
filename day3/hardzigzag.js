// https://www.geeksforgeeks.org/zigzag-or-diagonal-traversal-of-matrix/

// https://practice.geeksforgeeks.org/problems/print-diagonally4331/1

 
		// printing elements above and on 
	    // second diagonal
	    for (let k = 0; k < n; k++) {
	 
      // traversing downwards starting
      // from first row
      let row = 0, col = k;
      while (col >= 0) {
          ans.push_back(A[row][col]);
          row++, col--;
      }
  }

  // printing elements below second
  // diagonal
  for (let j = 1; j < n; j++) {

      // traversing downwards starting 
      // from last column
      let col = n - 1, row = j;
      while (row < n) {
          ans.push_back(A[row][col]);
          row++, col--;
      }
  }

 
 