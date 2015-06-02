module.exports = function(text, dict, n){
  return text.split(" ").map(function(word){
    var matchIdx = dict.indexOf(word)
    if(matchIdx !== -1){
      var j = matchIdx + (n || 7)
      if(j >= dict.length){
        j -= dict.length
      } else if (j < 0){
        j += dict.length
      }
      return dict[j]
    } else {
      return word
    }
  }).join(" ")
}