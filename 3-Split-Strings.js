function splitString(str) {
  const strLength = str.length;
  //const limit = Math.ceil(strLength / 2);

  myNewArray = [];

  for (let i = 0; i < strLength; i += 2) {
    let start = i;
    let end = i + 2;

    let newValue = str.slice(start, end);
    
    if (newValue.length == 1){
        newValue = newValue + "_";
    };

    myNewArray.push(newValue);
  }

  return myNewArray;
}

console.log(splitString("abcdefg"));
