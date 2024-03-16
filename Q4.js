// Q4) Given an array of non-negative integers nums, arrange 
// them such that they form the largest number and return it.
// Note return the result in the form of string

function generateLargersNumber(nums){
    // conver each number of array to string
    nums = nums.map((num)=> num.toString());
    
   for(let i=0;i<nums.length;i++){
      for(let j=i+1;j<nums.length;j++){
        let ij = nums[i]+nums[j];
        let ji = nums[j]+nums[i];
        
        if(ij<ji){
            //swap
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
      }
   }
   // conver to array to string
   return nums.join("")
    
}


console.log(generateLargersNumber([2,10])); //210
console.log(generateLargersNumber([3,30,34,5,9])); // 9534330