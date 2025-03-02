//  <(--1): What is Callback Hell?-->

// Callback Hell tab use  hota hai jab hum asynchronous operations ko handle karne
// ke liye nested callbacks use karte hain, jiski wajah se code complex,
// unreadable aur difficult to debug ho jata hai.

// let milk = undefined;
// function getMilk(cb) {
//   milk = "1Ltr-Milk";
//   setTimeout(() => {
//     console.log("===>", milk);
//     cb();
//   }, 3000);
// }
// let kheerPacket = undefined;
// function getKheerPacket(cb) {
//   kheerPacket = "1 Packet Kheer";
//   setTimeout(() => {
//     console.log("===>", kheerPacket);
//     cb();
//   }, 3000);
// }
// let dryFruits = undefined;
// function getDryFruits(cb) {
//   dryFruits = "Mix Dry Friuts ";
//   setTimeout(() => {
//     console.log("===>", dryFruits);
//     cb();
//   }, 3000);
// }
// let kheerReady = undefined;
// function readyKheer(cb) {
//   kheerReady = "Ready Kheer";
//   setTimeout(() => {
//     console.log("===>", kheerReady);
//   }, 3000);
// }
// getMilk(() => {
//   getKheerPacket(() => {
//     getDryFruits(readyKheer);
//   });
// });

// function data1(cb) {
//   let data = "iam first data";
//   setTimeout(() => {
//     console.log("==>", data);
//     cb();
//   }, 3000);
// }
// function data2(cb) {
//   let data2 = "iam second data";
//   setTimeout(() => {
//     console.log("==>", data2);
//     cb();
//   }, 3000);
// }
// function data3(cb) {
//   let data3 = "iam third data";
//   setTimeout(() => {
//     console.log("==>", data3);
//     cb();
//   }, 3000);
// }
// function data4() {
//   let data4 = "iam fourth data";
//   setTimeout(() => {
//     console.log("==>", data4);
//   }, 3000);
// }

// data1(() => {
//   data2(() => {
//     data3(data4);
//   });
// });

// function myData(dataId, nextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (nextData) {
//       nextData();
//     }
//   }, 2000);
// }
// myData(1, () => {
//   console.log("getting data2........");
//   myData(2, () => {
//     console.log("getting data3........");
//     myData(3, () => {
//       console.log("getting data4........");
//       myData(4);
//     });
//   });
// });

//(2) What is promises ?//

// Promise ek JavaScript object hai jo asynchronous operations ko handle karne ke liye
//  use hota hai. Yeh future mein complete hone wale task ko represent karta hai jo
//   resolve (success) ya reject (failure) ho sakta hai.//

// let ourPromises = new Promise((resolve, reject) => {
//   let age = 20;
//   setTimeout(() => {
//     if (age > 18) {
//       resolve("yes you are a eligible!");
//     } else {
//       reject("no you are not eligible!");
//     }
//   }, 3000);
// });
// console.log(ourPromises);
// ourPromises
//   .then((value) => {
//     console.log(value, "Success");
//   })
//   .catch((error) => {
//     console.log(error, "Failed");
//   });

// Yeh setTimeout() ek asynchronous operation hai jo delay ke baad promise resolve ya reject karega.
// Agar koi poochay .then() aur .catch() kya hotay hain, to aap simple jawab de sakte ho:

// ✅ .then() → Jab Promise resolve (success) ho jaye, to .then() use hota hai result ko handle karne ke liye.
// ❌ .catch() → Jab Promise reject (fail) ho jaye, to .catch() use hota hai error handle karne ke liye.

// Agar promise successful ho gaya, to .then() chalega.
// Agar promise fail ho gaya, to .catch() chalega. 🚀

// // console.log("=> A");
// setTimeout(() => {
//   console.log("=> B");
// }, 0);
// console.log("=> C");

// Promises ki 3 states hoti hain:

// Pending → Jab promise create hota hai aur abhi complete nahi hua.
// Resolved (Fulfilled) → Jab promise successfully complete ho jaye.
// Rejected → Jab promise fail ho jaye kisi error ki wajah se?//

// Promises //

// let prom1 = new Promise(() => {
//   setTimeout(() => {
//     let milk = "1 ltr Milk 🥛";
//     console.log("==>", milk);
//   }, 1000);
// });
// let prom2 = new Promise(() => {
//   setTimeout(() => {
//     let custardPacket = "1 Packet Custard 🍮";
//     console.log("==>", custardPacket);
//   }, 3000);
// });
// let prom3 = new Promise(() => {
//   setTimeout(() => {
//     let mixDryFruits = "Half Kg Mix Dry Fruits 🥜";
//     console.log("==>", mixDryFruits);
//   }, 5000);
// });
// let prom4 = new Promise(() => {
//   setTimeout(() => {
//     let precustard = "🍽️ Prepared custard 😊";
//     console.log("==>", precustard);
//   }, 8000);
// });

// Promise.all([prom1, prom2, prom3, prom4])
//   .then(console.log)
//   .catch(console.error);

