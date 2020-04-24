export default class SurveyPage {
  constructor() {
    this.template();
    this.numOfQuestions = 7;
    this.currentQuestion = 1;
    this.width = 100 / this.numOfQuestions;
  }

  template() {
    document.getElementById("content").innerHTML += /*html*/ `
      <section id="survey" class="page">
      <header class="topbar">
        <h2>Spørgeskema</h2>

        <div class="survey-wrapper">
            
        <div class="grid-top">         
        <h3>Spørgsmål til bæredygtigheden af din gård.</h3>
        </div>
        
        <div class="grid-bottom">    
        <button class="nextBtn" onclick="question1();progress();">Videre</button>
        </div>

      </div>
        
      </header>
 
    </section>
    `;
  }
  //MOVE THE BAR
  progress() {
    if (this.currentQuestion < this.numOfQuestions) {
      this.currentQuestion++;
      this.width = this.width + 100 / this.numOfQuestions; //PROGRESS BAR GROWTH
    } else {
      this.currentQuestion = this.numOfQuestions;
    }

    let loadBar = document.getElementById("loadBar");
    loadBar.style.width = this.width + "%";
  }

  question1() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
      <div class="grid-top">   
      <h1>Hvad hedder du?</h1>
      </div>
          
      <div class="grid-bottom">
      <form name="textForm" onsubmit="question2();progress();">
          Fulde navn: <input type="text" name="fname" required>
   
          <input type="submit" value="Næste" id="surveyButton">
          
      </form>
      <div id="progressBar">
        <div id="loadBar">
        </div>
      </div>
      <h3>Spørgsmål ${this.currentQuestion} af ${this.numOfQuestions}</h3>
      
      </div>
                `;
  }

  question2() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
      <div class="grid-top">   
      <h1>Hvor mange køer har du?</h1>
      </div>
          
      <div class="grid-bottom">
      <form name="textForm" onsubmit="question3();progress();">
          Antal køer: <input type="text" name="fname" required>
   
          <input type="submit" value="Næste" id="surveyButton">
          
      </form>
      <div id="progressBar">
        <div id="loadBar">
        </div>
      </div>
      <h3>Spørgsmål ${this.currentQuestion} af ${this.numOfQuestions}</h3>
      
      </div>
                `;
  }

  question3() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
      <div class="grid-top">   
      <h1>Hvor meget spiser dine køer?</h1>
      </div>
          
      <div class="grid-bottom">
      <form name="textForm" onsubmit="question4();progress();">
          Kg foder: <input type="text" name="fname" required>
   
          <input type="submit" value="Næste" id="surveyButton">
          
      </form>
      <div id="progressBar">
        <div id="loadBar">
        </div>
      </div>
      <h3>Spørgsmål ${this.currentQuestion} af ${this.numOfQuestions}</h3>
      </div>
                `;
  }

  question4() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
      <div class="grid-top">   
      <h1>Hvor meget mælk producerer dine køer?</h1>
      </div>
          
      <div class="grid-bottom">
      <form name="textForm" onsubmit="question5();progress();">
          Liter mælk: <input type="text" name="fname" required>
   
          <input type="submit" value="Næste" id="surveyButton">
          
      </form>
      <div id="progressBar">
        <div id="loadBar">
        </div>
      </div>
      <h3>Spørgsmål ${this.currentQuestion} af ${this.numOfQuestions}</h3>
      </div>
                `;
  }

  question5() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
      <div class="grid-top">   
      <h1>Hvor meget benzin bruger du?</h1>
      </div>
          
      <div class="grid-bottom">
      <form name="textForm" onsubmit="question6();progress();">
          Liter benzin: <input type="text" name="fname" required>
   
          <input type="submit" value="Næste" id="surveyButton">
          
      </form>
      <div id="progressBar">
        <div id="loadBar">
        </div>
      </div>
      <h3>Spørgsmål ${this.currentQuestion} af ${this.numOfQuestions}</h3>
      </div>
                `;
  }

  question6() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
      <div class="grid-top">   
      <h1>Hvor meget el bruger du?</h1>
      </div>
          
      <div class="grid-bottom">
      <form name="textForm" onsubmit="question7();progress();">
          KW: <input type="text" name="fname" required>
   
          <input type="submit" value="Afslut" id="surveyButton">
          
      </form>
      <div id="progressBar">
        <div id="loadBar">
        </div>
      </div>
      <h3>Spørgsmål ${this.currentQuestion} af ${this.numOfQuestions}</h3>
      </div>
                `;
  }

  question7() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
      <div class="grid-top">   
      <h1>Tak for din deltagelse!</h1>
      </div>
          
      <div class="grid-bottom"> 
      <div id="progressBar">
        <div id="loadBar">
        </div>
      </div>
      <h3>Spørgsmål ${this.currentQuestion} af ${this.numOfQuestions}</h3>
   
      </div>
                `;
  }
}
