var vg_1 = "top-10-chartered-artists-barchart.vg.json";
var vg_2 = "top-10-chartered-tracks-barchart.vg.json";
var vg_3 = "total-explicit-tracks-choropleth.vg.json";
var vg_4 = "explicit-tracks-by-continent-piechart.vg.json"; 
var vg_5 = "non-explicit-tracks-by-continent-piechart.vg.json";

vegaEmbed("#barchart1", vg_1).then(function(result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#barchart2", vg_2).then(function(result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#choropleth", vg_3).then(function(result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#piechart1", vg_4).then(function(result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#piechart2", vg_5).then(function(result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);