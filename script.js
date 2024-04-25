document.addEventListener("DOMContentLoaded", function () {
  // Array of percentages
  const percentages = [70, 40, 85, 60, 95];

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
});
