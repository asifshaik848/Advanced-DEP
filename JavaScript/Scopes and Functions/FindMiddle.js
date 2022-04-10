// Question Link:

// http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s)
{
  //Code goes here!
  var len=s.length;
  if(len%2==0)
    return s[len/2-1]+s[len/2];
  else
    return s[parseInt(len/2)];
}