document.addEventListener("DOMContentLoaded", function () {

  function setChartValues(percentages) {

    const charts = document.querySelectorAll(".chart");


    charts.forEach(function (chart, index) {
      const line = chart.querySelector(".line");
      const text = chart.querySelector(".text");
      const percentage = percentages[index];

  
      line.style.width = percentage + "%";
      text.textContent = percentage + "%";
    });
  }


  const percentagesPage1 = [70, 40, 85, 60, 95];
  setChartValues(percentagesPage1);


  const percentagesPage2 = [60, 80, 45, 70, 90];
  setChartValues(percentagesPage2);


  const percentagesPage3 = [60, 70, 50, 100, 80];
  setChartValues(percentagesPage3);


  const percentagesPage4 = [25, 50, 90, 95, 70];
  setChartValues(percentagesPage4);

  const percentagesPage5 = [100, 90, 70, 90, 80];
  setChartValues(percentagesPage5);
});
