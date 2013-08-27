var map, layer;

function initialize() {
  var detroit = new google.maps.LatLng(42.34,-83.05);
  var tableId = '1DQ08Y3JlPvDHtsE5nkkS4mp_AFG1HimWpaBTEEU';
  var locationColumn = '\'Geocodable address\'';

  map = new google.maps.Map(document.getElementById('map'), {
    center: detroit,
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  layer = new google.maps.FusionTablesLayer({
   map: map,
    query: {
      select: locationColumn,
      from: tableId
    },
    options: {
        styleId: 2,
        templateId: 2
      }
  });
  
        
google.maps.event.addDomListener(document.getElementById('submit'), 'change', function() {
              updateMap(layer, tableId, locationColumn);
        });
        
  } 
  
    function updateMap(layer, tableId, locationColumn) {
        var submit = document.getElementById('submit').value;
        var Days = document.getElementById('Days').value;
		var SNAPBridgeCards = document.getElementById('SNAPBridgeCards').value;
		var DoubleUpFoodBucks = document.getElementById('DoubleUpFoodBucks').value;
		var WICProjectFresh = document.getElementById('WICProjectFresh').value;
		var MarketFresh = document.getElementById('MarketFresh').value;
		var selectQuery;
		if (Days) {
			selectQuery = "Days = '" + Days + "'";
		}
		if (SNAPBridgeCards) {
			selectQuery = selectQuery + "AND SNAPBridgeCards = '" + SNAPBridgeCards + "'";
		} 
		if (DoubleUpFoodBucks) {
			selectQuery = selectQuery + "AND DoubleUpFoodBucks = '" + DoubleUpFoodBucks + "'";
		} 
		if (WICProjectFresh) {
			selectQuery = selectQuery + "AND WICProjectFresh = '" + WICProjectFresh + "'";
		} 
		if (MarketFresh) {
			selectQuery = selectQuery + "AND MarketFresh = '" + MarketFresh + "'";
		} 
        if (submit) {
          layer.setOptions({
            query: {
              select: locationColumn,
              from: tableId,
              where: selectQuery
            }
          });
        } else {
          layer.setOptions({
            query: {
              select: locationColumn,
              from: tableId
            }
          });
        }
        }
        


google.maps.event.addDomListener(window, 'load', initialize);



