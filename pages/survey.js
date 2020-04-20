  /*function template() {
    document.querySelector("#app").innerHTML += /*html*/
  `
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
    <h1>Hvad hedder du?</h1>
    </div>

    <div class="grid-bottom">
    <form name="textForm" onsubmit="question2()">
        Fulde navn: <input type="text" name="fname" required>

        <input type="submit" value="Næste" id="surveyButton">

    </form>
    </div>
              `;
  }

  function question2() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
    <div class="grid-top">
    <h1>Hvor mange køer har du?</h1>
    </div>

    <div class="grid-bottom">
    <form name="textForm" onsubmit="question3()">
        Antal køer: <input type="text" name="fname" required>

        <input type="submit" value="Næste" id="surveyButton">

    </form>
    </div>
              `;
  }

  function question3() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
    <div class="grid-top">
    <h1>Hvor meget spiser dine køer?</h1>
    </div>

    <div class="grid-bottom">
    <form name="textForm" onsubmit="question4()">
        Kg foder: <input type="text" name="fname" required>

        <input type="submit" value="Næste" id="surveyButton">

    </form>
    </div>
              `;
  }

  question4() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
    <div class="grid-top">
    <h1>Hvor meget mælk producerer dine køer?</h1>
    </div>

    <div class="grid-bottom">
    <form name="textForm" onsubmit="question5()">
        Liter mælk: <input type="text" name="fname" required>

        <input type="submit" value="Næste" id="surveyButton">

    </form>
    </div>
              `;
  }

  question5() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
    <div class="grid-top">
    <h1>Hvor meget benzin bruger du?</h1>
    </div>

    <div class="grid-bottom">
    <form name="textForm" onsubmit="question6()">
        Liter benzin: <input type="text" name="fname" required>

        <input type="submit" value="Næste" id="surveyButton">

    </form>
    </div>
              `;
  }

  question6() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
    <div class="grid-top">
    <h1>Hvor meget el bruger du?</h1>
    </div>

    <div class="grid-bottom">
    <form name="textForm" onsubmit="question7()">
        KW: <input type="text" name="fname" required>

        <input type="submit" value="Afslut" id="surveyButton">

    </form>
    </div>
              `;
  }

  question7() {
      document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
    <div class="grid-top">
    <h1>Tak for din deltagelse!</h1>
    </div>

    <div class="grid-bottom">

    </div>
              `;
    }
    */