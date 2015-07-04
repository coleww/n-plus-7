#!/usr/bin/env node

var nPlus7 = require('./')
var fs = require('fs')

if(process.stdin.isTTY) {
  var argv = require('yargs')
    .alias('h', 'help')
    .help('help')
    .usage('an oulipian text transformer')
    .example('nPlus7 -d nouns.txt -f kanye_lyrics.txt')
    .example('nPlus7 -f jokes.txt -n 5')
    .example('nPlus7 water fowl are my favorite treat')
    .example('echo demonstration | nPlus7')
    .alias('d', 'dict')
    .alias('n', 'enn')
    .alias('f', 'file')
    .describe('d', 'path to a txt file containing a newline separated dictionary')
    .describe('n', 'offset with which to perform the n-plus maneuver')
    .describe('f', 'path to file containing text to transform')
    .argv
  var dict
  if(argv.d) dict = fs.readFileSync(argv.d).toString().split("\n")
  var text = argv.f ? fs.readFileSync(argv.f).toString() : argv._.join(" ")

  process.stdout.write(nPlus7(text, dict, +argv.n))
  process.stdout.write("\n")
} else {

  var data = ''
  process.stdin.resume()
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', function(chunk) {
    data += chunk
  })

  process.stdin.on('end', function() {
    process.stdout.write(nPlus7(data))
    process.stdout.write("\n")
  })
}