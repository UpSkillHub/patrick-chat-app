
const inputBox= document.getElementById("input-box");
const listContainer=document.getElementById("message-container");

function addTask(){
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        const chat = document.createElement("p");
        chat.style.cssText = `
    background-color:hsl(0, 0%, 100%);
    color: hsl(271, 15%, 43%);
    font-size: 12px;
    width: 60%;
    height: 3rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 10px;
    padding: 10px;
    margin-left:90px;

`;
        chat.textContent = inputBox.value;
        listContainer.appendChild(chat);

        listContainer.scrollTop = listContainer.scrollHeight;
    }
    inputBox.value = "";
    saveData();
}

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML );
}



