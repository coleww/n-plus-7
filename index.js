module.exports = function(text, dict, n){
  var map = {}
  dict.forEach(function(word, i){
    map[word] = i
  })
  return text.split(" ").map(function(word){
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1) === word
    var allCaps = word.toUpperCase() === word
    var matchIdx = map[word.toLowerCase()]
    var newWord = ''
    if(matchIdx !== undefined){
      var j = matchIdx + (n || 7)
      if(j >= dict.length){
        j -= dict.length
      } else if (j < 0){
        j += dict.length
      }
      newWord =  dict[j]
      if(capitalized) newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
      if(allCaps) newWord = newWord.toUpperCase()
    } else {
      newWord =  word
    }
    return newWord
  }).join(" ")
}