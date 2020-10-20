//práctica 26 oct

let printableSection = document.querySelector('#areaPrintTask');
let addBtn = document.querySelector('#buttonSave');
let inputTask = document.querySelector('#addTsk');
let inputPriority = document.querySelector('#howOften');
let deleteBtn = document.querySelectorAll('.btnErase');


addBtn.addEventListener('click', collectData);
deleteBtn.addEventListener('click', eraseData);

function collectData(event) {
    let inputTitle = inputTask.value.trim();
    let inputPrior = inputPriority.value.trim();
    addTask(inputTitle, inputPrior);
}

function addTask(pInputTitle, pInputPriority) {
    const newTask = {
        priority: pInputPriority,
        title: pInputTitle
    }
    taskList.push(newTask);
}

function eraseData(event) {
    //SEGUIR DESDE AQUÍ: PENDIENTE DE HACER LA FUNCIÓN DE BORRADO+LINKAR PARA QUE SE IMPRIMAN Y DES-IMPRIMAN LAS COSAS
}