// let p1 = Promise.resolve("Task 1 done");
// let p2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 done"), 2000));
// let p3 = Promise.resolve("Task 3 done");

// Promise.all([p1, p2, p3])
//     .then(console.log)
//     .catch(console.error);

// iska output hai kay 2s kay bad sare item aik sath laraha hai //

// bhai .all method kiya kr raha hai  kar jho resolve woh sare aik sath return kar waraha hai ?

// Promise.race()

// let myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Fastest");
//   }, 1000);
// });

// let yourPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Slower");
//   },0);
// });

// Promise.race([myPromise, yourPromise]).then(console.log).catch(console.log);

//race kiya kar raha hai jho bhil pehle execute horaha hai woh us ko return kar raha hai

// Promise .allSettled//()

// let p1 = new Promise((resolve, rejected) => {
//   resolve("iam a success");
// });

// let p2 = new Promise((resolve, rejected) => {
//   rejected("iam a failed");
// });
// let p3 = new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     resolve("Iam delay Success");
//   }, 2000);
// });

// Promise.allSettled([p1, p2, p3]).then(console.log).catch(console.log);

// Ye sabhi promises ka result deta hai, chahe wo resolve ho ya reject.
// Ye Promise.all ke opposite hai, kyunki ye fail hone wale promises ko bhi consider karta hai.

// Promise.any()//

// let p1 = Promise.reject("Iam Failed");
// let p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Iam a delay but iam success");
//   }, 3000);
// });

// let p3 = Promise.reject("Iam Again Failed");

// Promise.any([p1, p2, p3]).then(console.log).catch(console.error);

// Jo bhi pehla promise resolve hoga, sirf uska result return hoga.
// Agar sab reject ho jaye, tabhi error aayega.

// Promise.all()	//
// promise.all() kiya karega yai sare resolved yani sare success proimses aik sath chala degha

// Promise.race()//

// Promises.race() kiya karega jho bhi phela promise milega chahe resloved ya rejecte ho woh return kardegha ///

// Promise.allSettled()///
// Promise.allSettled() kiya karta hai chae resolved chahe rejcte ho yai wait	karta hai sare promises ko complete hone ka yai
// promise.all()kay opposite hai kiyo kay yai fail hone  wale promises ko bhi consider karta hai

// Promise.any()
// Promise.any() jho bhi pehle promis resolved hoga srf usk result return karegha
// Agar sab reject ho jaye, tabhi error aayega.

// Promise.resolve()
// agar promise success hova tu chalegha

// Promise.reject()
// agar promise fail hojaye tu chalegha

// function myData(dataId) {
//   return new Promise((resolve, rejcte) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 3000);
//   });
// }

// let promise = myData(123);
// console.log(promise);

// function myProm(dataId) {
//   return new Promise((resolved, rejected) => {
//     setTimeout(() => {
//       console.log("==>", dataId);
//       resolved("Iam Success");
//     }, 3000);
//   });
// }
// console.log("Preparing Custard.....");
// myProm("1 ltr Milk").then(() => {
//   console.log("Preparing Custard.....");
//   return myProm("1 Packet Custard").then(() => {
//     console.log("Preparing Custard.....");
//     return myProm("Half Kg Dry Fruits").then(() => {
//       console.log("Preparing Custard.....");
//       return myProm("Already Preparing Custard");
//     });
//   });
// });

// Callback Hell: Jab hum nested callbacks ka istemal karte hain aur code  bohot complex aur unreadable ho jata hai, ise callback hell kehte hain.

// Promises: Promises asynchronous operations ko handle karne ke liye use hote hain, taki hum callback hell se bach sakein aur code zyada readable ho.
//

// function myFunc(cb) {
//   let milk = "1ltr Milk";
//   setTimeout(() => {
//     console.log("==>", milk);
//     cb();
//   }, 3000);
// }

// function myFunc2(cb) {
//   let custard = "1 Packet Custard";
//   setTimeout(() => {
//     console.log("==>", custard);
//     cb();
//   }, 3000);
// }

// function myFunc3(cb) {
//   let dryFriuts = "half kg dry fruits";
//   setTimeout(() => {
//     console.log("==>", dryFriuts);
//     cb();
//   }, 3000);
// }

// function myFunc4() {
//   let ready = "preparing Custard";
//   setTimeout(() => {
//     console.log("==>", ready);
//   }, 3000);
// }

// myFunc(() => {
//   myFunc2(() => {
//     myFunc3(() => {
//       myFunc4();
//     });
//   });
// });

// function myRecipe(foodStore, creamingStore) {
//   setTimeout(() => {
//     console.log("==>", foodStore);
//     if (creamingStore) {
//       creamingStore();
//     }
//   }, 3000);
// }
// myRecipe("1 ltr Milk", () => {
//   myRecipe("1 Packet Custard", () => {
//     myRecipe("Half Kg Dry Fruits", () => {
//       myRecipe("Preparing Custard");
//     });
//   });
// });

// promises ///

