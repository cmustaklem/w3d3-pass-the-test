var moment = require('moment')

// Null & Undefined
function isNull(value) {
    return value === null
}
var emptyGlass = null
console.log(isNull(emptyGlass))
console.assert(isNull(emptyGlass) === true)

function isUndefined(value) {
    return value === blockOfClay
}
var blockOfClay
console.log(isUndefined(blockOfClay))
console.assert(isUndefined(blockOfClay) === true)

// Booleans
function isTrue(value) {
    return value
}
console.log(isTrue(1 + 1 === 2))
console.assert(isTrue(1 + 1 === 2) === true)

// Strings
function convertCaseLower(value) {
    return value.toLowerCase()
}
console.log(convertCaseLower('I AM WISPERING.'))
console.assert(convertCaseLower('I AM WISPERING.') === 'i am wispering.')

function convertCaseUpper(value) {
    return value.toUpperCase()
}
console.log(convertCaseUpper('i am shouting!'))
console.assert(convertCaseUpper('i am shouting!') === 'I AM SHOUTING!')

function repeatWord(word) {
    return word.repeat(2)
}
console.log(repeatWord('Knock.', 2))
console.assert(repeatWord('Knock.', 2) === 'Knock.Knock.')

function sliceWord(word) {
    return word.slice(7,12)
}
console.log(sliceWord('I love pizza!', 7, 12))
console.assert(sliceWord('I love pizza!', 7, 12) === 'pizza')

function splitWord(word) {
    return word.split(',')
}
console.log(splitWord('US,CA,MX,JP,UK', ','))
console.assert(splitWord('US,CA,MX,JP,UK', ',').length === 5)

function whereIsCarmen(sentence, name) {
    return sentence.indexOf(name)
}
console.log(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen'))
console.assert(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27)
//
function doesItContain(sentence) {
    return sentence.includes('Museum')
}
console.log(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum'))
console.assert(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true)
//
// // Regular Expressions
function extractZipCode(value) {
    return value.match(/\d\d\d\d\d/) [0]
}
console.log(extractZipCode('My zip code was 46240.'))
console.assert(extractZipCode('My zip code was 46240.') === '46240')

function isPhoneNumber(value) {
    return /\(\d{3}\)\s\d{3}.\d{4}/.test(value)
}
console.log(isPhoneNumber('(888) 123.1234'))
console.assert(isPhoneNumber('(888) 123.1234') === true)
//
// // Numbers
function stringToNumber(value) {
    return value.number = Number('1999')
}
console.log(stringToNumber('1999'))
console.assert(stringToNumber('1999') === 1999)
//
function incrementByOne(value) {
    return value.number = value + 1
}
console.log(incrementByOne(0))
console.assert(incrementByOne(0) === 1)
//
function isDivisibleByThree(value) {
    return value % 3 === 0
}
console.log(isDivisibleByThree(9))
console.assert(isDivisibleByThree(9) === true)
//
function makeRandomNumber(value) {
    return randomNumber = Math.round(Math.random() * 10)
}
console.log(makeRandomNumber(10))
console.assert(makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10)
//
function roundNumber(price) {
    return Rounded = Math.round(price)
}
console.log(roundNumber(5.51))
console.assert(roundNumber(5.51) === 6)
//
// // Dates
function justAMoment(date) {
    // Look at moment.js docs to find how to return the day name, like Wednesday
    return date = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")
}
console.log(justAMoment())
console.assert(justAMoment().includes('day') === true)
//
// // Objects
function myNameIs(value) {
    return value.name
}
console.log(myNameIs({name:'Your Name Here'}))
console.assert(myNameIs({name:'Your Name Here'}) === 'Your Name Here')
//
// // Arrays
function getFirstItem(value) {
    return value[0]
}
console.log(getFirstItem(['Dog','Cat','Pig','Bird','Fish']))
console.assert(getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')
