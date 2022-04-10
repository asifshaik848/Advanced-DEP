// Question Link:

// http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
    // TODO
    if(typeof obj.sayHoHoHo !== 'function' ) return false;
    if(typeof obj.distributeGifts !== 'function') return false;
    if(typeof obj.goDownTheChimney !== 'function') return false;
    else return true;
  }