// function myRecipe(foodStoring) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("==>", foodStoring);
//       res("Iam Success");
//     }, 3000);
//   });
// }
// console.log("Preparing Custard....");
// myRecipe("1 Ltr Milk").then(() => {
//   console.log("Preparing Custard....");
//   myRecipe("1 Packet Custard").then(() => {
//     console.log("Preparing Custard....");
//     myRecipe("Half Kg Dry Fruits").then(() => {
//       console.log("Preparing Custard....");
//       myRecipe("The custard is ready");
//     });
//   });
// });

// function myData() {
//   return new Promise((res, rej) => {
//       let age = +prompt("Enter Your Age?");
//     setTimeout(() => {
//       if (age >= 18) {
//         res("yes you are a eligible");
//       } else {
//         rej("no you are not a eligible");
//       }
//     }, 3000);
//   });
// }
// myData()
//   .then((value) => {
//     console.log(value, ":Success");
//   })
//   .catch((error) => {
//     console.log(error, ":Failed");
//   });

// Async Await/////

// function api() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("Wheater Data ");
//       res("Iam suceess");
//     }, 3000);
//   });
// }

// async function async() {
//   await api();
//   await api();
// }

// function myRecipe(foodStoring) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("==>", foodStoring);
//       res("Success");
//     }, 3000);
//   });
// }

// (async function () {
//   console.log("Preparing Custard....");
//   await myRecipe("1ltr Milk");
//   console.log("Preparing Custard....");
//   await myRecipe("1 Packet Custard");
//   console.log("Preparing Custard....");
//   await myRecipe("Half Kg  Dry Fruits");
//   console.log("Preparing Custard....");
//   await myRecipe("This is ready custard");
// })();

// "Async/Await JavaScript ka ek feature hai jo asynchronous code
// ko likhne ko asaan aur readable banata hai. Async function
// likhne se wo hamesha ek Promise return karta hai, aur
// 'await' ka use kisi bhi asynchronous operation ka result lene ke liye hota hai bina .then() use kiye."

// "Async/Await JavaScript me asynchronous code ko synchronous jesa likhne ka tareeqa hai, jo code ko readable aur easy to debug banata hai."

// (async function () {
//   console.log("hello, world");

//   setTimeout(() => {
//     console.log("setTimeout");
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log("Promise");
//   });

//   Promise.resolve().then(() => {
//     console.log("Promise With Await");
//   });

//   console.log("After Await");

//   Promise.resolve().then(() => {
//     console.log("Promise 00000");
//   });
// })();

// (Q)  How the Event Loop Works Here

// (1)Call Stack executes the script first (synchronous code).
//  (2) Microtasks Queue executes all pending microtasks (Promises and await).
//  (3)  Macro-tasks Queue executes (e.g., setTimeout).

// 🔹 Callback Hell → Avoid it
// 🔹 Promises → Better than callbacks, but chaining can be long
// 🔹 Async/Await → Best for most use cases, cleaner and more readable

// Async/Await is widely used today!

// Callback Hell//

// function myRecipe(foodRecipe, stored) {
//   //   console.log("Hello Function");
//   setTimeout(() => {
//     console.log("$", foodRecipe);
//     if (stored) {
//       stored();
//     }
//   }, 2000);
// }
// console.log("Preparing Custard....");
// myRecipe("1 Ltr Milk", () => {
//   console.log("Preparing Custard....");
//   myRecipe("1 Packet Custard", () => {
//     console.log("Preparing Custard....");
//     myRecipe("Half Kg Dry Fruits", () => {
//       console.log("Preparing Custard....");
//       myRecipe("After all the hard work, the custard is finally ready! 🍮✨");
//     });
//   });
// });/////////////////////////////// This is cllback hell

// Promises ///

// function myRecipe(foodStoring) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("$", foodStoring);
//     }, 3000);
//   });
// }
// console.log("Preparing Custard....");
// myRecipe("1 Ltr Milk").then(() => {
//   console.log("Preparing Custard....");
//   myRecipe("1 Packet Custard").then(() => {
//     console.log("Preparing Custard....");
//     myRecipe("Half Kg Dry Fruits").then(() => {
//       console.log("Preparing Custard....");
//       myRecipe("After all the hard work, the custard is finally ready! 🍮✨");
//     });
//   });
// });

// function myRecipe(foodStoring) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("$", foodStoring);
//       res("Success");
//       rej("Failed");
//     }, 3000);
//   });
// }
// (async function () {
//   console.log("Preparing Custard....");
//   await myRecipe("1 Ltr Milk");
//   console.log("Preparing Custard....");
//   await myRecipe("1 Packet Custard");
//   console.log("Preparing Custard....");
//   await myRecipe("Half Kg Dry Fruits");
//   console.log("Preparing Custard....");
//   await myRecipe("After all the hard work, the custard is finally ready! 🍮✨");
// })(); //this is a async await

