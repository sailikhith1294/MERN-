// let juice =50;
// let fries = 80;
// let gstOnJuice = 0.1;
// let gstOnFood = 0.05;

// let juiceBillAmount = juice + juice* gstOnJuice;
// let friesBillAmount = fries + fries * gstOnFood;

// const finalBillAmount = juiceBillAmount + friesBillAmount;
// console.log(`The final bill amount is ${finalBillAmount}`);

// console.log("start");

// function calculateJuiceBillAmount() {
//     let juice = 50;    
//     let gstOnJuice = 0.1; 
//     let juiceBillAmount = juice + juice * gstOnJuice;
//     console.log(juiceBillAmount);

// }
// console.log("end");
// calculateJuiceBillAmount();
// console.log("end");


// const res1=calculateJuiceBillAmount(50,0.1);
// printBill("mango juice", res1);
// const res2=calculateJuiceBillAmount(80,0.05);
// printBill("orange juice", res2);

// function printBill(name, amount) {
//     console.log(`The bill for ${name} is ${amount}`);
// }

// function calculateJuiceBillAmount(price, gst) {
//     console.log("..calculating..");
//     let BillAmount = price + price * gst;
//     return BillAmount;

// }


// const res3=calculateJuiceBillAmount(100,0.15);
// printBill("apple juice", res3);

// // function printBill(name, amount) {
// //     console.log(`The bill for$ ${name} is ${amount}`);
// // }



const res1=calculateJuiceBillAmount(50,0.1);
printBill("mango juice", res1);
const res2=calculateJuiceBillAmount(80,0.05);
printBill("orange juice", res2);

function printBill(name, amount) {
    console.log(`The bill for ${name} is ${amount}`);
}

function calculateJuiceBillAmount(price, gst) {
    console.log("..calculating..");
    let BillAmount = price + price * gst;
    return BillAmount;

}


const res3=calculateJuiceBillAmount(100,0.15);
printBill("apple juice", res3);