let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


//This is my function from Euro to Dollar
const euroToDollar = (euros) => {
    return euros * 1.07
}

euroToDollar()


// This is my function from Dollar to Yen
const dollarToYen = (Dollar) => {
    return Dollar * 130
}

dollarToYen(oneEuroIs.USD)

//This is my function from Yen to Pound
const yenToPund = (Yen) => {
    return Yen * 0.0052
}

yenToPund(oneEuroIs.JPY)


module.exports = {dollarToYen, euroToDollar, yenToPund};