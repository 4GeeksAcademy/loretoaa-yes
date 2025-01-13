// import the function sum from the app.js file
const {dollarToYen, euroToDollar, yenToPund} = require('./app.js');

//start your first test
test('200$ should be 26Yen',() => {
    //inside the test we call our sum function with 2 numbers
    let Yen = dollarToYen (200);

    //We expect the sum of those 2 numbers to be 23
    expect(Yen).toBe(26000);
})

//import function Euro to Dollar

test('200Euros should be 214 Dollar',() => {
    let Dollar = euroToDollar (200);

    expect(Dollar).toBe(214);
});

// import function Yen to Pound

test('200000 Yen should be 1040', () => {
    let Pound = yenToPund (200000);

    expect(Pound).toBe(1040);
})