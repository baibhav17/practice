/* Q1. Given an array of forecasted maxium temp, the thermometer displays a string with these temps:
exaample: [17,21,23] will print as"...17 C in 1 days ...21 C in 2 days ...23 C in 3 days 

create a function 'printForecast' to take the following test data.

Test Data1- [17,21,23]
Test Data2- [12,5,-5,0,4]
*/

const printForecast = (arr) => {
arr.map((item,index) => console.log(`... ${item}C in ${index+1} days`)
)
}
printForecast([17,21,23])
printForecast([12,5,-5,0,4])