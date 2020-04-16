  function template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="survey" class="page">
          <header class="topbar">
            <h2>Spørgeskema</h2>
          </header>

          <div class="survey-wrapper">

          <div class="grid-top">
          <h3>Spørgsmål til bæredygtigheden af din gård.</h3>
          </div>

          <div class="grid-bottom">
          <button class="nextBtn" onclick="question1();">Videre</button>
          </div>



        </div>
        </section>

      `;
  }

  function question1() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
    <div class="grid-top">
    <h1>Text Validering</h1>
    </div>

    <div class="grid-bottom">
    <form name="textForm" onsubmit="question2()">
        Fulde navn: <input type="text" name="fname" required>

        <input type="submit" value="Næste">

    </form>
    </div>
              `;
  }

  function question2() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
    <div class="grid-top">
    <h1>Select Validering</h1>
    </div>
    <div class="grid-bottom">
    <form name="textForm" onsubmit="question3()">
    <select id="cars" name="cars" required>
    <option value="">---</option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
    <input type="submit" value="Næste">
  </form>
  </div> `;
  }