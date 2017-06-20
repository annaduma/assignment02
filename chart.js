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
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':500,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

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
