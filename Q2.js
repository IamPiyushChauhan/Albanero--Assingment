// Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

function groupAnagrams(strs) {
    let obj = {} // use to store anagram array and it key will be string of count or frequency of charater of array string 
    for(let i=0;i<strs.length;i++){

        let visitedCharArray = new Array(256).fill(0); // store the available or frequency of charater
        let str = strs[i];
        // to calculate frequency of charater of str
        for(let s = 0; s<str.length;s++){
            visitedCharArray[str.charCodeAt(s)] = visitedCharArray[str.charCodeAt(s)] + 1
        }
        
        const countStr = visitedCharArray.toString(); // convert array to string this string will be key for object 
        
        //store string in their respetive anagram key i.e visitedCharArray String
        if(obj[countStr] === undefined){
            obj[countStr] = [str];
        }else{
            obj[countStr] = [...obj[countStr] , str];
        }
    }
    
    
    return Object.values(obj)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// op [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
console.log(groupAnagrams([""]))
//[ [ '' ] ]
console.log(groupAnagrams(["a"]))
// [ 'a' ] ]