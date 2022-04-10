// Question Link:

// http://www.codewars.com/kata/transportation-on-vacation


function rentalCarCost(d) {
    // Your solution here
    var sol=d*40;
    if(d>=7)
      sol-=50;
    else if(d>=3)
      sol-=20;
    return sol;
  }