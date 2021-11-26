// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  function unique(arrayName)
{
  var newArray=new Array();
  label: for(var i=0; i<arrayName.length;i++ )
  {  
    for(var j=0; j<newArray.length;j++ )
    {
      if(newArray[j]==arrayName[i]) 
        continue label;
    }
    newArray[newArray.length] = arrayName[i];
  }
  return newArray;
}
var arr1 = [1, 2, 5, 6, 9, 10];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var union = unique(arr1.concat(arr2));
console.log(union);
}

console.log(result(arr1, arr2));