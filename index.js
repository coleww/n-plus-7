module.exports = function(text, dict, n){
  return text.split(" ").map(function(word){
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1) === word
    var allCaps = word.toUpperCase() === word
    var matchIdx = dict.indexOf(word.toLowerCase())
    var newWord = ''
    if(matchIdx !== -1){
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