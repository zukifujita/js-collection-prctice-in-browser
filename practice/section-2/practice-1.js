'use strict';

function countSameElements(collection) {
  var key = [];
  var result = [];
  var count;

  for (var i = 0; i < collection.length; i++) {
    count = 0;
    key = collection[i];
    for (var j = i; j < collection.length; j++) {
      if(collection[i] == collection[j]) {
        count++;
      } else {
        result.push({key, count});
        break;
      }
    }
    i = j - 1;
    if(i + 1 == collection.length){
      result.push({key, count});
    }
  }
  return result;
}
