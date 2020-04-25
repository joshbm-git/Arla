import sustainabilityDataService from "../services/sustainabilityData.js";
import authService from "../services/auth.js";

export default class ChartPage {
  constructor() {
    this.template();
  }

  async init() {
    // let = authService.authUser.uid;

    let uid = "X13pZeSVIbO2CG0rIDETXjjEB4q1"; // using a fixed uid - want to make sure there's data matching an uid in the database
    let data = await sustainabilityDataService.getPreparedDataByUid(uid); // getting prepared data from the service
    // call append functions with the dataset: data
    this.appendDiesel(data);
    this.appendEl(data);
    this.appendFeed(data);
    this.appendMethane(data);
    this.appendCarbonFootprint(data);
  }

  template() {
    document.getElementById("content").innerHTML += /*html*/ `
      <section id="charts" class="page">
      <header>
      <h2>Charts</h2>
    </header>
        <section id="chartsInner">

      <article class="chart-container">
      <h3>Carbon Footprint</h3>
      <canvas id="carbonFootprint"></canvas>
      </article>

      <article class="chart-container">
        <h3>Diesel - kg CO2 per kg milk</h3>
        <canvas id="diesel"></canvas>
        </article>

        <article class="chart-container">
        <h3>Electricity and heating - kg CO2 per kg milk</h3>
        <canvas id="el"></canvas>
        </article>

        <article class="chart-container">
        <h3>Imported feed - kg CO2 per kg milk</h3>
        <canvas id="feed"></canvas>
        </article>


        <article class="chart-container">
        <h3>Methane - kg CO2 per kg milk</h3>
        <canvas id="methane"></canvas>
        </article>

        </section>
        </section>
    `;
  }

  //appending the chart
  appendCarbonFootprint(data) {
    // generate chart
    let chartContainer = document.getElementById("carbonFootprint");
    let chart = new Chart(chartContainer, {
      type: "bar",
      data: {
        datasets: [{
          data: data.carbonFootprint,
          label: "Carbon Footprint Whole Farm",
          fill: false,
          borderColor: "#006c3a",
          backgroundColor: "#006c3a",
          hoverBorderColor: "#4bb131",
          hoverBackgroundColor: "#4bb131",
        }, ],
        labels: data.years,
      },
    });
  }

  //appending the chart
  appendDiesel(data) {
    // generate chart
    let chartContainer = document.getElementById("diesel");
    let chart = new Chart(chartContainer, {
      type: "bar",
      data: {
        datasets: [{
          data: data.diesel,
          label: "Diesel",
          fill: false,
          borderColor: "#7d5dab",
          backgroundColor: "#7d5dab",
          hoverBorderColor: "#0b43aa",
          hoverBackgroundColor: "#0b43aa",
        }, ],
        labels: data.years,
      },
    });
  }

  //appending the chart
  appendEl(data) {
    // generate chart
    let chartContainer = document.getElementById("el");
    let chart = new Chart(chartContainer, {
      type: "bar",
      data: {
        datasets: [{
          data: data.el,
          label: "Electricity and heating",
          fill: false,
          borderColor: "#Ffcc32",
          backgroundColor: "#Ffcc32",
          hoverBorderColor: "#ffe90a",
          hoverBackgroundColor: "#ffe90a",
        }, ],
        labels: data.years,
      },
    });
  }

  //appending the chart
  appendFeed(data) {
    // generate chart
    let chartContainer = document.getElementById("feed");
    let chart = new Chart(chartContainer, {
      type: "bar",
      data: {
        datasets: [{
          data: data.feed,
          label: "Imported Feed",
          fill: false,
          borderColor: "#4bb131",
          backgroundColor: "#4bb131",
          hoverBorderColor: "#d7e100",
          hoverBackgroundColor: "#d7e100",
        }, ],
        labels: data.years,
      },
    });
  }

  //appending the chart
  appendMethane(data) {
    // generate chart
    let chartContainer = document.getElementById("methane");
    let chart = new Chart(chartContainer, {
      type: "bar",
      data: {
        datasets: [{
          data: data.methane,
          label: "Methane",
          fill: false,
          borderColor: "#0b43aa",
          backgroundColor: "#0b43aa",
          hoverBorderColor: "#3cc4eb",
          hoverBackgroundColor: "#3cc4eb",
        }, ],
        labels: data.years,
      },
    });
  }
}

/*
    this.appendCowsChart(data);
    this.appendMilkProduction(data);
//appending the chart
  appendCowsChart(data) {
    // generate chart
    let chartContainer = document.getElementById("cows");
    let chart = new Chart(chartContainer, {
      type: "line",
      data: {
        datasets: [
          {
            data: data.numberOfCows,
            label: "Number of Cows",
            fill: false,
            borderColor: "#e755ba",
            backgroundColor: "#e755ba",
            pointBackgroundColor: "#55bae7",
            pointBorderColor: "#55bae7",
            pointHoverBackgroundColor: "#55bae7",
            pointHoverBorderColor: "#55bae7",
          },
        ],
        labels: data.years,
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: Math.min(...data.numberOfCows) - 5,
                max: Math.max(...data.numberOfCows) + 1,
              },
            },
          ],
        },
      },
    });
  }
   //appending the chart
   appendMilkProduction(data) {
    // generate chart
    let chartContainer = document.getElementById("milkProduction");
    let chart = new Chart(chartContainer, {
      type: "line",
      data: {
        datasets: [
          {
            data: data.milkProduction,
            label: "Milk Production",
            fill: false,
            borderColor: "#e755ba",
            backgroundColor: "#e755ba",
            pointBackgroundColor: "#55bae7",
            pointBorderColor: "#55bae7",
            pointHoverBackgroundColor: "#55bae7",
            pointHoverBorderColor: "#55bae7",
          },
        ],
        labels: data.years,
      },
    });
  } */