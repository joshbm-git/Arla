// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import SurveyPage from "./pages/survey.js";
import PersonsPage from "./pages/persons.js";
import spaService from "./services/spa.js";

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let surveyPage = new SurveyPage();
let personsPage = new PersonsPage();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();

window.question1 = () => surveyPage.question1();

window.question2 = () => surveyPage.question2();
