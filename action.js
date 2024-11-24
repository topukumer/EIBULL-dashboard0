
  // Data for the chart
  var options = {
    chart: {
      type: 'pie'
    },
    series: [1205, 123, 312, 870], // Values for the pie chart
    labels: ['Market Listing', 'Forum Posts', 'Profiles', 'Pastes'], // Labels for the pie chart
    title: {
      text: 'Here is chart of recents actions..'
    }
  };

  // Create the chart
  var chart = new ApexCharts(document.querySelector("#piechart"), options);

  // Render the chart
  chart.render();

