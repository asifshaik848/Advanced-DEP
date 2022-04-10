// Question Link:

// http://www.codewars.com/kata/word-count


function countWords(str) {
    // ...
    var ans=str.trim();
    if(ans==='')
      return 0;
    else
      return ans.split(/[\s]+/g).length;
  }