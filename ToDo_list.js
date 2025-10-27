function ToDoList(Name,DueDate,Project){
    document.querySelector(".Name");
    document.querySelector(".Date");
    document.querySelector(".Project");
    let TableBody = document.getElementById("TableTask");
    let newRow = document.createElement("tr");

    let newCell = document.createElement("td");
    newCell.textContent=Name;

    let dateCell = document.createElement("td");
    dateCell.textContent = DueDate;

    let proCell = document.createElement("td");
    proCell.textContent = Project;
    
    let checkCell = document.createElement("td");
    let checkBox = document.createElement("input");

    checkBox.type = "checkbox";
    checkBox.onclick=function(){
        if(checkBox.checked){
            newRow.style.textDecoration = "line-through";
            newRow.style.color = "grey";
        }
        else{
            newRow.style.textDecoration = "none";
            newRow.style.color = "black";
        }
    };

    checkCell.appendChild(checkBox);
    newRow.appendChild(newCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(proCell);
    newRow.appendChild(checkCell);

    TableBody.appendChild(newRow);
}
function addHeading(){
    let heading = document.getElementById("sectionHeading").value;
    if(heading.trim()===""){
        alert("heading is Important!");
        return;
    }
    addSectionHeading(heading);
    document.getElementById("sectionHeading").value="";
};
function addSectionHeading(heading_Text){
    let table = document.getElementById("TableTask");
    let newRowHead = document.createElement("tr");
    let newCellHead = document.createElement("td");

    newCellHead.colSpan = 4; 
    newCellHead.innerHTML = `<strong>${heading_Text}</strong>`; 
    newCellHead.style.textAlign = "center";

    newRowHead.appendChild(newCellHead);
    table.appendChild(newRowHead);
}
function addTask() {
    let name = document.getElementById("taskName").value;
    let dueDate = document.getElementById("dueDate").value;
    let project = document.getElementById("project").value;

    if(name.trim() === "") {
        alert("Task Name is required!");
        return;
    }
    ToDoList(name, dueDate, project);
    
    document.getElementById("taskName").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("project").value = "";
}

let button = document.getElementById("output");
button.addEventListener("click",()=>{
    window.open("https://www.google.com","_blank");
})


button.addEventListener("contextmenu",()=>{
    alert("Don't hack us by right click please!");
})

