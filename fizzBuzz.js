module.exports.fizzBuzzFunction = function (number) {
    if(numberIsDivisibleBy3And5(number)){
        return "fizzbuzz"
    }

    if(numberIsDivisibleByThreeOrContainsA3(number)){
        return "fizz"
    }
    if(numberIsDivisibleByFiveOrContainsA5(number)) {
        return "buzz"
    }

    return number
}

function numberIsDivisibleBy3And5(number) {
    return numberIsDivisibleBy3(number) && numberIsDivisibleBy5(number)
}

function numberIsDivisibleBy5(number) {
    return number % 5 === 0
}

function numberIsDivisibleBy3(number) {
    return number % 3 === 0
}

function numberIsDivisibleByThreeOrContainsA3(number) {
    return numberIsDivisibleBy3(number) || numberContains3(number)
}

function numberContains3(number) {
    return number.toString().indexOf("3")>-1
}

function numberIsDivisibleByFiveOrContainsA5(number) {
    return numberIsDivisibleBy5(number) || numberContains5(number)
}

function numberContains5(number) {
    return number.toString().indexOf("5") > -1
}