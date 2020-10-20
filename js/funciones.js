//práctica 26 oct
//capturar elementos del dom

function printTasks(pTaskList, pSection) { //NO COMPROBADA DEL TODO PERO PARECE FUNCIONAR BIEN
    if (pTaskList.length != 0) {
        pSection.innerHTML = "";
        pTaskList.forEach(task => {
            printOneTask(task, pSection);
        });
    } else {
        pSection.innerHTML = '<h1>NO HAY RESULTADOS QUE COINCIDAN CON LOS CRITERIOS DE BÚSQUEDA</h1>';
    }
}


function printOneTask(pTask, pSection) { //FUNCIONA BIEN NO TOCAR
    let taskArticle = document.createElement('article');
    let divTitle = document.createElement('div');
    let divButton = document.createElement('div');
    let name = document.createElement('h2');
    let buttonErase = document.createElement('input');

    divTitle.classList = "divTit";
    divButton.classList = "btnErase";
    name.innerText = pTask.title;
    buttonErase.value = 'ELIMINAR';
    buttonErase.type = "submit";

    divButton.appendChild(buttonErase);
    divTitle.appendChild(name);
    taskArticle.appendChild(divTitle);
    taskArticle.appendChild(divButton);
    pSection.appendChild(taskArticle);
}




function filterTasksByUrgency(pTaskList, pPriorityType) { //FUNCIONA BIEN NO TOCAR. TENEMOS QUE ASIGNAR ESTA FUNCIÓN AL DESPLEGABLE
    const result = pTaskList.filter(task => task.priority == pPriorityType);
    return result;
}

function filterTasksByWord(pTaskList, pWord) {
    const result = pTaskList.filter(task =>
        task.title.toLowerCase().includes(pWord.toLowerCase()
        ));
    return result;
}

