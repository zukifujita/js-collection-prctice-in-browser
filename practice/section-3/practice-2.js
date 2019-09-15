'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  var min = 0;
  for (var i = 0; i < collectionA.length; i++) {
  var count = collectionA[i]["count"];
    for (var j = 0; j < objectB.value.length; j++) {
      if (collectionA[i].key[0] == objectB.value[j]) {
        while (min <= 3) {
          min++;
          if (min > 3) {
            min = 1;
          }
          break;
        }
        count = collectionA[i]["count"] - min;
      }
    }
    collectionA[i]["count"] = count;
    result.push(collectionA[i]);
  }
  return result;
}
