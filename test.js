// function close() {
//     for(var i=0;i<5;i++) {
// function inner(i) {
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000);
// }
// inner(i);
// }
// }

// close();

// var a= 'hello world';

// function demo() {
//     this.console.log(a);
// }
// demo()



// // const submit = () => {
// //     let text = document.getElementById('listText').value;
// //     let node = document.createElement("li");
// //     let textNode = document.createTextNode(text);
// //     let deleteButton = document.createElement("button");
// //     deleteButton.innerHTML = "delete"
// //    node.appendChild(textNode);
// //    node.appendChild(deleteButton);
// //    document.getElementById('orderedList').appendChild(node);
// //    deleteButton.addEventListener('click', (e) => {
// //     alert(e)
// // })
    
// // }

// // unique array---- old school method
// // var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// // let count = 0; let newArr=[];
// // for (var i=0;i< array.length;i++) {
// //     count = 0;
// //     for(var j=i+1;j<array.length;j++) {
// //         if(array[i]==array[j]) {count ++;}
// //     }
// //     if(count == 0){ newArr.push(array[i]);}
// // }
// // console.log(newArr)


// // unique array---> TRICK-1
// // let array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// // let uniqueArr = [];
// // array.map((item) => {
// //     if(uniqueArr.indexOf(item) === -1){
// //         uniqueArr.push(item);
// //     }
// //     return uniqueArr;
// // } )

// // console.log(uniqueArr)






// //1. Closure
// // function x() {
// //     let a = 10;
// //     function y() {
// //         console.log(a);
// //     }
// //     y();
// // }

// // x();

// // let a=10;
// // const b=20;

// // 2. Shadowing
// let a=10
// {
//     let a=20;
//     {
//         let a=30;
//         console.log('3rd A part-2',a)
//     }
//     console.log('2nd A--',a)
// }
// console.log('1st A--',a)


// // const user = {
// //     name: 'Baibhav',
// //     gender: 'Male'
// // },
// // userData = 
// // localStorage.setItem('user', JSON.stringify(user));

// // console.log(JSON.parse(localStorage.getItem('user')));

// // setTimeout(function (){
// // console.log('timeout');
// // },0);
// // setTimeout(function (){
// //     console.log('timeout1');
// //     },10);
// //     setTimeout(function (){
// //         console.log('timeout2');
// //         },0);
// // console.log('Hello World')



// // function x() {
// //     setTimeout(function(){
// //         console.log('value of i='+i);
// //     },1000)
// //     var i =1;
// // }
// // x();


// const handleChild = (event) => {
//     console.log('child is clicked');
//     event.stopPropagation();
// }

// const handleParent = (event) => {
//     console.log('Parent is clicked');
// }



// //Find the max number in the array
// // let arr = [1,2,3,4,5];

// // const output = arr.reduce((acc,curr) => {
// // return acc < curr ? curr : acc;
// // },0)
// // console.log('output', output)

// let people = [
//     {firstName: 'baibhav', lastName: 'Saxena', age:25},
//     {firstName: 'John', lastName:'Doe', age:48},
//     {firstName:'Shreya', lastName:'JSON', age: 35}
// ]

// const output = people.filter((item) => item.age < 26).map(x=> x.firstName);
// console.log('output', output)


// //private variable using clousre

// function privateVariable() {
//     var pv = 'secert text';
//     return function() {
//         return pv;
//     }
// }

// console.log(privateVariable()())


// // proto and bind

// var person = {
//     name: 'baibhav',
//     age: 25,
//     getDetails: function(){
//         return `${this.name} is ${this.age} years old`;
//     },
// }

// var copyPerson = person.getDetails.bind(person);
// console.log(copyPerson());
// console.log(person.getDetails());


// // Check if two strings are ANAGRAM?

// // let str1= 'listen';
// // let str2= 'silent';



const anagramCheck = (str1, str2) => {
    let newStr1 = str1.toLowerCase().split('').sort().join();
    let newStr2 = str2.toLowerCase().split('').sort().join();
    str1.length === str2.length && newStr1 === newStr2
     ? console.log('Yes they are Anagram',newStr1,newStr2) : console.log('No they are not anagram');
}

