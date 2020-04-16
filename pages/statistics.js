export default class StatisticsPage {
  constructor() {
    this.template();
    this.appendCows();
    this.appendMilkProduction();
    this.appendCarbonFootprint();
    // ========== GLOBAL VARIABLES ========== //
    this._dataRef = _db.collection("sustainabilityData");
    this._sustainabilityData;
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="persons" class="page">
        <header class="topbar">
          <h2>Persons</h2>
        </header>
        <div id="grid-persons" class="grid-container"></div>
        <canvas id="cows"></canvas>
      </section>
    `;
  }

  // 1: data from firebase
  // listen for changes on _dataRef
  read() {
    _dataRef.orderBy("year").onSnapshot((snapshotData) => {
      _sustainabilityData = []; // reset _sustainabilityData
      snapshotData.forEach((doc) => {
        // loop through snapshotData - like for of loop
        let data = doc.data(); // save the data in a variable
        data.id = doc.id; // add the id to the data variable
        _sustainabilityData.push(data); // push the data object to the global array _sustainabilityData
      });
      console.log(_sustainabilityData);
      // todo: call append chart functions
      appendCows(_sustainabilityData);
      appendCarbonFootprint(_sustainabilityData);
      appendMilkProduction(_sustainabilityData);
    });
  }

  // 2: preparing the data
  prepareCowData(sustainabilityData) {
    let cows = [];
    let years = [];

    sustainabilityData.forEach((data) => {
      if (data.region === "north") {
        cows.push(data.herdYearCows);
        years.push(data.year);
      }
    });

    // todo: prepare data

    return {
      cows,
      years,
    };
  }
  //3: appending the chart
  appendCows(sustainabilityData) {
    let data = prepareCowData(sustainabilityData);
    console.log(data);

    // generate chart
    let chartContainer = document.querySelector("#cows");
    let chart = new Chart(chartContainer, {
      type: "line",
      data: {
        datasets: [
          {
            data: data.cows,
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
                min: Math.min(...data.cows) - 5,
                max: Math.max(...data.cows) + 1,
              },
            },
          ],
        },
      },
    });
  }
}
