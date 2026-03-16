const api = "/tasks";

async function loadTasks() {
  const res = await fetch(api);
  const tasks = await res.json();

  const table = document.getElementById("taskTable");
  table.innerHTML = "";

  tasks.forEach((t) => {
    table.innerHTML += `
<tr>
<td>${t.id}</td>
<td>${t.name}</td>
<td>${t.task}</td>
<td>${t.week}</td>

<td>
<button onclick="editTask('${t.id}','${t.name}','${t.task}','${t.week}')">Edit</button>
<button class="delete" onclick="deleteTask('${t.id}')">Delete</button>
</td>

</tr>
`;
  });
}

async function addTask() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const task = document.getElementById("task").value;
  const week = document.getElementById("week").value;

  await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, name, task, week }),
  });

  loadTasks();
}

function editTask(id, name, task, week) {
  document.getElementById("id").value = id;
  document.getElementById("name").value = name;
  document.getElementById("task").value = task;
  document.getElementById("week").value = week;

  document.getElementById("saveBtn").innerText = "Update Task";
  document.getElementById("saveBtn").onclick = function () {
    updateTask(id);
  };
}

async function updateTask(id) {
  const name = document.getElementById("name").value;
  const task = document.getElementById("task").value;
  const week = document.getElementById("week").value;

  await fetch(api + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, name, task, week }),
  });

  document.getElementById("saveBtn").innerText = "Add Task";
  document.getElementById("saveBtn").onclick = addTask;

  loadTasks();
}

async function deleteTask(id) {
  await fetch(api + "/" + id, {
    method: "DELETE",
  });

  loadTasks();
}

loadTasks();
