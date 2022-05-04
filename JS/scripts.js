const form = document.getElementById("form-todo");
const lista = document.getElementById("lista");

form.onsubmit = function (e) {
    e.preventDefault();

    const input = document.getElementById("titulo-tarefa");
    const time = document.getElementById("duracao");

    if(time.value <= 0){
        alert("Digite um valor de tempo maior que 0!")
    }
    else if(isNaN(time.value)){
        alert("Por favor, digite um número!");
    }
    else{
        addTarefa(input.value, time.value);
    }
}

function addTarefa(titulo, tempo){
    const divTarefa = document.createElement("div");
    const divConcluded = document.createElement("div");
    const checkTarefa = document.createElement("input");
    const tituloTarefa = document.createElement("span");
    const tempoTarefa = document.createElement("p");
    const linha = document.createElement("p");
    let concluded = document.createElement("span");

    let check = false;
    concluded.innerText = "não concluída";
    linha.innerText = " ";
    linha.style.border = "1px solid white";
    linha.classList = "line";

    divTarefa.classList = "tasks";
    divConcluded.classList = "tasks-concluded";
    checkTarefa.setAttribute("type", "checkbox");
    checkTarefa.setAttribute("name", titulo);
    checkTarefa.classList = "check";

    tituloTarefa.innerText = "Título: " + titulo;

    if(parseInt(tempo) === 1){
        tempoTarefa.innerText = "Duração: " + tempo + " minuto";
    }
    else{
        tempoTarefa.innerText = "Duração: " + tempo + " minutos";
    }

    divConcluded.appendChild(checkTarefa);
    divConcluded.appendChild(concluded);
    divTarefa.appendChild(tituloTarefa);
    divTarefa.appendChild(tempoTarefa);

    checkTarefa.addEventListener("change", () => {
        check = !check
        if(check){
            concluded.innerText = "concluída";
            concluded.style.color = "yellow";

            concluded.style.transition = "1s";
            tituloTarefa.style.color = "rgb(173, 8, 8)";
            tituloTarefa.style.textDecoration = "line-through";
            tituloTarefa.style.transition = "1s";

            tempoTarefa.style.color = "rgb(173, 8, 8)";
            tempoTarefa.style.textDecoration = "line-through";
            tempoTarefa.style.transition = "1s";
        }
        else{
            concluded.innerText = "não concluída";
            concluded.style.color = "rgb(255, 255, 255)";

            tituloTarefa.style.color = "rgb(255, 255, 255)";
            tituloTarefa.style.textDecoration = "none";
            tituloTarefa.style.transition = "1s";

            tempoTarefa.style.color = "rgb(255, 255, 255)";
            tempoTarefa.style.textDecoration = "none";
            tempoTarefa.style.transition = "1s";
        }
    })

    lista.appendChild(divConcluded);
    lista.appendChild(divTarefa);
    lista.append(linha);
}