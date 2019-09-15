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
      if(key.indexOf(key2) > -1) {
        count++;
      } else {
          if(objectB.value.indexOf(key) > -1) {
            if(objectB.value.indexOf(key) == 0) {
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
    if(i + 1 == collectionA.length){
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
