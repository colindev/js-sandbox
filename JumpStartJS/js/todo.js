// ch5
function countComplete(tasks) {
  return tasks.filter(function(task) {
    return task.complete;
  }).length;
}