anagramCheck('silent des', 'listen sed');
let strArr1 =[],strArr2=[];
const anagramNew = (str1, str2) => {
    let temp = 0
    if(str1.length === str2.length) {
        for (let i = 0; i < str1.length; i++) {
            if(str1.charCodeAt(i) != 32) {
                strArr1.push(str1.charCodeAt(i))
            }
            if(str2.charCodeAt(i) != 32) {
                strArr2.push(str2.charCodeAt(i))
            }
            console.log('---New anagram---',String.fromCharCode(str1.charCodeAt(i)),' ', str2.charCodeAt(i))
        }
    } else {
        console.log('The strings are not anagram');
    }
    
    for(let j=0;j < str1.length; j++) {
        for(let k=j+1;k < str1.length; k++) {
            if(strArr1[j] > strArr1[k]) {
                temp = strArr1[j];
                strArr1[j] = strArr1[k]
                strArr1[k] = temp;
            }
            if(strArr2[j] > strArr2[k]) {
                temp = strArr2[j];
                strArr2[j] = strArr2[k]
                strArr2[k] = temp;
            }
        }
    }
    console.log('str array', strArr1, strArr2)
}

anagramNew('silent sed'.toLowerCase(), 'esd listen'.toLowerCase());

let arrToSort = [3,5,1,3,2,4,9]

let arrToSortLength = arrToSort.length;
let temp = 0
for(let i=0; i<arrToSortLength; i++){
    for(let j=i+1;j<arrToSortLength; j++)
    if(arrToSort[i] > arrToSort[j]) {
        temp = arrToSort[i];
        arrToSort[i] = arrToSort[j];
        arrToSort[j] = temp;
    }
}
console.log('sorted array ---->', arrToSort)

// let checkString1 = 'Hello world';
// checkString1 = checkString1.toLocaleLowerCase();
// let checkString2 = 'world hello';
// let strlen1 = checkString1.length;
// let strlen2 = checkString2.length;
// let targetStr = [];
// let newChar;
// for(var i = 0; i < strlen1; i++) {
//     if ( checkString1.charAt(i) !== ' ') {
//         newChar =checkString1.charCodeAt(checkString1.charAt(i));
//     for(var j=i+1; j<strlen1;j++){
//         if(checkString1.charCodeAt(checkString1.charAt(j)) < newChar && checkString1.charAt(checkString1.charAt(j)) !== ' ') {
//             newChar = checkString1.charCodeAt(checkString1.charAt(j))
//         }
//     }
//     targetStr.push(String.fromCharCode(newChar));
    // }
    
// // }
// for(var w = 0; w < strlen1; w++) {
//     if(checkString1.charAt(w) !== ' '){
//     console.log(checkString1.charCodeAt(w), checkString1.charAt(w));
//     targetStr.push(checkString1.charCodeAt(w))
// }
// }
// console.log(targetStr);

// // if(checkString1.charAt(i) !== ' '){
// //     console.log(checkString1.charCodeAt(i), checkString1.charAt(i));
// // }


let loginStatus = {
    name:'Baibhav',
    status:'valid',
}

// USING ASYNC AND AWAIT

function validity(val) {
    return new Promise((resolve, reject) => {
        if (val === 'valid') {
            resolve('Valid user')
        } else {
            reject('Invalid user')
        }
    });
}

const checkValidity = async () => {
    try {
        const response = await validity(loginStatus.status);
        console.log(loginStatus.name+' is a '+response)
    } catch (err) {
        console.log('warning!!! '+loginStatus.name+' is a '+err);
    }
    
}
checkValidity()


// USING .THEN AND .CATCH

const validStatus = () => {
    return new Promise((resolve, reject) => { 
        if (loginStatus.status === 'valid') {
            resolve(loginStatus.name+' is a Valid user')
        } else {
            reject('Invalid user')
        }
    });
}

validStatus().then((message) => {
    console.log('yayyy we have a valid user!!! '+message)
}).catch((err) => {
    console.log(err)
})




// call, Apply and Bind

let ob1 = {
    name: 'Bob',
    city: 'Delhi',
    printName: function (age, country) {
        console.log(this.name +' is '+ age+' years old and from '+country);
    }
}
function printCity() {
    console.log(this.city);
}

printCity.call(ob1);

let ob2 = {
    name: 'Jake',
    city: 'Noida',
}
printCity.call(ob2);
ob1.printName.call(ob2, 25, 'India');

ob1.printName.apply(ob2, [37, 'Portugal']);

let printDetails = ob1.printName.bind(ob2, 35, 'Argentina');
printDetails();



// BUILDER DESIGN PATTERN


class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}


// 1. GENERAL CASE

