const printBill = (txt) => {
    console.log("----------");
    console.log("Rs.",txt);
    console.log("-------------");

};
    printBill(1000);


const calculateBillAmountForFood = (price)=>{
    return price*1.05;
};    

const calculateBillAmountForClothes = (price)=>{
    return price*1.20;
};   

const calculateBillAmountForFoodrinks = (price)=>{
    return price*1.12;
};   

const generateBill=(food,clothes,drinks)=>{
    const foodBill = calculateBillAmountForFood(food);
    const clothesBill = calculateBillAmountForClothes(clothes);
    const drinksBill = calculateBillAmountForFoodrinks(drinks);
    const totalBill = foodBill + clothesBill + drinksBill;
    printBill(totalBill);

};

generateBill(1000, 2000, 500);