'use strict';

function countSameElements(collection) {
  var key = [];
  var result = [];
  var number;
  var count;

  for (var i = 0; i < collection.length; i++) {
    count = 0;
    key = collection[i];
    if (collection[i].match(/[A-Za-z]/g)) {
      key = collection[i].replace(/[^A-Za-z]+/g, "");
    }
    for (var j = i; j < collection.length; j++) {
      if (collection[j].indexOf(key) > -1) {
        if (collection[j].match(/[0-9]+/g)) {
          number = collection[j].match(/[0-9]+/g);
          count += parseInt(number);
        } else {
          count++;
        }
      } else {
        result.push({key, count});
        break;
      }
    }
    i = j - 1;
    if (i + 1 == collection.length) {
      result.push({key, count});
    }
  }
  return result;
}
