export default class SurveyPage {
  constructor() {
    this.template();
    this.numOfQuestions = 6;
    this.currentQuestion = 1;
    this.width = 0;
    this.grow = 100 / this.numOfQuestions;
  }

  template() {
    document.getElementById("content").innerHTML += /*html*/ `
      <section id="survey" class="page">
       <div class="survey-wrapper">
      <h2>Spørgeskema</h2>
      


      <div class="survey-inner-wrapper">
      
      <h3>Spørgsmål til bæredygtigheden af din gård.</h3>
      
      <button class="nextBtn" onclick="question1();progress();">Videre</button>
      
      </div>
      
      </div> 

    </section>
    `;
  }

  progress() {
    if (this.currentQuestion <= this.numOfQuestions) {
      this.currentQuestion++;
      this.width += this.grow;
    } else {
      this.currentQuestion = this.numOfQuestions;
    }
    console.log(this.width);

    let bar = document.querySelector(".progressBar");

    bar.style.background = `
      linear-gradient(to right, var(--green) ${this.width}%, var(--light-green) 0% 100%)
      `;
  }

  question1() {
    document.querySelector(".survey-wrapper").innerHTML = /*html*/ `
    <h2>Svar på spørgsmål</h2>
      
    <div class="progressBar">
    <figure>
    <img src="../images/cow.png">
    </figure>

    <figure>
    <img src="../images/tractor.png">
    </figure>

    <figure>
    <img src="../images/farm.png">
    </figure>

    <figure>
    <img src="../images/rain.png">
    </figure>

    <figure>
    <img src="../images/energy.png">
    </figure>

    <figure>
    <img src="../images/plants.png">
    </figure>
    </div> 


    <div class="survey-inner-wrapper">
    
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} af ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    Spørgsmål?
    <div class="top-form-wrapper">

    <input type="text" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Gå tilbage</button>
    <button type="button" onclick="question2();progress();" class="btn btn-next">Næste</button>
    
    </div>
    </form>

  </div>
                `;
  }

  question2() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    <h2>Svar på spørgsmål 2</h2>

    <div class="survey-inner-wrapper">
    
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} af ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    Fulde navn: 
    <div class="top-form-wrapper">

    <input type="text" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Gå tilbage</button>
    <button type="button" onclick="question3();progress();" class="btn btn-next">Næste</button>
    
    </div>
    </form>

  </div>


                `;
  }

  question3() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    <h2>Svar på spørgsmål 2</h2>


    <div class="survey-inner-wrapper">
    
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} af ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    Fulde navn: 
    <div class="top-form-wrapper">

    <input type="text" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Gå tilbage</button>
    <button type="button" onclick="question4();progress();" class="btn btn-next">Næste</button>
    
    </div>
    </form>

  </div>


                `;
  }

  question4() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    <h2>Svar på spørgsmål 2</h2>


    <div class="survey-inner-wrapper">
    
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} af ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    Fulde navn: 
    <div class="top-form-wrapper">

    <input type="text" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Gå tilbage</button>
    <button type="button" onclick="question5();progress();" class="btn btn-next">Næste</button>
    
    </div>
    </form>

  </div>


                `;
  }

  question5() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    <h2>Svar på spørgsmål 2</h2>


    <div class="survey-inner-wrapper">
    
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} af ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    Fulde navn: 
    <div class="top-form-wrapper">

    <input type="text" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Gå tilbage</button>
    <button type="button" onclick="question6();progress();" class="btn btn-next">Næste</button>
    
    </div>
    </form>

  </div>


                `;
  }
  question6() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    <h2>Svar på spørgsmål 2</h2>



    <div class="survey-inner-wrapper">
    
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} af ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    Fulde navn: 
    <div class="top-form-wrapper">

    <input type="text" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Gå tilbage</button>
    <button type="button" onclick="question7();progress();" class="btn btn-next">Næste</button>
    
    </div>
    </form>

  </div>


                `;
  }

  question7() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    <h2>Svar på spørgsmål 2</h2>

  
    <div class="survey-inner-wrapper">
    
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} af ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    Fulde navn: 
    <div class="top-form-wrapper">

    <input type="text" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Gå tilbage</button>
    <button type="button" onclick="question7();progress();" class="btn btn-next">Næste</button>
    
    </div>
    </form>

  </div>


                `;
  }
}

{
}
