// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import StatisticsPage from "./pages/statistics.js";
import spaService from "./services/spa.js";

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();

let statisticsPage = new StatisticsPage();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();
window.statisticsPage = () => statisticsPage.appendCows();
window.statisticsPage = () => statisticsPage.prepareCowData();
