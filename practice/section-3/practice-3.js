'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var key = [];
  var result = [];
  var count;

  for (var i = 0; i < collectionA.length; i++) {
    count = 0;
    key = collectionA[i];
    for (var j = i; j < collectionA.length; j++) {
      var key2 = collectionA[j];
      if(collectionA[i] == objectB.value[j]) {
        count++;
      } else {
          if(collectionA[i] == objectB.value[j]) {
            if(objectB.value.indexOf(key) == 0) {
              count--;
            } else {
              count -= objectB.value[i];
            }
          }
          result.push({key, count});
          break;
      }
    }

    i = j - 1;
    if(i + 1 == collectionA.length){
      if(collectionA[i] == objectB.value[j]){
    	  if(objectB.value.indexOf(key) == 0){
    	    count--;
    	  } else {
    	      count -=objectB.value[i];
    	  }
      }
      result.push({key, count});
    }
  }
  return result;
}
