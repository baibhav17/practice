// Implement a function that takes in an array of numbers and returns the highest number in the array.

const arr = [-1,-4,7,9,8,8,-2];

const highestNumber = (numberArray) => {
        setTimeout(()=>{
            console.log('highest number',numberArray.reduce((acc,n) => acc > n ? acc : n)); 
        },2000);
        console.log('Wait for 2 seconds');
let secondhigh = numberArray[0];
let firstHigh = numberArray[0];
        numberArray.reduce((acc,n) => {
            console.log('this is N = ', n, 'this is acc = ', acc)
            if (acc > n) {
                firstHigh = acc;
                acc = acc;
            } else {
                acc = n;
            }
            if (n > secondhigh && n !== acc) {
                secondhigh = n;
            }
            console.log('first highest number = ', firstHigh, ' second highest number = ' ,secondhigh)
        })
}

highestNumber(arr);

// Implement a function that takes in an array of numbers and returns the second highest number in the array.

function findSecondHighest(arr) {
    const result = arr.reduce((highest, current) => {
      if (current > highest.highest) {
        highest.secondHighest = highest.highest;
        highest.highest = current;
      } else if (current > highest.secondHighest && current !== highest.highest) {
        highest.secondHighest = current;
      }
      return highest;
    }, { highest: -Infinity, secondHighest: -Infinity });
    return result.secondHighest;
  }

  console.log('second highest',findSecondHighest(arr));
  