// ✏️ "Async/Await ek syntactic sugar
//  hai jo promises ko use karte hue a
//  synchronous code ko synchronous jaisa
//  dikhata hai. Har async function promise
//   return karta hai, aur await us promise
//   ke resolve hone ka intezar karta hai.
//   Isliye, promises ka istemal zaroori hai taake async/await sahi se kaam kare."

// let values = ["fareed", "saeed", "umer", "waleed", "ajab"];
// console.log((array[3] = 66));
// console.log(array);

//for loop
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// for of loop///

// for (val of values) {
//   console.log(val);
// }

// let provinces = [
//   "karachi",
//   "lahore",
//   "islamabad",
//   "punjab",
//   "peshawar",
//   "kashmir",
// ];

// for (myPro of provinces) {
//   console.log(myPro.toUpperCase());
// }

// let marks = [66, 88, 99, 65, 54, 67];

// let sum = 0;

// for (val of marks) {
//   sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class: ${avg.toFixed(3)}`);

// let items = [200, 600, 750, 654, 8790];
// console.log(items);
// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// let i = 0;
// for (let val of items) {
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`my offer items : ${items[i]}`);
//   i++;
// }

// let array = ["fareed", "saeed", "umer", "ajab", "waleed"];
// console.log(array);
// array.push("humza", "azaan");

// console.log(array);
// let deletedValue = array.pop();
// console.log(array);
// console.log("delete", deletedValue);

// console.log(array.toString());

// let numArray = [1, 2, 3, 4, 56];
// console.log(numArray);
// console.log(numArray.toString());
// // let str = numArray.toString();
// // console.log(str); isi say humein pata lagta hai kay push() end adkarta hai ek ya multible both chises

// /or pop() array last value ko delete karta lekin ek value delete kara or woh delete value ko return bhi karta hai
// ot tostring()jho hai woh array ki value ko string mai convert kardeta hai

// let pakHeroes = [
//   "ferozkhan",
//   "danishtaimoor",
//   "shahidafridi",
//   "naseemshah",
//   "kushalkhan",
// ];
// console.log(pakHeroes);
// let indianHeroes = [
//   "salmankhan",
//   "shahrukhkhan",
//   "amirkhan",
//   "saifalikhan",
//   "irfankhan",
// ]; // ab mai chraha ho kay dono kay array mai adda hojaye tu yai possible jee possible hai

// let joined = pakHeroes.concat(indianHeroes);
// console.log(pakHeroes);
// console.log(indianHeroes);
// console.log(joined);//yai kiya hova yai dono array aik array mai return hogya

// let deleteFirst = pakHeroes.shift();
// console.log(pakHeroes);
// console.log(deleteFirst);///is mai isnay first item delete kiya or ussey return kardiya yai first element delet karta hai

// console.log(indianHeroes);
// indianHeroes.unshift("sanjayDutt", "sohailkhan", "arbazkhan");
// console.log(indianHeroes); // yai first item say ek ya multipe items add karsakte hai

// let array = [1, 2, 4, 56, 75, 64, 65];

// console.log(array);
// console.log(array.slice(2, 4)); //  yai kiya kar raha mere array mai slice kar kay mujhe array return kar rahabhai

// let splicing = ["fareed", "gul", 19, true, null, undefined];
// console.log(splicing);
// splicing.splice(3, 3, "education", 12, "experience", "frontend-developer");
// console.log(splicing);// ye kiya karta hai original array ko change karta hai or add kaha say or delet kitnay karna hai or mulitle add karsakte ho

// let compinies = [
//   "netflix",
//   "google",
//   "facebook",
//   "hblbank",
//   "alibaba",
//   "shpify",
// ];
// console.log(compinies.shift());
// console.log(compinies); //is mai kiya karna hai facebook ko delte karna hai or instagram ko add karnahai
// compinies.splice(2, 1, "instagram");
// console.log(compinies); // yai hogya abb kiya karna hai kay end mai amazon add karna hai
// compinies.push("amazon");
// console.log(compinies);

// let fruits = ["graphes", "apple", "mango", "lechi", "banana", "orange"];
// console.log(fruits); // ab hum charahe hai kay lexicographically means matlab kay alphabeticly aajye tu hum sort()ka use karsakte hai

// fruits.sort();
// console.log(fruits);
//  yai humara output hai ['apple', 'banana', 'graphes', 'lechi', 'mango', 'orange']
// ek or example yai hum ascending number mai bhi use karsakte hai

// let myNum = [1, 6, 9, 2, 5, 6];

// console.log(myNum); // ab hum charahe hai kay ya number wise aajaye matlab jho phele chota num hai woh pehle ajaye

// myNum.sort();
// console.log(myNum); // is a output yai hai [1, 2, 5, 6, 6, 9]

// value → Jo value array ke elements ko fill karne ke liye istemal hogi.
// start (optional) → Kis index se fill karna shuru karna hai (default: 0)
// end (optional) → Kis index par fill karna band karna hai (default: array.length)

// let myNum = [1, 6, 3, 4, 9, 8, 7];
// console.log(myNum);
// myNum.sort((a, b) => a - b);
// console.log(myNum);/// this is a ascending order

