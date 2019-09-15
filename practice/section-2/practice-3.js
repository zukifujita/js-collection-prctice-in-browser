'use strict';

function countSameElements(collection) {
  var key = [];
  var result = [];
  var strNum;
  var strLet;
  var summary;

  for (var i = 0; i < collection.length; i++) {
    summary = 0;
    name = collection[i];
    if (collection[i].match(/[A-Za-z]\W[0-9]/g)) {
      collection[i].replace(/\W/g, "");
      strLet = collection[i].match(/[A-Za-z]/g);
      name = strLet[0];
    }
    for (var j = i; j < collection.length; j++) {
      if(collection[i] == collection[j]) {
        if(collection[j].match(/[0-9]/g)) {
          strNum = collection[j].match(/[0-9]/g);
          summary += parseInt(strNum);
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
