'use strict';

function countSameElements(collection) {
  var key = [];
  var result = [];
  var number;
  var letter;
  var count;

  for (var i = 0; i < collection.length; i++) {
    count = 0;
    key = collection[i];
    if (collection[i].match(/[A-Za-z]/g)) {
      letter = collection[i].match(/[A-Za-z]/g);
      key = letter[0];
    }
    for (var j = i; j < collection.length; j++) {
      if(collection[i] == collection[j]) {
        if(collection[j].match(/[0-9]/g)) {
          number = collection[j].match(/[0-9]/g);
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
    if(i + 1 == collection.length){
      result.push({key, count});
    }
  }
  return result;
}
