var moment = require('moment')

// String- long strings of characters and letters
// var word = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

//console.log(word.length) // <-- property (a variable)
//console.log(word.toUpperCase()) // <-- Basically, a function
//console.log(word.toLowerCase())
//console.log(word.toUpperCase())
// word = word.toUpperCase()
// word = word.trim()
// word = word.toLowerCase()
// word = word.toUpperCase().trim().toLowerCase()

// var word = 'City of Seattle'
// word = word.repeat(5)
//word = 'Pizza is amazing'.substr(9,7) //9 characters from that many spaces to the right
//word = 'Pizza is amazing'.slice(9,16) //9 characters to the 16th character
//word = word.split(',')
// var word = 'City of Indiana'
// // var indianaIndexStart = word.indexOf('Indiana')
// return word.charAt(8)
// // var isItIndianapolis = word.includes('Seattle')
// // word = word.replace('Seattle', 'Indianapolis')
// console.log(word)

var phoneNumber = 'Phone Number 123-123-1234 888-389-3489'
var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/)
var hasPhoneNumber = phoneNumber.replace(/\d\d\d-\d\d\d-\d\d\d\d/gi, '[Redacted]')
//console.log(hasPhoneNumber)

// Number
// var number = Number('1')
// number = number + (number * 50)
// number++

var numberOfTimesWeDidSomething = 0

function doSomething(){
    var numberOfTimesWeDidSomething = 0
    numberOfTimesWeDidSomething++
}

doSomething()
doSomething()
doSomething()
doSomething()
doSomething()

// console.log(numberOfTimesWeDidSomething)
// Date

var today = new Date()
//console.log(today)
var yesterday = moment().subtract(2400, 'seconds')
//console.log(yesterday.format('MM/DD/YYYY HH:mm:ss'))

// Math
var price =  12.51
// var priceRounded = Math.ceil(price)
// var priceRounded = Math.round(price)
var priceRounded = Math.floor(price)
// console.log(priceRounded)
// console.log(Math.PI)

// var randomNumber = Math.round(Math.random() * 10)
// //console.log(randomNumber)
//
// var price = 12.045
// var cents = String(price).split('.')[1].substr(0,2)
// var dollars = String(price).split('.')[0]
// price = dollars + '.' + cents
//console.log(price)

//console.log(Number('12.045') === 12.045)

// Object
// var pizza = Object()
// var pie = {
//     ingredients: 'stuff',
//     meat: 'pepperoni',
//     cheese: 'mozzarella',
// }
//console.log(pie)
// Array
// var ingredients = [ 'meat',
//                    'cheese',
//                    'sauce',
//                    'spices',
//                    'crust',
//                    12,
//                    true,
//                    moment().format('MM/DD/YYYY') ]
//                    {
//                        ingredients: 'stuff',
//                        meat: 'pepperoni',
//                        cheese: 'mozzarella',
//                        price: 14.99
//                        priceRounded: Math.round(14.99)
// }
// console.log(price)

// var name = String('Tom')
// var name2 = 'Tom'

// console.log(name === name2)


// var number = Number(1)// === 1
// var boolean = Boolean(true)// === true


var ingredients = [
    'meat',
    'cheese',
    'sauce',
    'spices',
    'crust',
    12,
    true,
    moment().format('MM/DD/YYYY'),
    {
        sausage: 'mystery'
    }
]
console.log(ingredients)
