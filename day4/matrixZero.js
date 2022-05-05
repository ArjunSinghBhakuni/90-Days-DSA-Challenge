//https://leetcode.com/problems/set-matrix-zeroes/description/


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    
  const rowSet = new Set();
  const columnSet = new Set();
  const m = matrix.length;
  const n = matrix[0].length;

// find zero index
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i);
        columnSet.add(j);
      }
    }
  }

  [...rowSet].forEach(row => {
    for (let i = 0; i < n; i++) {
      matrix[row][i] = 0;
    }
  });

  [...columnSet].forEach(column => {
    for (let i = 0; i < m; i++) {
      matrix[i][column] = 0;
    }
  });
};
    
