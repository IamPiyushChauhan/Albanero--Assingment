// Q3) Given a string s and a array of strings wordArray, 
// return true if s can be segmented into a
// space-separated sequence of one or more array words.


function isSegmented(s,wordArray){
    for(let i=0;(i<wordArray.length) && (s.length >0);i++){
        const pattern = new RegExp(wordArray[i],'g');
        // to check wheather the word exist in string s 
        if(pattern.test(s)){
            //and replace matched word to empty string
            s = s.replace(pattern, '');
        }
    }
    return s.length === 0;
}


console.log(isSegmented( "leetcode",  ["leet","code"])); // true
console.log(isSegmented( "applepenapple",  ["apple","pen"])); //true
console.log(isSegmented( "catsandog",  ["cats","dog","sand","and","cat"])); //false

