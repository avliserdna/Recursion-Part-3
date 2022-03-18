/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr, newArray = []) {
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i]
    Array.isArray(ele) ? newArray = newArray.concat(flatten(ele)) : newArray.push(ele)
    // if (Array.isArray(ele)) {
    //   newArray = newArray.concat(flatten(ele))
    // }
    // else {
    //   newArray.push(ele)
    // }
  }
  return newArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
