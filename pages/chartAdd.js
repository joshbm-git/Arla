import sustainabilityDataService from "../services/sustainabilityData.js";
import authService from "../services/auth.js";

export default class ChartAddPage {
  constructor() {
    this.template();
    this.chart;
  }

  async init() {
    // user 1 - auth user
    // let = authService.authUser.uid;
    let uid = "qXpkNfin4MXUNoCPWStg"; // using a fixed uid - want to make sure there's data matching an uid in the database
    let data = await sustainabilityDataService.getPreparedDataByUid(uid); // getting prepared data from the service
    let chartContainer = document.getElementById("milkProductionCompare");
    this.chart = new Chart(chartContainer, {
      type: "line",
      data: {
        datasets: [
          // first iniial dataset - auth user
          {
            data: data.milkProduction,
            label: "User: qXpkNfin4MXUNoCPWStg",
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
  }

  template() {
    document.getElementById("content").innerHTML += /*html*/ `
      <section id="chartCompare" class="page">
        <header class="topbar">
          <h2>Charts Add Dataset</h2>
        </header>
        <h3>Milk Production pr cow</h3>
        <canvas id="milkProductionCompare"></canvas>
        <button onClick="addDataset()">Add Dataset</button>
      </section>
    `;
  }

  async addDataset() {
    // user 2 - ssKkADr3APxYyctAppM2
    let uidCompare = "ssKkADr3APxYyctAppM2"; // matching an uid from the database
    let dataCompare = await sustainabilityDataService.getPreparedDataByUid(
      uidCompare
    ); // getting prepared data from the service
    // creating the dataset to add
    let datasetToAdd = {
      label: "User: ssKkADr3APxYyctAppM2",
      data: dataCompare.milkProduction,
      fill: false,
      borderColor: "#55bae7",
      backgroundColor: "#55bae7",
      pointBackgroundColor: "#e755ba",
      pointBorderColor: "#e755ba",
      pointHoverBackgroundColor: "#e755ba",
      pointHoverBorderColor: "#e755ba",
      type: "line",
    };
    this.chart.data.datasets.push(datasetToAdd);
    this.chart.update();
  }
}
