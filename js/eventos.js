
const taskList = [];
let id = 1;

let printableSection = document.querySelector('#areaPrintTask');
let addBtn = document.querySelector('#buttonSave');
let inputTask = document.querySelector('#addTsk');
let inputPriority = document.querySelector('#howOften');
let prioritySearch = document.querySelector('#howOftenSearch');
let resetBtn = document.querySelector('#buttonReset');


addBtn.addEventListener('click', collectData);
resetBtn.addEventListener('click', resetSearch);
prioritySearch.addEventListener('click', collectPriority);


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




function eraseData(event) {
    //SEGUIR DESDE AQUÍ: PENDIENTE DE HACER LA FUNCIÓN DE BORRADO+LINKAR PARA QUE SE IMPRIMAN Y DES-IMPRIMAN LAS COSAS
}

