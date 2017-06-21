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
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Person');
        data.addColumn('number', 'Number of Tasks');
        data.addColumn({type: 'string', role: 'style'})
        data.addRows([
          ['Anna', 3, '#e56285'],
          ['Alex', 1, '#e5a54d'],
          ['Mr. Binks', 1, '#5898af']
        ]);

        // Set chart options
        var options = {'title':'Total Number of Tasks per Person',
                       'width':500,
                       'height':300,
                       legend: {position: 'bottom'}
                     };


        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

var tasks = [];

var taskCount = 0;
function submitButton() {
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
  document.getElementById("form").reset();
}

function todoList() {
  var tasksArray = tasks
  var div = document.getElementById("list")
  var list = document.createElement("li");
  var text = tasksArray[taskCount * 3] + " needs to " + tasksArray[taskCount * 3 + 1] + ". " + "Task diffculty is: " + tasksArray[taskCount * 3 + 2] + ".";
  list.innerHTML = text
  div.appendChild(list)
}
