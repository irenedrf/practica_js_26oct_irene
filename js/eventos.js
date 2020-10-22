//Irene Díaz-Roncero Fraile FULL-STACK 2020

const taskList = [];
let id = 1;

let printableSection = document.querySelector('#areaPrintTask');
let addBtn = document.querySelector('#buttonSave');
let inputTask = document.querySelector('#addTsk');
let inputPriority = document.querySelector('#howOften');
let prioritySearch = document.querySelector('#howOftenSearch');
let resetBtn = document.querySelector('#buttonReset');
let taskToResearch = document.querySelector('#searchTask');


addBtn.addEventListener('click', collectData);
resetBtn.addEventListener('click', resetSearch);
prioritySearch.addEventListener('click', collectPriority);
taskToResearch.addEventListener('keypress', collectWord);


function resetSearch() {
    printTasks(taskList, printableSection)
}


function collectData() {
    let inputTitle = inputTask.value.trim();
    let inputPrior = inputPriority.value.trim();
    if (inputTitle == '' || inputPrior == 'Selecciona una prioridad') {
        alert('Los campos no pueden estar vacíos.');
    } else {
        addTask(inputTitle, inputPrior);
    }
}

function collectPriority(event) {
    console.log(event.target.value)
    filterTasksByUrgency(taskList, event.target.value)
}

function collectWord(event) {
    let wordToSearch = event.target.value;
    filterTasksByWord(taskList, wordToSearch);
}



function eraseData(event) {
    let articleToErase = event.target.parentNode.parentNode;
    articleToErase.parentNode.removeChild(articleToErase);

    let idToErase = event.target.dataset.id;

    let position = taskList.findIndex(task => task.id == idToErase);
    taskList.splice(position, 1);
}

