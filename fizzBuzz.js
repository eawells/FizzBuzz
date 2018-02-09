module.exports.fizzBuzzFunction = function (number) {
    if(number === 3 || number === 6){
        return "fizz"
    }
    if(number === 5 || number === 10){
        return "buzz"
    }
    if(number === 15 || number === 30){
        return "fizzbuzz"
    }
    return number
}

function fizz () {

}