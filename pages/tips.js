export default class TipsPage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById("content").innerHTML += /*html*/ `
          <section id="tips" class="page">
            <h2>Here's how you can decrease CO2 emission!</h2>
            <div id="tipsInfo">
            
            <div class="tipsWrapper">
            
<img src="images/cowsfeed.png" alt="">
            <p><strong>Cow's feed</strong><br><br>When the cow digests the feed, the natural gas methane is produced and is released through burps. Changing the feed composition can make the cow less gassy.</p>
            </div>
            </div>
            <div id="tipsInfo">
            
            <div class="tipsWrapper">
            <img class="imgleft" src="images/feedsproduction.png" alt="">
            <p><strong>Feed production</strong><br><br>Efficient feed production ensures that there is just the right amount of nutrients to grow the crops and it minimises the nutrients lost during storage, handling and usage in the fields. This not only reduces the climate impact but also improves profitability on the farm.</p>
            <img class="imgright" src="images/feedsproduction.png" alt="">
            </div>
            </div>
            <div id="tipsInfo">
            
            <div class="tipsWrapper">
            
<img src="images/farmer1.png" alt="">
            <p><strong>Manure handling</strong><br><br>Manure used for biogas production reduces emissions and produces renewable energy. When manure is used in the fields, it should be incorporated into the soil as fast as possible to reduce the loss of nitrogen.</p>
            </div>
            </div>
            <div id="tipsInfo">
            
            <div class="tipsWrapper">
            <img class="imgleft" src="images/energy.png" alt="">
            <p><strong>Renewable energy</strong><br><br>The farm can produce renewable energy through solar panels, biogas or wind turbines. Currently the electricity produced on Arla farms equals 61% of their total electricity usage.</p>
            <img class="imgright" src="images/energy.png" alt="">
            </div>
            </div>
            <div id="tipsInfo">
            
            <div class="tipsWrapper">
            
<img src="images/animalwelfare.png" alt="">
            <p><strong>Animal welfare</strong><br><br>As the cow doesn’t produce milk the first two years of its life, the total emissions per kilo of milk during its lifetime are reduced the longer it lives and the more milk it produces. It is a proven fact that better animal welfare improves a cow's milk yield and life-span.</p>
            </div>
            </div>
            <div id="tipsInfo">
            
            <div class="tipsWrapper">
            <img class="imgleft" src="images/fuel.png" alt="">
            <p><strong>Fuel</strong><br><br>The machinery, tractors etc. on farm can be changed to models using less fuel and more non-fossil fuels. Farmers can practice eco-driving to reduce mileage and fuel usage per kilometer.</p>
            <img class="imgright" src="images/fuel.png" alt="">
            </div>
            </div>
            <div id="tipsInfo">
            
            <div class="tipsWrapper">
            
<img src="images/carbon.png" alt="">
            <p><strong>Carbon sequestration</strong><br><br>Carbon sequestration (capturing and storing carbon in the soil) can increase, particularly when growing grass and using manure.</p>
            </div>
            </div>
            <div id="tipsInfo">
            
            <div class="tipsWrapper">
            <img class="imgleft" src="images/plants.png" alt="">
            <p><strong>Trees and plants</strong><br><br>The farmer can plant more trees, bushes, hedges and flowers on his land, which will not only help absorb CO2 but also improve biodiversity.</p>
            <img class="imgright" src="images/plants.png" alt="">
            </div>
            </div>
          </section>
        `;
  }
}
