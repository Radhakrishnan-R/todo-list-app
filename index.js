const inputBox = document.querySelector(".input-box input");
const listContainer = document.querySelector(".list-container");

function addItem(){
    if(inputBox.value == ""){
        alert("You need to type something!")
    }else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        

        
    }

    inputBox.value = "";

        saveTask();

}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveTask();

    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
});

function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function getTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}


document.querySelector(".input-box button").addEventListener("click", () => {
    addItem();
});

getTask();
