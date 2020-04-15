export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="home" class="page">
        <header class="topbar">
        <figure>
        <img src="../images/ARLA_LOGO_DIGITAL/ARLA_LOGO_DIGITAL_PNG_LARGE/Arla_Logo_White_Large.png" alt="">
      
        </figure>
          <h2>Home</h2>
        </header>
        <h3>SPA Template Modules Pages</h3>
        <p>My Single Page Web App Template</p>
      </section>
    `;
  }
}
