// import your pages
import LoginPage from "./pages/login.js";
import HomePage from "./pages/home.js";
import ChartPage from "./pages/chart.js";
import SurveyPage from "./pages/survey.js";
import TipsPage from "./pages/tips.js";

// import your services
import spaService from "./services/spa.js";
import authService from "./services/auth.js";

// Declare and init pages
let loginPage = new LoginPage();
let homePage = new HomePage();
let tipsPage = new TipsPage();
let surveyPage = new SurveyPage();
let chartPage = new ChartPage();

// init services
spaService.init();
authService.init();

// ready called when user is authenticated
// and the app is ready!
window.ready = () => {
  console.log("READY");
  chartPage.init();
};

// onclick handlers
window.logout = () => profilePage.logout();
window.updateUser = () => profilePage.updateUser();
window.previewImage = (file, previewId) =>
  profilePage.previewImage(file, previewId);
window.addDataset = () => chartAddPage.addDataset();

window.pageChange = () => spaService.pageChange();
window.question1 = () => surveyPage.question1();
window.question2 = () => surveyPage.question2();
window.question3 = () => surveyPage.question3();
window.question4 = () => surveyPage.question4();
window.question5 = () => surveyPage.question5();
window.question6 = () => surveyPage.question6();
window.question7 = () => surveyPage.question7();
window.progress = () => surveyPage.progress();
