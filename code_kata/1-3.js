const getLengthOfStr = str => {
    let sliceStr = [];
    let lastStr = 0;

    if (str.length <= 0) {
      return 0;
    }
    for (let i = 0; i < str.length; i++) {
      if (sliceStr.indexOf(str[i]) === -1) {
        sliceStr.push(str[i]);

        if (lastStr < sliceStr.length) {
          lastStr = sliceStr.length;
        }
      } else {
        sliceStr = sliceStr.slice(sliceStr.indexOf(str[i]) + 1);
        sliceStr.push(str[i]);
      }
    }
    return lastStr;
  }
