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
      <h2>Questionnaire</h2>
      


      <div class="survey-inner-wrapper">
      
      <h3>Please answer these questions for the sustainability of your farm.</h3>
      
      <button class="nextBtn" onclick="question1();progress();">Next</button>
      
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
    <h2>Questionnaire</h2>
      
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
    <p class="question-number">${this.currentQuestion} / ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    What is the food consumption in kg of dry matter for each cow per year?
    <div class="top-form-wrapper">

    <input type="number" placeholder="Kg" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Back</button>
    <button type="button" onclick="question2();progress();" class="btn btn-next">Next</button>
    
    </div>
    </form>

  </div>
                `;
  }

  question2() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    

    
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} / ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    What is the milk production in kg for each year per cow?
    <div class="top-form-wrapper">

    <input type="number" placeholder="Kg" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Back</button>
    <button type="button" onclick="question3();progress();" class="btn btn-next">Next</button>
    
    </div>
    </form>



                `;
  }

  question3() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    

    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} / ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    How many cows do you have? 
    <div class="top-form-wrapper">

    <input type="number" placeholder="No of cows" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Back</button>
    <button type="button" onclick="question4();progress();" class="btn btn-next">Next</button>
    
    </div>
    </form>



                `;
  }

  question4() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    
    
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} / ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    How much diesel in kg does your farm comsume per day? 
    <div class="top-form-wrapper">

    <input type="number" placeholder="Kg" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Back</button>
    <button type="button" onclick="question5();progress();" class="btn btn-next">Next</button>
    
    </div>
    </form>



                `;
  }

  question5() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    
    
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} / ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    How much electricity in kWh does your farm comsume on a daily basis? 
    <div class="top-form-wrapper">

    <input type="number" placeholder="kWh" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Back</button>
    <button type="button" onclick="question6();progress();" class="btn btn-next">Next</button>
    
    </div>
    </form>

  

                `;
  }
  question6() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    
    
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    <p class="question-number">${this.currentQuestion} / ${this.numOfQuestions}</p>
    </div>

    <form name="textForm">
    How self-sufficient are you in feed?
    <div class="top-form-wrapper">

    <input type="number" placeholder="% of dry matter" name="fname" required>
    </div>
    
    <div class="btn-wrapper">
    <button onclick="" class="btn btn-back">Back</button>
    <button type="button" onclick="question7();progress();" class="btn btn-next">Next</button>
    
    </div>
    </form>



                `;
  }

  question7() {
    document.querySelector(".survey-inner-wrapper").innerHTML = /*html*/ `
    
  
    <div class="question-type-wrapper">
    <p class="question-type"></p>
    </div>

    <form name="textForm">
    <h3>Thank you for your parcitipation in making the world sustainable!</h3>
    <div class="top-form-wrapper">

    
    </div>
    
    <div class="btn-wrapper">
    
    
    </div>
    </form>




                `;
  }
}

{
}
