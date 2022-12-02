//chart starts

var xArray = [70, 120, 130, 185, 200, 250, 290, 350, 500, 700];
var yArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define Data
var data = [
  {
    x: xArray,
    y: yArray,
    mode: "lines",
    type: "scatter",
  },
];

// Define Layout
var layout = {
  xaxis: { range: [1, 800], title: "Subscriber" },
  yaxis: { range: [1, 12], title: "Years" },
  title: "People who subscribe in our GYM are increase.",
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);

//end chart
