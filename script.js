
const inputBox= document.getElementById("input-box");
const listContainer=document.getElementById("message-container");

function addTask(){
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        const chat = document.createElement("p");
        chat.style.cssText = `
    background-color: hsl(294, 28%, 87%);
    color: hsl(276, 55%, 52%);
    font-size: 12px;
    width: 70%;
    height: 3rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 5px;
    padding: 8px;
`;
        chat.textContent = inputBox.value;
        listContainer.appendChild(chat);
    }
    inputBox.value = "";
    saveData();
}

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML );
}



