'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  for (var i = 0; i < collectionA.length; i++) {
  var count = collectionA[i]["count"];
    for (var j = 0; j < objectB.value.length; j++) {
      if (collectionA[i].key[0] == objectB.value[j]) {
        count = collectionA[i]["count"] - 1;
      }
    }
    collectionA[i]["count"] = count;
    result.push(collectionA[i]);
  }
  return result;
}
