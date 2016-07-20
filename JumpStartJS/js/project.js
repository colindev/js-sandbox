// ch4
var tasks, addTask;
tasks = [];
addTask = function(task) {
  tasks.push({
    text: task,
    complete: false,
    priority: 1
  });
};

// ch5
// Counting Tasks
function countComplete(tasks) {
  var numCompleted = 0;
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].complete) {
      numCompleted++;
    }
  }
  return numCompleted;
}
// Sorting
var sortByLowHigh = function(tasks) {
  return tasks.sort(function(task1, task2) {
    return task2.priority - task1.priority;
  });
};
var sortByHighLow = function(tasks) {
  return tasks.sort(function(task1, task2) {
    return task1.priority - task2.priority;
  });
};
var sortByName = function(tasks) {
  return tasks.sort(function(task1, task2) {
    return task1.text > task2.text;
  });
};

// ch6
var taskListForm, taskListEl;
taskListForm = document.getElementById("tasks");
taskListEl = taskListForm.getElementsByTagName("ul")[0];

function clearList() {
  while (taskListEl.hasChildNodes()) {
    taskListEl.removeChild(taskListEl.lastChild);
  }
}

function newRow(index, task) {
  var template, newRow, textEl;
  template = document.getElementsByClassName("template-item")[0];
  newRow = template.cloneNode(true);
  newRow.setAttribute("data-idx", index.toString());
  // get task text el
  textEl = newRow.getElementsByClassName("task-text")[0];
  // set task priority
  if (task.priority == HIGHPRIORITY) {
    textEl.className += "label-important";
  } else if (task.priority == LOWPRIORITY) {
    textEl.className += " label-success";
  }
  // set task text
  textEl.appendChild(document.createTextNode(task.text));
  // mark complete
  if (task.complete) {
    newRow.getElementsByTagName("input")[0].setAttribute("checked", "checked");
    newRow.getElementsByTagName("span")[0].className+= "complete";
  }
  newRow.className = "task";
  return newRow;
}
var renderTaskList = function () {
  var i, task, taskEl;
  clearList();
  for (i = 0; i < tasks.length; i += 1) {
    task = tasks[i];
    taskEl = newRow(i, task);
    taskListEl.appendChild(taskEl);
  }
};

// Adding Tasks
addForm.onsubmit = function(e) {
  var val;
  preventDefault(e);
  val = newTaskField.value;
  if (val === "") {
    warn("Please enter a task");
  } else {
    newTaskField.value = "";
    clearWarning();
    addTask(val);
  }
};

// Sorting
sortByLowHighAnchor = document.getElementById("sortByLowHigh");
sortByHighLowAnchor = document.getElementById("sortByHighLow");
sortByNameAnchor = document.getElementById("sortByName");
sortByLowHighAnchor.onclick = function(e) {
  preventDefault(e);
  tasks = sortByLowHigh(tasks);
  renderTaskList();
};
sortByHighLowAnchor.onclick = function(e) {
  preventDefault(e);
  tasks = sortByHighLow(tasks);
  renderTaskList();
};
// Sort tasks by name
sortByNameAnchor.onclick = function(e) {
  preventDefault(e);
  tasks = sortByName(tasks);
  renderTaskList();
};

// Task Modification
taskListForm.onclick = function(e) {
  var target, idx, targetClass;
  preventDefault(e);
  target = getTarget(e);
  idx = getIndex(target);
  if (idx) {
    idx = Number(idx);
    targetClass = target.getAttribute('class');
    if (targetClass === 'highpriority' || targetClass === 'lowpriority' || targetClass === 'normalpriority') {
      setPriority(idx, target.getAttribute("value"));
    } else if (target.className.match("delete-task")) {
      removeTask(idx);
    } else if (target.type === "checkbox") {
      toggleComplete(idx);
    }
  }
};
