document.addEventListener("DOMContentLoaded", function () {
  // Function to set chart values
  function setChartValues(percentages) {
    // Select all chart elements
    const charts = document.querySelectorAll(".chart");

    // Loop through each chart and set the width of the line
    charts.forEach(function (chart, index) {
      const line = chart.querySelector(".line");
      const text = chart.querySelector(".text");
      const percentage = percentages[index];

      // Set the width of the line and text content
      line.style.width = percentage + "%";
      text.textContent = percentage + "%";
    });
  }

  // Usage example:
  // Set chart values for Page 1
  const percentagesPage1 = [70, 40, 85, 60, 95];
  setChartValues(percentagesPage1);

  // Set chart values for Page 2
  const percentagesPage2 = [60, 80, 45, 70, 90];
  setChartValues(percentagesPage2);

  // Set chart values for Page 3
  const percentagesPage3 = [60, 70, 50, 100, 80];
  setChartValues(percentagesPage3);

  // Set chart values for Page 4
  const percentagesPage4 = [25, 50, 90, 95, 70];
  setChartValues(percentagesPage4);

  // Set chart values for Page 5
  const percentagesPage5 = [100, 90, 70, 90, 80];
  setChartValues(percentagesPage5);
});
