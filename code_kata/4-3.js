const groupAnagrams = strs => {
  let hash = {}

  strs.forEach(str => {
      let letters = str.split('').sort()

      hash[letters] ? hash[letters].push(str) : hash[letters] = [str]
  })
  const keys = Object.keys(hash);
  const values = keys.map(function(v) { return hash[v]; });
  return values

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))


// --- uncompleted solutions ---

/*  let sortAlphabets = function(word) {
  return word.split('').sort().join('');
}
for (let i = 0; i < strs.length; i++) {
  strs[i] = sortAlphabets(strs[i]);
}
for (let j = 0; j < strs.length; j++) {
  sameAlphabets.append(strs[j]);
  for (let k = j + 1; k < strs.length; k++) {
    if (strs[j] === strs[k]) {

    }
  }
  //strs[j] =
}

return strs;
*/

// console.log(sameAlphabets);
