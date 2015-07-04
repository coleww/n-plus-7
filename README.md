n-plus-7
----------------

a tiny [oulipian](http://en.wikipedia.org/wiki/Oulipo) node module

"Replace every noun in a text with the seventh noun after it in a dictionary. ... Results will vary depending upon the dictionary used. This technique can also be performed on other lexical classes, such as verbs."


### INSTALL

`npm install n-plus-7`

### API


`function nPlus7(text, dict=[arrayOfNouns], n=7)`

- text: string to transform
- dict: an array of sorted lowercase words to substitute against. defaults to built in array of ~1000 nouns
- n: optional negative or positive number, defaults to 7

will preserve Capitalization, ALL-CAPSITIZATION, and trailing punctuation...


### EXAMPLE

```
    var nPlus7 = require('n-plus-7')

    // get word lists from the corpora project!
    var corpora = require('corpora-project')
    var dictionary = corpora.getFile('words', 'nouns')

    // get some noun words from wordo!
    var wordo = require('wordo')
    var dictionary = wordo.nouns.other

    // provide yr own words! Will take any array of strings!
    var dictionary = ['ackbar', 'banana', 'calamity', 'determined', 'ennui']

    // or don't provide a dictionary at all! we got u covered!

    var transformed = nPlus7('What a day to be living as a noble hippotamus!', dictionary)
    console.log(transformed)
    => 'What a elephant to be living as a noble jocularity!' // output depends on yr dictionary, obvz
```