// let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(myNum);
// myNum.sort((a, b) => b - a);
// console.log(myNum);

// let myNum = ["fareed", "zafeer", "naeem", "rafeeq"];
// console.log(myNum);
// myNum.sort()
// console.log(myNum);

// let myArray = ["fareed", "saeed", "naeem", "jawed"];
// console.log(myArray);
// myArray.reverse();
// console.log(myArray);// agar humein array reverse karna ho tu revers method ka use karsakte hai

// let array = [1, 2, 3, 4, 5];
// console.log(array);

// array.fill("fareed");
// console.log(array); // ab is mai kiya hova kay jho mere array mai numbers tay us mai fareed reoplace hogya her ek index pr

// let array = ["fareed", "azan", "waleed", "umer", "saeed"];

// console.log(array);

// array.fill("ajab", 1, 2);

// console.log(array);// is mai kiya hova kay humnay aik value dey  ,or start number bataya or end number
// this is output  (5) ['ajab', 'azan', 'waleed', 'umer', 'saeed']

// let array = [23, 43, 45, 65, 78];

// console.log(array);
// array.fill(100, -2);
// console.log(array);

// let array = ["fareed", "saeed", "waleed", "ajab", "azan"];
// console.log(array);
// array.fill("umer", 4);
// console.log(array);

// Jee haan, Promise ke andar executor function me resolve aur reject dono parameters provide karna zaroori
//  hota hai. Inka istemal asynchronous operation ke outcome ko signal karne ke liye hota hai:

// Resolve: Agar operation successfully complete ho jaye.
// Reject: Agar operation me koi error ho jaye.
// Lekin, har case me aapko dono ko call karna nahi padta. Aap scenario ke hisaab se sirf ek ko call kar sakte hain.

// Garbage Collector Interview question ///

// ➡ Garbage Collector aik automatic system hai jo unused memory ko free karta hai.
// ➡ Yeh "Mark-and-Sweep" technique use karta hai:
// ✔ Mark Phase: Jo objects use ho rahe hain, unko mark kar deta hai.
// ✔ Sweep Phase: Jo objects reachable nahi hain, unko memory se remove kar deta hai.
// ➡ Memory Leak se bachne ke liye: Unused variables ko null karo aur setInterval() ko stop karo jab zaroorat na ho.
// ➡ WeakMap aur WeakSet ka use memory management ko better banata hai.

// ⚡ Short Answer: JavaScript ka Garbage Collector automatically kaam karta hai aur
// unnecessary memory ko clean kar deta hai, taki performance better ho. 🚀

// 💡 Q1: Garbage Collector JavaScript mai kya hai?
// ✔ Garbage Collector (GC) aik automatic system hai jo unused memory ko free karta hai.

// 💡 Q2: Yeh kaise kaam karta hai?
// ✔ "Mark-and-Sweep" algorithm use hota hai:

// Mark: Jo objects use ho rahe hain, unko mark kar deta hai.
// Sweep: Jo objects reachable nahi hain, unko memory se delete kar deta hai.
// 💡 Q3: Kya hum manually Garbage Collection ko trigger kar sakte hain?
// ✔ Nahi, yeh automatically hota hai, hum ise control nahi kar sakte.

// 💡 Q4: Memory leak se kaise bacha jaye?
// ✔ Unused variables ko null karo.
// ✔ setInterval() aur event listeners ko remove karo jab zaroorat na ho.
// ✔ WeakMap aur WeakSet ka use karo memory optimize karne ke liye.

// ✅ Summary: JavaScript ka Garbage Collector automatically memory manage karta hai aur performance improve karta hai. 🚀

// let myFunc = (myData, multipleData) => {
//   setTimeout(() => {
//     console.log("==>", myData);
//     if (multipleData) {
//       multipleData();
//     }
//   }, 2000);
// };
// console.log("Getting Data-1");
// myFunc("Data-1", () => {
//   console.log("Getting Data-2");
//   myFunc("Data-2", () => {
//     console.log("Getting Data-3");
//     myFunc("Data-3", () => {
//       console.log("Getting Data-4");
//       myFunc("Data-4");
//     });
//   });
// });

// // let promise = new Promise((res, rej) => {
// //   setTimeout(() => {
// //     console.log("Iam a Frontend Developer");
// //     res("Successfuly");
// //     rej("Failure");
// //   }, 2000);
// // });
// // promise
// //   .then((value) => {
// //     console.log("==>", value);
// //   })
// //   .catch((error) => {
// //     console.log("==>", error);
// //   });

// // let myData = (dataBhotHai) => {
// //   return new Promise((res, rej) => {
// //     setTimeout(() => {
// //       console.log("==>", dataBhotHai);
// //       res("Successfully ");
// //     }, 3000);
// //   });
// // };
// console.log("Getting Data-1......");
// myData("Data-1").then((value) => {
//   console.log(value, "Getting Data-2....");
//   myData("Data-2").then(() => {
//     console.log(value, "Getting Data-3....");
//     myData("Data-3").then(() => {
//       console.log(value, "Getting Data-4....");
//       myData("Data-4");
//     });
//   });
// });

