


let totalJOb = document.getElementById("totalJobCount");
let totalInterviewCount = document.getElementById("totalJobCount");
let totalRejectedCount = document.getElementById("totalRejectedCount");


// totalJOb --allCards 
const allCards = document.getElementById("allCards");




function totalCalculatorCount() {
    totalJOb.innerText = allCards.children.length

}
totalCalculatorCount();
