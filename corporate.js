// Load Google Charts library
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Data for the 5-column chart
    var data = google.visualization.arrayToDataTable([
        ['Device', 'Infection Count'],  // Column headers
        ['Device A', 30],
        ['Device B', 40],
        ['Device C', 50],
        ['Device D', 60],
        ['Device E', 20]
    ]);

    // Options for chart appearance
    var options = {
        title: 'Recent High Risk Infected Devices',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Devices',
        },
        vAxis: {
            title: 'Infection Count',
            minValue: 0
        },
        bars: 'vertical',  // Vertical bars
        colors: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#AB47BC']  // Colors for each column
    };

    // Draw the vertical bar chart
    var chart = new google.visualization.BarChart(document.getElementById('infectedDeviceChart'));  // Chart ID
    chart.draw(data, options);
}