// let myData = (dataBhotHai) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("==>", dataBhotHai);
//       res("Successfully");
//     }, 3000);
//   });
// };

// (async function () {
//   console.log("Getting-Data-1.....");
//   await myData("Data-1");
//   console.log("Getting-Data-2.....");
//   await myData("Data-2");
//   console.log("Getting-Data-3.....");
//   await myData("Data-3");
//   console.log("Getting-Data-4.....");
//   await myData("Data-4");
// })();

// recursive concept//

// let factorialNum = (f) => {
//   debugger;
//   if (f === 1) return 1; //Base Case//
//   return f * factorialNum(f - 1); // recursive call//
// };

// console.log(factorialNum(4)); //output 24//

// ✅ Summary:
// ➡ Recursion: Jab ek function khud ko call kare (e.g., factorial function).
// ➡ Debugger: Ek tool ya keyword jo code execution ko pause karke bug fix karne mai madad karta

// let myFunc = (num) => {
//   debugger;
//   return num * num;
// };

// console.log(myFunc(6));

// clouser //

// function parent() {
//   let a = 1;
//   function child() {
//     console.log(a);
//   }
//   return child;
// }

// let childFunc = parent();
// childFunc();

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));

// function grandParent() {
//   let gp = "Iam Grand Parent";

//   function parent() {
//     let p = "Iam Parent";

//     function child() {
//       let c = "Iam Child";
//       console.log("=>", gp);
//       console.log("=>", p);
//       console.log("=>", c);
//     }
//     child();
//   }
//   parent();
// }

// grandParent();

// ➡ Lexical Scope ka matlab hai ek function sirf unhi variables ko access kar sakta hai jo uske scope ya uske parent scope mein hain.
// ➡ Yeh function ki definition ke waqt decide hota hai, na ke execution ke waqt.
// ➡ Closures lexical scope ka use karke variables ko "yaad" rakhne dete hain.

// let grandParent = () => {
//   let gp = "Iam Grand Parent";
//   let parent = () => {
//     let pr = "Iam Parent";
//     let child = () => {
//       let cd = "Iam Child";
//       console.log(gp);
//       console.log(pr);
//       console.log(cd);
//     };
//     child()
//   };
//   parent()
// };

// grandParent();

// garbage collector ///

// let obj = () => {
//   let myObj = {
//     name: "fareed",
//     age: 19,
//   };
//   console.log(myObj.age); //jaise he function execute hoga tu garbage collector automatically isse remover kardega
// };
// obj();//hum apnay objects ko closure ya global mai store karna paregha

// recursive ///

// factorial Num//

// let factorialNum = (f) => {
//   debugger;
//   if (f === 1) return 1; // yaha pr hum nay base case bata diya hai //
//   return f * factorialNum(f - 1);
// };
// console.log(factorialNum(5)); //output  kiay aya 120 aya hai abb ider hova kiya yai samjn zarori hai

// function myFunc() {
//   let obj = {
//     name: "fareed",
//     age: 19,
//   };
//   console.log(obj);
// }

// myFunc();

// factorial Num ///

// let factorialNum = (f) => {
//   debugger;
//   if (f === 1) return 1;
//   return f * factorialNum(f - 1);
// };

// console.log(factorialNum(5));

// what is closure ?////

// function grandParent() {
//   let fname = "Fareed";
//   let parent = () => {
//     let lname = "gul";
//     let child = () => {
//       let age = 19;
//       console.log(fname);
//       console.log(lname);
//       console.log(age);
//     };
//     child();
//   };
//   parent();
// }

// grandParent();

// recurcive //

// let factorialNum = (f) => {
//   debugger;
//   if (f === 1) return 1;
//   return f * factorialNum(f - 1);
// };

// let myFactorial = factorialNum(5);
// console.log(myFactorial);

// let obj = {
//   name: "fareed",
// };
// console.log(obj);

// function parent() {
//   let a = 1;

//   let myChild = () => {
//     console.log(a);
//   };
//   myChild();
// }

// let numOfArray = ["fareed", true, null, 19, undefined];
// console.log(numOfArray);
// console.log(numOfArray.copyWithin(2, 3));

// let array = [1, 2, 3, 4, 5];
// console.log(array);
// let mymethod = array.copyWithin(1, 3); //[1,4,5,4,5] output aayegaha
// console.log(mymethod);

// let myAarray = ["fareed", "saeed", "waleed", "ajab", "umer"];
// console.log(myAarray);
// myAarray.copyWithin(2, 0, 2); //output["fareed","saeed","fareed","saeed","umer"]
// console.log(myAarray);

// negative index //

// let numOfArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(numOfArray);

// let changeMyNum = numOfArray.copyWithin(-5, -3); //output[1,2,5,6,7,6,7]

// console.log(changeMyNum);

// let fruits = ["banana", "graphes", "mango", "apple"];
// console.log(fruits);
// console.log(fruits.sort());

