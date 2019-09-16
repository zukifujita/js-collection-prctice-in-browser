'use strict';

function countSameElements(collection) {
  var name = [];
  var result = [];
  var number;
  var summary;

  for (var i = 0; i < collection.length; i++) {
    summary = 0;
    name = collection[i];
    if (collection[i].match(/[A-Za-z]/g)) {
      name = collection[i].replace(/[^A-Za-z]+/g, "");
    }
    for (var j = i; j < collection.length; j++) {
      if(collection[j].indexOf(name) > -1) {
        if(collection[j].match(/[0-9]+/g)) {
          number = collection[j].match(/[0-9]+/g);
          summary += parseInt(number);
        } else {
          summary++;
        }
      } else {
        result.push({name, summary});
        break;
      }
    }
    i = j - 1;
    if(i + 1 == collection.length){
      result.push({name, summary});
    }
  }
  return result;
}
