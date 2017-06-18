var tasks = [];

var taskCount = 0;
function submitButton(){
  if (event != null) {
    event.preventDefault();
  }
  var checked = document.querySelector('input[type = "radio"]:checked')
  if (checked == null) {
    return -1
  }
  tasks.push(checked.value);
  tasks.push(document.getElementById("description").value);
  tasks.push(document.getElementById("difficulty").value);
  todoList()
  taskCount++;
}

function todoList(){
  var tasksArray = tasks
  var div = document.getElementById("list")
  var list = document.createElement("li");
  var text = tasksArray[taskCount * 3] + " " + tasksArray[taskCount * 3 + 1] + " " + tasksArray[taskCount * 3 + 2];
  list.innerHTML = text
  div.appendChild(list)
}
