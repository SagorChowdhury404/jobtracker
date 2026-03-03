
const totalInterviewList = [{ "name": "sagy" }];
const totalRejectedList = [1, 2, 3,];

let totalJOb = document.getElementById("totalJobCount");
let totalInterviewCount = document.getElementById("totalInterviewCount");
let totalRejectedCount = document.getElementById("totalRejectedCount");


// totalJOb --allCards 
const allCards = document.getElementById("allCards");


function totalCalculatorCount() {
    totalJOb.innerText = allCards.children.length;
    totalInterviewCount.innerText = totalInterviewList.length;
    totalRejectedCount.innerText = totalRejectedList.length;

}
totalCalculatorCount();
// all-filter-btn applied-filter-btn rejects-filter-btn
const allFilterBtn = document.getElementById('all-filter-btn');
const appliedFilterBtn = document.getElementById('applied-filter-btn');
const rejectsFilterBtn = document.getElementById('rejects-filter-btn');

function toggleStyle(id) {

    // Step 1: Make all buttons default
    allFilterBtn.classList.remove('bg-blue-600', 'text-white');
    appliedFilterBtn.classList.remove('bg-blue-600', 'text-white');
    rejectsFilterBtn.classList.remove('bg-blue-600', 'text-white');

    allFilterBtn.classList.add('bg-slate-200', 'text-black');
    appliedFilterBtn.classList.add('bg-slate-200', 'text-black');
    rejectsFilterBtn.classList.add('bg-slate-200', 'text-black');

    // Step 2: Select clicked button
    const selected = document.getElementById(id);

    selected.classList.remove('bg-slate-200', 'text-black');
    selected.classList.add('bg-blue-600', 'text-white');
}





