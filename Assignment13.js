function addTask(){
    let currentList = document.querySelector("ul")
    let listItem = formItem();
    if(listItem !== null){
        currentList.appendChild(listItem)
    }
}

function formItem(){

    let input = document.getElementById("todoItem").value
    if(input !== ""){
        let divElement = document.createElement("div")
        let item = document.createElement("li")
        item.innerText = input

        let completeBtn = document.createElement("button")
        completeBtn.innerText = "Complete Task"
        completeBtn.setAttribute("onclick", `completeTask(${input})`)       

        let deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Delete Task"
        deleteBtn.setAttribute("onclick", `deleteTask(${input})`)

        divElement.appendChild(item)
        divElement.appendChild(completeBtn)
        divElement.appendChild(deleteBtn)

        return divElement
    } else{
        return null;
    }
}

function addPriorityTask(){

        let currentList = document.querySelector("ul")
        let listItem = formItem();
        if(listItem !== null){
        currentList.insertBefore(listItem, currentList.children[1])

}

function deleteAllTask(){
    
        let currentList = document.querySelector("ul")
        if (currentList.children.length ==0){
            alert("No task is created")
        } else{
            currentList.innerHTML = ''
        }
        
}
}
function completeTask(taskName){
    let currentList = document.querySelector("ul")
    let itemToComplete;
    for(let each of currentList){
        let eachItem = document.querySelector("li")
        itemToComplete = eachItem;
        break;
    }

    eachItem.classList.add("complete-task")
}

