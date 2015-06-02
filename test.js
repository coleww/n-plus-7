var tap = require('tape')
var nPlus7 = require('./')

var dict = [
  "food",
  "giraffes",
  "pokemon",
  "quarks",
  "robots",
  "sympathy",
  "turtles",
  "user"
]

tap.test('it replaces words based on n+7', function(t){
  t.plan(1)
  t.equal(nPlus7('food is delicious', dict), 'user is delicious')
})

tap.test('it replaces words based on optional n', function(t){
  t.plan(1)
  t.equal(nPlus7('food is delicious', dict, 3), 'quarks is delicious')
})

tap.test('it accepts a negative n', function(t){
  t.plan(1)
  t.equal(nPlus7('giraffes is delicious', dict, -1), 'food is delicious')
})

tap.test('it wraps around dictionary', function(t){
  t.plan(1)
  t.equal(nPlus7('sympathy is delicious', dict, 3), 'food is delicious')
})

tap.test('it wraps around dictionary negatively', function(t){
  t.plan(1)
  t.equal(nPlus7('food is delicious', dict, -2), 'turtles is delicious')
})
