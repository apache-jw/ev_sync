var map = L.map('map').setView([37.5, -119.5], 6); // Centers the map over California

// Add a base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to handle adding an ArcGIS REST service layer
function addArcGISLayer(url, name) {
    var layer = L.esri.featureLayer({
        url: url,
        useCors: false // Depending on CORS configuration of the server
    }).addTo(map);

    layer.bindPopup(function (layer) {
        return L.Util.template('<h2>' + name + '</h2><hr><p>{Name}</p>', layer.feature.properties);
    });
}

// Example layers - replace URLs with your actual service URLs
addArcGISLayer("https://gis.carb.arb.ca.gov/hosting/rest/services/Hosted/Priority_Populations_2023_Update/FeatureServer/0", "Priority Populations");
addArcGISLayer("https://gis.data.ca.gov/datasets/0144574f750f4ccc88749004aca6eb0c_0/", "Caltrans Districts");
addArcGISLayer("https://gis.data.ca.gov/datasets/CDEGIS::us-congressional-districts/", "Congressional Districts");

// Additional layers can be added here following the same pattern
