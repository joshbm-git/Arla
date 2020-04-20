export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById("content").innerHTML += /*html*/ `
      <section id="home" class="page">
      <h2>Go'dav Henning!</h2>
      <img src="images/henning.jpg" class="profilePicture" alt="Henning">
      <div class="frontPageWrapper">
      <div class="bedrifter">
      <h2>Seneste bedrifter</h2>
      <article class="frontPageContainer">
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Bedrift-navn</h3>
          <p>Her er der en lille beskrivelse.</p>
        </section>
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Bedrift-navn</h3>
          <p>Her er der en lille beskrivelse.</p>
        </section>
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Bedrift-navn</h3>
          <p>Her er der en lille beskrivelse.</p>
        </section>
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Bedrift-navn</h3>
          <p>Her er der en lille beskrivelse.</p>
        </section>
      </article>
            </div>
              <div class="bedrifter">
                    <h2>Seneste bedrifter</h2>
      <article class="frontPageContainer">
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Bedrift-navn</h3>
          <p>Her er der en lille beskrivelse.</p>
        </section>
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Bedrift-navn</h3>
          <p>Her er der en lille beskrivelse.</p>
        </section>
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Bedrift-navn</h3>
          <p>Her er der en lille beskrivelse.</p>
        </section>
        <section class="achievement">
          <img src="images/award-placeholder.png" alt="ARLA Achievement">
          <h3>Bedrift-navn</h3>
          <p>Her er der en lille beskrivelse.</p>
        </section>
      </article>
      </div>
    </div>
    </section>
    `;
  }
}