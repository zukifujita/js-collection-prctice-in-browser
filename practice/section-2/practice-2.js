'use strict';

function countSameElements(collection) {
  var key = [];
  var result = [];
  var count;

  for (var i = 0; i < collection.length; i++) {
    count = 0;
    key = collection[i];
    if (collection[i].match([A-Za-z])) {
      key = collection[i].replace([A-Za-z], "");
    }
    for (var j = i; j < collection.length; j++) {
      if(collection[i] == collection[j]) {
        if(collection[j].match([0-9])) {
          
        }
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
