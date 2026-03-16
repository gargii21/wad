let tasks=[];

function displayTasks(){

let table=document.getElementById("taskTable");
table.innerHTML="";

tasks.forEach((task,index)=>{

table.innerHTML+=`
<tr>
<td>${task.id}</td>
<td>${task.name}</td>
<td>${task.task}</td>function editTask(index){

let newTask=prompt("Enter new task");

tasks[index].task=newTask;

displayTasks();

}

<td>${task.week}</td>

<td>
<button class="update" onclick="editTask(${index})">Edit</button>
<button class="delete" onclick="deleteTask(${index})">Delete</button>
</td>
</tr>
`;

});

}

function addTask(){

let id=document.getElementById("studentId").value;
let name=document.getElementById("studentName").value;
let task=document.getElementById("task").value;
let week=document.getElementById("week").value;

tasks.push({id,name,task,week});

displayTasks();
clearFields();

}

function editTask(index){

let newTask=prompt("Enter new task");

tasks[index].task=newTask;

displayTasks();

}

function deleteTask(index){

tasks.splice(index,1);

displayTasks();

}

function clearFields(){

document.getElementById("studentId").value="";
document.getElementById("studentName").value="";
document.getElementById("task").value="";
document.getElementById("week").value="";

}