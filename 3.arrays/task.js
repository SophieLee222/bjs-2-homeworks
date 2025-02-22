function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1.every((item, index) => item === arr2[index])) {
    return true;
  } else {
    return false;
  }
}

function getUsersNamesInAgeRange(users, gender) {
  
}