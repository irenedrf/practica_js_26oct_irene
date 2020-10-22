
function addTask(pInputTitle, pInputPriority) {
    const newTask = {
        id: id,
        priority: pInputPriority,
        title: pInputTitle
    }
    let exists = agenda.findIndex(task => {
        return task.title == pInputTitle && task.priority == pInputPriority;
    })

    if (exists == -1) {
        taskList.push(newTask);
        printTasks(taskList, printableSection);
        id++;

    } else {
        alert('Tarea duplicada');
    }

}






function printTasks(pTaskList, pSection) {
    if (pTaskList.length != 0) {
        pSection.innerHTML = "";
        pTaskList.forEach(task => {
            printOneTask(task, pSection);
        });
    } else {
        pSection.innerHTML = '<h1>NO HAY RESULTADOS QUE COINCIDAN CON LOS CRITERIOS DE BÚSQUEDA</h1>';
    }
}


function printOneTask(pTask, pSection) {
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

    if (pTask.priority == "urgente") {
        taskArticle.classList = "red";
    } else if (pTask.priority == "diaria") {
        taskArticle.classList = "green";
    } else {
        taskArticle.classList = "blue";
    }

    divButton.appendChild(buttonErase);
    divTitle.appendChild(name);
    taskArticle.appendChild(divTitle);
    taskArticle.appendChild(divButton);
    pSection.appendChild(taskArticle);
}




function filterTasksByUrgency(pTaskList, pPriorityType) {
    const result = pTaskList.filter(task => task.priority == pPriorityType);
    return result;
}

function filterTasksByWord(pTaskList, pWord) {
    const result = pTaskList.filter(task =>
        task.title.toLowerCase().includes(pWord.toLowerCase()
        ));
    return result;
}




//llamamos para que imprima lista
printTasks(taskList, printableSection);

