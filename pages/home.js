export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById("content").innerHTML += /*html*/ `
      <section id="home" class="page">
      <h2>Welcome back, Henning!</h2>
      <div class="welcome">
      <section class="counter-thingy">
      <img src="images/cow-face-front.svg" class="counter-icon" alt="Cow">
      <p>29</p>
      </section>
      <img src="images/henning.jpg" class="profilePicture" alt="Henning">
      <section class="counter-thingy">
      <img src="images/SVG_Trophy_Star.svg" class="counter-icon" alt="Trophy">
      <p>14</p>
      </section>
      </div>
      <div class="frontPageWrapper">
      <div class="bedrifter">
      <h2>Statistics</h2>
      <article class="frontPageContainer">
      <article class="chart-containerFront">
      <h3>Carbon Footprint</h3>
      <canvas id="carbonFootprintHome"></canvas>
      </article>

      <article class="chart-containerFront">
        <h3>Diesel - kg CO2 per kg milk</h3>
        <canvas id="dieselHome"></canvas>
        </article>
      </article>
            </div>
              <div class="bedrifter">
                    <h2>Latest achievements</h2>
                    <article class="frontPageContainer">
                      <section class="achievement">
                        <img src="images/trophy-5years.png" alt="ARLA Achievement">
                        <h3>Here's to five more</h3>
                        <p>Reduce your farms carbon footprint every year for five years.</p>
                      </section>
                      <section class="achievement">
                        <img src="images/trophy-sliceit.png" alt="ARLA Achievement">
                        <h3>Slice it in half</h3>
                        <p>Reduce your overall carbon footprint by half in a single year.</p>
                      </section>
                      <section class="achievement">
                        <img src="images/trophy-methane.png" alt="ARLA Achievement">
                        <h3>Methaniac</h3>
                        <p>Use less than 0.300 kg methane per kg milk in a year.</p>
                      </section>
                      <section class="achievement">
                        <img src="images/trophy-power.png" alt="ARLA Achievement">
                        <h3>Minimized electricity</h3>
                        <p>Use a small amount of power for your farm during a one-year period.</p>
                      </section>
                    </article>
      </div>
    </div>
  <h2>Ready to make a data entry for your farm?</h2>
<a href="#survey"><button class="stor-knap">You bet!</button></a>
    </section>
    `;
  }
}
