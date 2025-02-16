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