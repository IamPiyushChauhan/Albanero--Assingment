// Q5) Given a numsay of non-negative integers nums, 
// Find the Kth largest element in the numsay
// Note - Do not use any sorting algorithm or library's sort method

function kLargerst(nums,k){
    let kLarge;
    for(let i=0;i<k;i++){
       let max = Math.max(...nums);// finding max       
       kLarge = max;
       let index = nums.indexOf(max); // finding index of element
       nums.splice(index, 1); // remove max element
    }
    return kLarge; 
}

console.log(kLargerst([10,4,12,9,87,34], 2));//34