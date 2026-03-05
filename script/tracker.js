let totalInterviewList = [];
let totalRejectedList = [];


let totalJOb = document.getElementById("totalJobCount");
let totalInterviewCount = document.getElementById("totalInterviewCount");
let totalRejectedCount = document.getElementById("totalRejectedCount");


const allCards = document.getElementById("allCards");


function totalCalculatorCount() {


    totalJOb.innerText = allCards.children.length;
    totalInterviewCount.innerText = totalInterviewList.length;
    totalRejectedCount.innerText = totalRejectedList.length;


}
totalCalculatorCount();


////////////////////////////////////////////////////


let currentStatus = "all";


const filteredSection = document.getElementById("filtered-section");
const filteredRejectSection = document.getElementById("filtered-reject-section");


const allFilterBtn = document.getElementById('all-filter-btn');
const appliedFilterBtn = document.getElementById('applied-filter-btn');
const rejectsFilterBtn = document.getElementById('rejects-filter-btn');


function toggleStyle(id) {


    currentStatus = id;


    allFilterBtn.classList.remove('bg-blue-600', 'text-white');
    appliedFilterBtn.classList.remove('bg-blue-600', 'text-white');
    rejectsFilterBtn.classList.remove('bg-blue-600', 'text-white');


    allFilterBtn.classList.add('bg-slate-200', 'text-black');
    appliedFilterBtn.classList.add('bg-slate-200', 'text-black');
    rejectsFilterBtn.classList.add('bg-slate-200', 'text-black');


    const selected = document.getElementById(id);


    selected.classList.remove('bg-slate-200', 'text-black');
    selected.classList.add('bg-blue-600', 'text-white');


    if (id === "all-filter-btn") {


        allCards.classList.remove("hidden");
        filteredSection.classList.add("hidden");
        filteredRejectSection.classList.add("hidden");


    }


    if (id === "applied-filter-btn") {


        allCards.classList.add("hidden");
        filteredRejectSection.classList.add("hidden");


        filteredSection.classList.remove("hidden");


        renderApplied();


    }


    if (id === "rejects-filter-btn") {


        allCards.classList.add("hidden");
        filteredSection.classList.add("hidden");


        filteredRejectSection.classList.remove("hidden");


        renderRejected();


    }


}


////////////////////////////////////////////////////


const mainContainer = document.querySelector("main");


mainContainer.addEventListener("click", function (event) {


    const card = event.target.closest(".shadow");


    if (!card) return;


    const companyName = card.querySelector('.companyName')?.innerText;
    const jobTittle = card.querySelector('.jobTittle')?.innerText;
    const workSide = card.querySelector('.workSide')?.innerText;
    const dutyHours = card.querySelector('.dutyHours')?.innerText;
    const salary = card.querySelector('.salary')?.innerText;
    const description = card.querySelector('.description')?.innerText;


    if (!companyName) return;


    const cardInfo = {
        companyName,
        jobTittle,
        workSide,
        dutyHours,
        salary,
        description
    };


    // INTERVIEW BUTTON


    if (event.target.classList.contains("InterviewBtn")) {


        const exist = totalInterviewList.find(
            item => item.companyName === companyName
        );


        if (!exist) {


            totalInterviewList.push(cardInfo);


        }


        totalRejectedList = totalRejectedList.filter(
            item => item.companyName !== companyName
        );


        const status = card.querySelector(".statusAbout");


        if (status) {


            status.innerText = "Interview";


        }


    }


    // REJECT BUTTON


    if (event.target.classList.contains("RejectedBtn")) {


        const exist = totalRejectedList.find(
            item => item.companyName === companyName
        );


        if (!exist) {


            totalRejectedList.push(cardInfo);


        }


        totalInterviewList = totalInterviewList.filter(
            item => item.companyName !== companyName
        );


        const status = card.querySelector(".statusAbout");


        if (status) {


            status.innerText = "Rejected";


        }


    }


    renderApplied();
    renderRejected();
    totalCalculatorCount();


});


////////////////////////////////////////////////////


// RENDER INTERVIEW


function renderApplied() {


    filteredSection.innerHTML = "";


    if (totalInterviewList.length === 0) {


        filteredSection.innerHTML = `
        <div class="text-center py-10">
        <img src="../jobs.png" class="mx-auto w-20">
        <h2 class="text-xl font-semibold">No Jobs Available</h2>
        <p class="text-gray-500">Jobs you mark will appear here</p>
        </div>
        `;


        return;
    }


    for (let job of totalInterviewList) {


        const div = document.createElement("div");


        div.className = "border p-5 my-5 bg-green-50 shadow";


        div.innerHTML = `
        <h2 class="companyName font-bold text-xl">${job.companyName}</h2>


        <p class="jobTittle">${job.jobTittle}</p>


        <div class="flex gap-5">


        <p class="workSide">${job.workSide}</p>


        <p class="dutyHours">${job.dutyHours}</p>


        <p>$<span class="salary">${job.salary}</span></p>


        </div>


        <button class="statusAbout bg-green-200 rounded-xl px-2 py-2 mt-4">


        Interview


        </button>


        <p class="description">${job.description}</p>


        <div>


        <button class="InterviewBtn border border-green-500 rounded px-8 py-2 m-2 text-green-500">


        Interview


        </button>


        <button class="RejectedBtn border border-red-600 rounded px-8 py-2 m-2 text-red-600">


        Rejected


        </button>


        </div>
        `;


        filteredSection.appendChild(div);


    }


}


////////////////////////////////////////////////////


// RENDER REJECTED


function renderRejected() {


    filteredRejectSection.innerHTML = "";


    if (totalRejectedList.length === 0) {


        filteredRejectSection.innerHTML = `
        <div class="text-center py-10">
        <img src="../jobs.png" class="mx-auto w-20">
        <h2 class="text-xl font-semibold">No Jobs Available</h2>
        <p class="text-gray-500">Jobs you reject will appear here</p>
        </div>
        `;


        return;
    }


    for (let job of totalRejectedList) {


        const div = document.createElement("div");


        div.className = "border p-5 my-5 bg-red-50 shadow";


        div.innerHTML = `
        <h2 class="companyName font-bold text-xl">${job.companyName}</h2>


        <p class="jobTittle">${job.jobTittle}</p>


        <div class="flex gap-5">


        <p class="workSide">${job.workSide}</p>


        <p class="dutyHours">${job.dutyHours}</p>


        <p>$<span class="salary">${job.salary}</span></p>


        </div>


        <button class="statusAbout bg-red-200 rounded-xl px-2 py-2 mt-4">


        Rejected


        </button>


        <p class="description">${job.description}</p>


        <div>


        <button class="InterviewBtn border border-green-500 rounded px-8 py-2 m-2 text-green-500">


        Interview


        </button>


        <button class="RejectedBtn border border-red-600 rounded px-8 py-2 m-2 text-red-600">


        Rejected


        </button>


        </div>
        `;


        filteredRejectSection.appendChild(div);


    }


}

