// Load Google Charts library
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Data for the 4-column chart
    var data = google.visualization.arrayToDataTable([
        ['Identifier', 'Metric 1', 'Metric 2', 'Metric 3', 'Metric 4'],  // Column headers
        ['Identifier', 10, 24, 20, 32]  // Single row with 4 data points (columns)
    ]);

    // Options for chart appearance
    var options = {
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Metrics',
            minValue: 0
        },
        vAxis: {
            title: 'Identifiers'
        },
        bars: 'horizontal', // Use horizontal bars for clarity
        colors: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'] // Colors for the 4 columns
    };

    // Draw the bar chart
    var chart = new google.visualization.BarChart(document.getElementById('barchart'));
    chart.draw(data, options);
}
