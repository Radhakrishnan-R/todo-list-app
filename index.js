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

        listContainer.addEventListener("click", (e) => {
            deleteItem(e)
        })

        inputBox.value = "";
    }


}

function deleteItem(e){
    if(e.target.tagName == "LI"){
        document.querySelector("LI").classList.toggle("checked");

    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
}


document.querySelector(".input-box button").addEventListener("click", () => {
    addItem();
});
