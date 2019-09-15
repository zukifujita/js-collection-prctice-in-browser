'use strict';

function countSameElements(collection) {
  var key = [];
  var result = [];
  var str;
  var count;

  for (var i = 0; i < collection.length; i++) {
    count = 0;
    key = collection[i];
    if (collection[i].match(/[A-Za-z]\W[0-9]/g)) {
      str = collection[j].split(/\W/g);
      key = str[0];
    }
    for (var j = i; j < collection.length; j++) {
      if(collection[i] == collection[j]) {
        if(collection[j].match(/[0-9]/g)) {
          str = collection[j].split(/\W/g);
          var num = str[1];
          count += parseInt(num);
        } else {
          count++;
        }
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
