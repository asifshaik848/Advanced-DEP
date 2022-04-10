// Question Link:

// http://www.codewars.com/kata/array-helpers


Object.prototype.hash = function(string) {
    try {
   return eval(`this.${string}`)
   }
   catch(e){
   return undefined
   }
 }