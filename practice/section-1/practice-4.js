'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < objectB.value.length; j++) {
      if (collectionA[i].key[0] == objectB.value[j]) {
        result.push(collectionA[i].key[0]);
      }
    }
  }
  return result;
}
