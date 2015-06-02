n-plus-7
----------------

a tiny [oulipian](http://en.wikipedia.org/wiki/Oulipo) node module

"Replace every noun in a text with the seventh noun after it in a dictionary. ... Results will vary depending upon the dictionary used. This technique can also be performed on other lexical classes, such as verbs."


### INSTALL

`npm install n-plus-7`

### API


`function nPlus7(text, dict, n=7)`

- text: string to transform
- dict: an array of words to substitute
- n: optional negative or positive number, defaults to 7


### EXAMPLE

```
    var nPlus7 = require('n-plus-7')
    <!-- corpora for nouns? -->

    ...

```

