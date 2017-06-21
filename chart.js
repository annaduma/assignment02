var tasks = [];

var annaEasy = 0
var annaMedium = 0
var annaHard = 0
var alexEasy = 0
var alexMedium = 0
var alexHard = 0
var binksEasy = 0
var binksMedium = 0
var binksHard = 0
// Google Chart //

// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.arrayToDataTable([
          ['Difficulty', 'Easy', 'Medium', 'Hard', { role: 'annotation'}],
          ['Anna', annaEasy, annaMedium, annaHard, ''],
          ['Alex', alexEasy, alexMedium, alexHard, ''],
          ['Mr. Binks', binksEasy, binksMedium, binksHard, '']
        ])
        // Set chart options
        var options = {'title':'Total Number of Tasks per Person',
                       'width':600,
                       'height':400,
                       legend: { position: 'top', maxLines: 3 },
                       bar: { groupWidth: '75%'},
                       isStacked: true
                     };


        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

var taskCount = 0;
function submitButton() {
  if (event != null) {
    event.preventDefault();
  }
  var checked = document.querySelector('input[type = "radio"]:checked')
  if (checked == null) {
    return -1
  }
  var name = checked.value
  var desc = document.getElementById("description").value
  var diff = document.getElementById("difficulty").value
  tasks.push(name);
  tasks.push(desc);
  tasks.push(diff);
  todoList()
  taskCount++;
  document.getElementById("form").reset();

  if (name === "Anna") {
    if (diff === "Easy")
      annaEasy++
    else if (diff === "Medium")
      annaMedium++
    else if (diff === "Hard")
      annaHard++
  }
  else if (name === "Alex") {
    if (diff === "Easy")
      alexEasy++
    else if (diff === "Medium")
      alexMedium++
    else if (diff === "Hard")
      alexHard++
  }
  else if (name === "Mr. Binks") {
    if (diff === "Easy")
      binksEasy++
    else if (diff === "Medium")
      binksMedium++
    else if (diff === "Hard")
      binksHard++
  }
  drawChart()
}


function todoList() {
  var tasksArray = tasks
  var div = document.getElementById("list")
  var list = document.createElement("li");
  var text = tasksArray[taskCount * 3] + " needs to " + tasksArray[taskCount * 3 + 1] + ". " + "Task diffculty is: " + tasksArray[taskCount * 3 + 2] + ".";
  list.innerHTML = text
  div.appendChild(list)
}
