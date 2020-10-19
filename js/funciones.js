//capturar elementos del dom
let taskInput = document.querySelector('#addTask');
let selectInput = document.querySelector('#howOften');
let buttonInput = document.querySelector('#buttonSave');
buttonInput.addEventListener('click', receiveEvent); //pendiente comprobar si funciona
let printableSection = document.querySelector('#areaPrintTask');




//función para acceder a los tasks del array FUNCIONA
function getTaskFromArray(pTaskList) {
    console.log(pTaskList)
    for (let i = 0; i < pTaskList.length; i++) {
        console.log(pTaskList[i].title)
    }
}

function receiveEvent(event) {
    let contentSelect = selectInput.textContent;
    if (contentSelect == 'Diaria') {
        //introducir clase color rojo
    } else if (contentSelect == 'Semanal') {
        //introducir clase color azul
    } else {
        //introducir clase color verde
    }
}




