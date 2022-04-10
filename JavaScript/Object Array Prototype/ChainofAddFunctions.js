// Question Link:

// http://www.codewars.com/kata/a-chain-adding-function


function add(n) {
    var next = add.bind(n += this | 0);
    next.valueOf = function() { return n; };
    return next;
  }