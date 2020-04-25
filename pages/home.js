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
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Achievement</h3>
          <p>A little description.</p>
        </section>
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Achievement</h3>
          <p>A little description.</p>
        </section>
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Achievement</h3>
          <p>A little description.</p>
        </section>
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Achievement</h3>
          <p>A little description.</p>
        </section>
      </article>
            </div>
              <div class="bedrifter">
                    <h2>Latest achievements</h2>
                    <article class="frontPageContainer">
                      <section class="achievement">
                        <img src="images/award-placeholder.png" alt="ARLA Achievement">
                        <h3>Here's to five more.</h3>
                        <p>Reduce your farms carbon footprint every year for five years.</p>
                      </section>
                      <section class="achievement">
                        <img src="images/award-placeholder.png" alt="ARLA Achievement">
                        <h3>Achievement</h3>
                        <p>A little description.</p>
                      </section>
                      <section class="achievement">
                        <img src="images/award-placeholder.png" alt="ARLA Achievement">
                        <h3>Achievement</h3>
                        <p>A little description.</p>
                      </section>
                      <section class="achievement">
                        <img src="images/award-placeholder.png" alt="ARLA Achievement">
                        <h3>Achievement</h3>
                        <p>A little description.</p>
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