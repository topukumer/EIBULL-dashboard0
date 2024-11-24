// Load Google Charts library
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Data for the 4-column chart
    var data = google.visualization.arrayToDataTable([
        ['Metric', 'Value'],  // Column headers
        ['Metric 1', 10],
        ['Metric 2', 24],
        ['Metric 3', 20],
        ['Metric 4', 32]
    ]);

    // Options for chart appearance
    var options = {
        title: 'Recommended Identifiers - 4 Columns',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Metrics'
        },
        vAxis: {
            title: 'Value',
            minValue: 0
        },
        bars: 'vertical',  // Vertical bars
        colors: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58']  // Colors for each column
    };

    // Draw the vertical bar chart
    var chart = new google.visualization.BarChart(document.getElementById('barchart2'));  // Chart ID
    chart.draw(data, options);
}