// let myNum = [1, 6, 9, 3, 5, 2, 4];
// myNum.sort((a, b) => b - a);
// console.log(myNum);

// abhi tk jho parhe woh  Mutator Methods (Asal array ko tabdeel karte hain)///

// abb parhenge Accessor Methods (Naya array wapas karte hain, asal ko nahi badalte)

// let startArray = [1, 2, 3, 4, 5];
// console.log(startArray);
// let secondArray = [6, 7, 8, 9, 10];
// console.log(secondArray);
// let thirdArray = [11, 12, 13, 14, 15];
// let joinedMyArray = startArray.concat(secondArray, thirdArray);
// console.log(joinedMyArray);

// let array = ["fareed", "saeed", "waleed", "ajab", "umer"];
// console.log(array);
// let slice = array.slice(0, 2);
// console.log(slice);

// let array = ["fareed", "saeed", "waleed", "ajab", "umer"];
// // let slice = array.includes("ajab", "umer");/// true
// let slice = array.includes("noman", "khanbaba");///false
// console.log(slice);

// let myNum = [1, 2, 3, 4, 5,6, 6, 7];
// let checkMyIndex = myNum.indexOf(6);
// console.log(checkMyIndex);// index 5 return deya

// let myNum = [2, 5, 7, 9, 6, 3, 2];
// console.log(myNum.lastIndexOf(2));// index 6 return kardeya

// let myArray = ["fareed", "khan"];
// let joning = myArray.join("|");
// console.log(joning);  array ko string mai convert karta hai

// let myArray = ["fareed", "khan"];
// let joning = myArray.toString();
// console.log(typeof joning);// array ko string mai convert karta hai

//  let myArray = ["fareed", "khan"];
// let joning = myArray.toLocaleString()///Array ke elements ko locale-specific string mein tabdeel karta hai.
// console.log(joning);

// Other Methods//

// let nestedArray = [1, 2, 3, [4, 5, 6, 7], [8, 9, 10]];
// console.log(nestedArray);
// console.log(nestedArray.flat());

// let myValue = Array.from("Hello Iam Fareed");
// console.log(myValue);

// let myValue = Array.from("Hello,world");
// console.log(myValue);/// array like object array mai return kardiya

// let myArray = Array.isArray(["fareed"]);
// let mySecondArray = Array.isArray(1, 2, 3, 4);
// console.log(myArray);// true
// console.log(mySecondArray);// false

// let myNum = [1, 2, 3, 4];
// let check = myNum.flatMap((num) => [num, num * 2]);
// console.log(check); // [1,2,2,4,3,6,4,8]

// let array = [1, 2, 3, 45];
// console.log(array);
// delete array[2];
// console.log(array);

// let comapre = (a, b) => {
//   return a - b;
// };

// let num = [22, 45, 76, 98, 76, 5678];
// num.sort(comapre);
// console.log(num);

// let num = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// num.forEach((element) => {
//  console.log(element*element);
// });
// console.log(num);

// let myArray = ["fareed", 19, true, null, undefined];

// let newAarray = myArray.forEach((value, index, array) => {
//   console.log(value * value, index, );
// });
// console.log(newAarray);

// let mySecondArray = ["fareed", "saeed", 98, 76];
// let clf = mySecondArray.map((val, ind, arr) => {
// //   console.log(val + val);
//   return val + 1;
// });
// console.log(clf);

// let numOfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let a = numOfArray.filter((val) => {
//   return val > 4;
// });
// console.log(a);

// let myArray = [1, 2, 3, 4, 5];

// let myFunc = (acc, val) => {
//   return acc + val;
// };

// let change = myArray.reduce(myFunc);

// console.log(change);

// let myArray = ["fareed", "|", "iam"];

// let myFunc = (acc, val) => {
//   return acc + val;
// };

// let change = myArray.reduceRight(myFunc);

// console.log(change);

