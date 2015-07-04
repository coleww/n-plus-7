var nouns = require('./nouns')

module.exports = function(text, dict, n){
  var map = {}
  if(!dict) dict = nouns
  dict.forEach(function(word, i){
    map[word] = i
  })
  return text.split(/\n/).map(function(line){
    return line.split(/\s/).map(function(word){
      var capitalized = word.charAt(0).toUpperCase() + word.slice(1) === word
      var allCaps = word.toUpperCase() === word
      var punct = word.match(/\W+$/)
      var searchWord = punct ? word.substr(0, punct.index) : word
      var matchIdx = map[searchWord.toLowerCase()]
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
        if(punct) newWord += punct[0]
      } else {
        newWord =  word
      }
      return newWord
    }).join(" ")
  }).join("\n")
}