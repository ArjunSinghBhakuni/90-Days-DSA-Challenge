//https://leetcode.com/problems/spiral-matrix/submissions/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  const n = matrix.length
  const m =  matrix[0].length
  let top =0;
  let left =0;
  let right = m-1;
  let bottom = n-1;
   let number = []
  let count = 0;
  
  while(count<m*n){

  for(let i = left;i<=right && count<m*n;i++){

      number.push(matrix[top][i])
      count++
  }
      top++
      for(let i =top;i<=bottom  && count<m*n;i++ ){

      number.push(matrix[i][right])
      count++
      }
      right--
      for(let i=right;i>=left  && count<m*n;i--)
          {
              number.push(matrix[bottom][i])
          count++
          }
      bottom--
      for(let i=bottom;i>=top  && count<m*n;i--){
          
          number.push(matrix[i][left])
      count++
      }
      left++ 
  
  }
 // console.log(number)
 return number
  
  
};