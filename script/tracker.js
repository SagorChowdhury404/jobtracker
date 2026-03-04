
let totalInterviewList = [];

let totalRejectedList = [];

let totalJOb = document.getElementById("totalJobCount");
let totalInterviewCount = document.getElementById("totalInterviewCount");
let totalRejectedCount = document.getElementById("totalRejectedCount");


// totalJOb --allCards 
const allCards = document.getElementById("allCards");
const filteredSection = document.getElementById("filtered-section");

const mainContainer = document.querySelector('main')




function totalCalculatorCount() {
    totalJOb.innerText = allCards.children.length;
    totalInterviewCount.innerText = totalInterviewList.length;
    totalRejectedCount.innerText = totalRejectedList.length;

}

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

    if (id === 'applied-filter-btn') {
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
    }
    else if (id === 'all-filter-btn') {
        allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }





}

mainContainer.addEventListener('click', function (event) {
    // companyName jobTittle workside dutyhours salary description InterviewBtn RejectedBtn
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector('.companyName').innerText;
    const jobTittle = parentNode.querySelector('.jobTittle').innerText;
    const workSide = parentNode.querySelector('.workSide').innerText;
    const dutyHours = parentNode.querySelector('.dutyHours').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const description = parentNode.querySelector('.description').innerText;
    const statusAbout = parentNode.querySelector('.statusAbout').innerText;


    const cardInfo = { companyName, jobTittle, workSide, dutyHours, salary, description, statusAbout:'Applied' };

    const cardExist = totalInterviewList.find(item => item.companyName == cardInfo.companyName);

    parentNode.querySelector('.statusAbout').innerText = 'Applied'


    if (!cardExist) {
        totalInterviewList.push(cardInfo);
    }

    renderInterviewList();
    totalCalculatorCount();
})


const filterApplied = document.getElementById('filtered-section');


function renderInterviewList() {

    // clear old content first
    filterApplied.innerHTML = ' ';

    // loop through interview list (NOT DOM element)
    for (let applied of totalInterviewList) {
        console.log(applied)
        const {
            companyName,
            jobTittle,
            workSide,
            dutyHours,
            salary,
            description,
            statusAbout
        } = applied;

        let div = document.createElement('div');
        div.className = 'flex  justify-between border p-5 my-5  bg-slate-50 shadow';

        div.innerHTML = `
            
                <div class="my-5 ">
                    <h1 class=" companyName font-bold text-xl"> ${companyName}</h1>
                    <p class="jobTittle text-sm">${jobTittle}</p>
                    <div class="flex gap-5 my-2">
                        <p class="workSide"> ${workSide}</p>
                        <p class="dutyHours">${dutyHours}</p>
                        <p>$<span class="salary">${salary}</span></p>
                    </div>
                    <button id="all-filter-btn" class="statusAbout bg-slate-200 rounded-xl px-2 py-2 mt-4 "
                        type="submit">
                       ${statusAbout}
                    </button>
                    <p class="description">${description}</p>
                    <div>
                        <button id="Interview-btn"
                            class="InterviewBtn  border border-green-500 rounded px-8 py-2 m-2 text-green-500"
                            type="submit">
                            Interview
                        </button>
                        <button id="Rejected-btn"
                            class=" RejectedBtn border border-red-600 rounded px-8 py-2 m-2 text-red-600" type="submit">
                            Rejected
                        </button>
                    </div>
                </div>

                <div>
                    <button id="all-filter-btn" class="bg-slate-200 hover:bg-red-600 rounded px-8 py-2 m-2"
                        type="submit">
                        Delete
                    </button>
                </div>
          
        `;

        filterApplied.appendChild(div);
    }
};

