// To find the next permutation we are going to do below three steps
// first find the peak
// second find the largest number compare to (peak - 1) to the right of peak
// and last reverse the array from peak to end
 

var nextPermutation = function(nums) {   
// STEP1: find the peak : start loop from the end of array
let peak
for (let i = nums.length; i >= 0; i--){
   // edge case
   if (i == 0){
       peak = 0
   }
   if (nums[i] > nums[i-1]){
       peak = i
       break
   }
}

//STEP2: find the next largest of peak - 1 and swap those

for (let j = nums.length - 1; j >=0; j--){
   if (nums[peak - 1] < nums[j]) {
       let temp = nums[j]
       nums[j] = nums[peak -1]
       nums[peak -1] = temp
       break
   }
}


//STEP3: reverse the array from peak to end

let start = peak
let end = nums.length - 1


while (start < end) {
   
   let temp = nums[start]
   nums[start] = nums[end]
   nums[end] = temp
   start++
   end--
}

return nums
};