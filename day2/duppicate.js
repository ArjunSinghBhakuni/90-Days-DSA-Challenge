// MY apporach 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let obj = {} 
   for(let i =0;i<nums.length;i++){
 if(obj[nums[i]]===undefined){
obj[nums[i]]=1
 
 }else {
obj[nums[i]]++;
 }
   }
   let arr = Object.values(obj)
   
   for(i=0;i<arr.length;i++){
if(arr[i]>1){
return true;

}
   }
   return false;
};





// 2nd Approach
var containsDuplicate = function(nums) {
 nums.sort((num1, num2) => num1 - num2);
 
 for(let i=0; i<nums.length - 1; i++){
     if(nums[i] === nums[i + 1]) return true;
 }
 
 return false;
};

// 3rd Approach

var containsDuplicate = function(nums) {
 
 return nums.length !== (new Set(nums)).size;


}