// let arr = [10, 20, 30];
// arr.forEach((num, i, arr) => {
//   console.log("Index: ", i, num * num, "Array=>", arr);
// });

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let val = array.map((val) => {
//   return val * val;
// });
// console.log(val);

// let myNum = [65, 86, 23, 67, 98];
// let filter = myNum.filter((val) => {
//   return val > 23;
// });
// console.log(filter);

// let userInterface = [1, 2, 3, 4, 5, 6];
// let myFactorial = userInterface.reduce((acc, currentVal) => {
//   return acc * currentVal;
// });
// console.log(myFactorial);

// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = numbers.reduce((acc, num) => acc + num, 10);
// console.log(sum);

// let array = ["fareed", "saeed", "umer", "ajab", "waleed"];
// console.log(array);
// let rightToLeft = array.reduceRight((acc, words) => {
//   return acc + "|" + words;
// });
// console.log(rightToLeft, typeof rightToLeft);

// let found = [20, 50, 60, 70, 100];

// let findVal = found.find((val) => {
//   return val > 20;
// });
// console.log(findVal);

// let indexCheck = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let findIndex = indexCheck.findIndex((val) => {
//   return val > 77;
// });
// console.log(findIndex);

// let numbers = [3, 7, 3, 9, 11];
// let odd = numbers.every((val) => val % 2 !== 0);
// console.log(odd);

// let even = [2, 5, 7, 9, 1];
// let someNum = even.some((val) => val % 2 === 0);
// console.log(someNum);
//////////////////

// let httpMethods = {
//   get: "GET",
//   post: "POST",
//   patch: "PATCH",
//   put: "PUT",
//   delete: "DELETE",
// };
// let baseUrl = "https://jsonplaceholder.typicode.com/";
// let posts = "posts";

// let fetchPosts = () => {
//   fetch(baseUrl + posts)
//     .then((response) => response.json())
//     .then((result) => console.log(result, "result"))
//     .catch((error) => {
//       console.log("error", error);
//     });
// };

// let fetchPostsById = () => {
//   // parameters
//   let postId = document.getElementsByName("postId")[0]?.value;
//   if (!!postId) {
//     fetch(`${baseUrl}${posts}/${postId}`)
//       .then((response) => response.json())
//       .then((result) => console.log(result, "result of specific user"))
//       .catch((error) => {
//         console.log("error", error);
//       });
//   } else {
//     alert("Post id must be required");
//   }
// };

// const fetchPostsByUserId = () => {
//   // query parameters
//   let userId = document.getElementsByName("userId")[0]?.value;
//   if (!!userId) {
//     fetch(`${baseUrl}${posts}?userId=${userId}`)
//       .then((response) => response.json())
//       .then((result) => console.log(result, "result of specific user"))
//       .catch((error) => {
//         console.log("error", error);
//       });
//   } else {
//     alert("User id must be required");
//   }
// };

// const fetchPostsByUserIdAndPostId = () => {
//   // query parameters
//   let userId = document.getElementsByName("userId")[0]?.value;
//   let postId = document.getElementsByName("postId")[0]?.value;

//   if (!!userId && !!postId) {
//     fetch(`${baseUrl}${posts}?userId=${userId}&id=${postId}`)
//       .then((response) => response.json())
//       .then((result) => console.log(result, "result of specific user"))
//       .catch((error) => {
//         console.log("error", error);
//       });
//   } else {
//     alert("User id and post id must be required");
//   }
// };

// fetch api //
// const baseUrl = "https://jsonplaceholder.typicode.com/todos";

// let fetchingData = async () => {
//   let response = await fetch(baseUrl);
//   // console.log(response.status);
//   let result = await response.json();
//   console.log(result.title);
// };

// fetchingData();

// let fetchData = () => {
//   fetch(baseUrl)
//     .then((res) => {
//      return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// };
// fetchData();

// callbackHell//

// console.log("hello,wold");

// let myFunction = (data, newData) => {
//   setTimeout(() => {
//     console.log("=>", data);
//     if (newData) {
//       newData();
//     }
//   }, 3000);
// };
// console.log("getting data...");
// myFunction("data-1", () => {
//   console.log("getting data...");
//   myFunction("data-2");
// });

// console.log("hello,country");

// promises //

// console.log("hello,world!");

// let myFunc = (data) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("==>", data);
//       res("Iam Success");
//     }, 2000);
//   });
// };
// console.log("getting data ...");
// myFunc("data-1").then((val) => {
//   console.log(val);
//   console.log("getting data ...");
//   myFunc("data-2").then((val) => {
//     console.log(val);
//   });
// });

// console.log("hello,country");

// let myData = (data) => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("=>", data);
//       res(`Success ${data}`);
//     }, 2000);
//   });
// };

// async function myProcess() {
//   console.log("getting data ....");
//   let result1 = await myData("data-1");
//   console.log(result1);
//   console.log("getting data ....");
//   let result2 = await myData("data-2");
//   console.log(result2);
// }

// myProcess();

// ternary operators ///

// basic example say shro karte hai  ///

// let age = 18;
// let result = (age >= 18) ? "yes you are eligible" : "no you are not a eligible";
// console.log(result);

// let num = +prompt("Enter Number!");
// let result =
//   num % 2 === 0 ? "Even"  : "Odd";
// alert(result);

// setTime out //

// console.log("before");
// setTimeout(() => {
//   console.log("Middle");
// }, 3000);
// console.log("after");
//  this is setTime out ek dafa function ko chalyegha or execute kardega apnay delay time par

// let num = 1;
// setInterval(() => {
//   num++;
//   console.log("myNum", num);
// }, 1000); this is a infinte setInterval /

// let count = 1;
// let inter = setInterval(() => {
//   count++;
//   console.log("hello" + count);
//   if (count >= 10) {
//     clearInterval(inter);
//   }
// }, 1000); // yai function infinite chalega jab tk mai clear interval na use karo

// recusrsive setTiemout //

// function setTime() {
//   console.log("Iam 2 sec delay ");
//   setTimeout(setTime, 2000);
// }
// setTimeout(setTime, 2000);