class Users {
    constructor(name, age, phone, address) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let users = new Users('Baibhav', undefined,'1111', new Address('1','main'));
console.log(users);

// 2. BUILDER CASE

class UsersDetails {
    constructor(name, {age, phone, address} = {} ) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let userDetails = new Users('Baibhav',{age:25,address: new Address('123','main street')})
console.log(userDetails)


let freqArr = [1,2,3,1,2,4,5];
let counter =0
freqArr.forEach((item)=> {
    if(item === 2) counter++;
})

console.log('2 occurs in total '+counter+' times.')

let freqArr3 = [1,2,3,1,2,4,5];
let arrLen = freqArr3.length;
let counting =0;
for(var i=0; i<arrLen; i++) {
    counting = 0;
    for(var j=0; j< arrLen; j++) {
        if(freqArr3[i] === freqArr3[j]) counting++;
    }
    console.log('frequency of '+ freqArr3[i]+' is '+ counting)
}

//hash map---> O(n)
let countMap = {}
let freqArr2 = [1,2,3,1,2,4,5];
for(var i=0; i<arrLen; i++) {
    let count = countMap[freqArr2[i]] || 0;
    count++;
    countMap[freqArr2[i]] = count;
}
console.log('countMap',countMap)


let objc = {
    name:'abhineet',
    address: {
        city:'noida',
        country:'india',
    }
}

// objc.firstName = objc.name;
// delete objc.name;
console.log('1',objc);
// shallow copy
let newObjc ={ ...objc }
newObjc.address.city ='Jaipur';
console.log('shallow',newObjc);
// Deep Copy
let deepCopy = JSON.parse(JSON.stringify(objc));
deepCopy.address.city ='delhi';

let deepCloneNew = structuredClone(objc);
deepCloneNew.address.city = 'Lucknow';

console.log('deep',deepCopy);
console.log('deepCloneNew',deepCloneNew);

console.log('good night')
// setInterval(function () {
//     console.log("Good morning");
// }, 2000);
setTimeout(function () {
    console.log("Good afternoon");
  }, 1000);


//   let checkObj = {
//       name: 'baibhav',
//       age: 25
//   }
// console.log('before freeze', checkObj);
// Object.seal(checkObj);
// checkObj.gender = 'Male';
// checkObj.age =24;
// console.log('after freeze', checkObj);

let str = 'How are you today?' + ' ';
let strArr= [...str];
let strLen = strArr.length;
let updatedStr="";
let wordStart = 0;
for(let i= 0; i < strLen; i++) {
    if(strArr[i] == " ") {
        for(let j=i-1;j>= wordStart;j--) {
            updatedStr = updatedStr+strArr[j];
        }
        wordStart = i+1;
        updatedStr = updatedStr + " "
    }
}
console.log('reversed string--->',updatedStr.trim())


// console.log('index of space', strArr.indexOf(' '));
// let newStr="";
// function reverString(indexOfSpace, endStr) {
//     for(var p= indexOfSpace-1; p>= endStr; p--) {
//         newStr= newStr + strArr[p];
//     }
// }



// highest number in the array
// var arr = [-1,-4,7,9,8,-2];

// console.log(arr.reduce((acc,n) => acc > n ? acc : n));

// var str= 'hello world';
// // output= 'helo wrd'
// var countMap = {}
// let strArr =[...str];
// // for( var i=0; i<strArr.length; i++) {
// //     let count = countMap[strArr[i]] || 0;
// //     count++;
// //     countMap[strArr[i]] = count;
// // }

// let uniqStr ='';
// for(var i=0; i<strArr.length; i++){
//     if(uniqStr.includes(str[i]))
// }

// Array.prototype.ReduceFunc = function(callback,currentVal) {
//     let acc =currentVal;
//     for(var i=0; i<this.length;i++) {
//         if(acc !== undefined) {
//             acc = callback
//         } else {
//             acc = this[i];
//         }
//     }
//     return acc;
// }

//given two numbers N and X such that N is the number of terms and X is the just number.
// print Sum = 1 + x + x*x + x*x*x + x*x*x*x +...N

let N = window.prompt('please enter number of terms');
let X = window.prompt('please enter number');
alert(`number of terms are ${N} and number is ${X}`);
let sumOfSeries = 1;
for(var i=1; i<=N; i++) {
    var numMul = 1;
    for(var j=1;j<=i; j++) {
        numMul = numMul * X
    }
    sumOfSeries = sumOfSeries + numMul;
}

alert(`sum of series = ${sumOfSeries}`);