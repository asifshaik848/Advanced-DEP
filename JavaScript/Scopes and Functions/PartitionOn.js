// Question Link:

// http://www.codewars.com/kata/partition-on


const partitionOn = (predicate, items) => {
    const neg = items.filter(item => !predicate(item));
    const pos= items.filter(item => predicate(item));
  
    items.splice(0);
    for(let i=0;i<neg.length;i++)
      items.push(neg[i]);
    for(let j=0;j<pos.length;j++)
      items.push(pos[j]);
    return neg.length;
  };