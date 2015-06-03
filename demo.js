var nPlus7 = require('./')
var nouns = require('./nouns')

function doIt(){
  var txt = document.getElementById("txt")
  document.getElementById("result").textContent = nPlus7(txt.value, nouns, 7)
}


doIt()

document.getElementById("doIt").onclick = doIt
