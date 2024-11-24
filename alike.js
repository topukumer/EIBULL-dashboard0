// Load Google Charts library
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Data for the 5-column chart (for "Recent High Risk Look Alike Domains")
    var data = google.visualization.arrayToDataTable([
        ['Domain', 'Risk Level'],  // Column headers
        ['example1.com', 10],
        ['example2.net', 25],
        ['example3.org', 20],
        ['example4.biz', 30],
        ['example5.co', 15]
    ]);

    // Options for chart appearance
    var options = {
        title: 'Recent High Risk Look Alike Domains',
        chartArea: {width: '60%'},
        hAxis: {
            title: 'Domains',
            minValue: 0
        },
        vAxis: {
            title: 'Risk Level',
            minValue: 0
        },
        bars: 'vertical',  // Vertical bars
        colors: ['#FF5722', '#03A9F4', '#8BC34A', '#FFC107', '#9C27B0']  // Colors for each column
    };

    // Draw the vertical bar chart
    var chart = new google.visualization.BarChart(document.getElementById('lookAlikeDomainsChart'));  // Updated ID
    chart.draw(data, options);
}
