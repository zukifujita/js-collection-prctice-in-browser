'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var key = [];
  var result = [];
  var number;
  var count;

  for (var i = 0; i < collectionA.length; i++) {
    count = 0;
    key = collectionA[i];
    if (collectionA[i].match(/[A-Za-z]/g)) {
      key = collectionA[i].replace(/[^A-Za-z]+/g, "");
    }
    for (var j = i; j < collectionA.length; j++) {
      if (collectionA[j].indexOf(key) > -1) {
        if (collectionA[j].match(/[0-9]+/g)) {
          number = collectionA[j].match(/[0-9]+/g);
          count += parseInt(number);
        } else {
          count++;
        }
      } else {
          if (objectB.value.indexOf(key) > -1) {
            if (objectB.value.indexOf(key) == 0) {
              count--;
            } else {
              count -= objectB.value.indexOf(key);
            }
          }
        result.push({key, count});
        break;
      }
    }
    i = j - 1;
    if (i + 1 == collectionA.length) {
      if(objectB.value.indexOf(key) > -1){
        if(objectB.value.indexOf(key) == 0){
          count--;
        } else {
          count -= objectB.value.indexOf(key);
        }
      }
      result.push({key, count});
    }
  }
  return result;
}
