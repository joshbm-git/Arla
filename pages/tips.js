export default class TipsPage {

    constructor() {
        this.template();
    }

    template() {
        document.getElementById("content").innerHTML += /*html*/ `
          <section id="home" class="page">
            <h3>SPA Template Modules Pages</h3>
            <p>My Single Page Web App Template</p>
          </section>
        `;
    }

}