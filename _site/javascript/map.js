var geocoder; // currently not used

$(document).ready ( function() {
  
  //loop through all the mapping elements
  $(".mapping").each(function() {


    var map;
    var bounds;
  
    // initialize the map canvas
    $(this).find('.map-canvas').each(function() {    
      map = initMap(this);
      bounds = new google.maps.LatLngBounds();
    });

    // loop through map points and put them on the map
    var points = $(this).find(".map-point");
    points.each(function() {

      var latlng = new google.maps.LatLng($(this).attr('lat'), $(this).attr('long'));   
      var marker = new google.maps.Marker({
        map: map,
        icon: $(this).attr('icon'),
        position: latlng,
        title: $(this).find(".description").text(),
        url: $(this).find(".description a").attr('href')
      });
      
      // if the map point has HTML, turn it into an info window
      var infowindow = new google.maps.InfoWindow({
        content: $(this).html() 
      });
      
     

      $(window).resize(function() {

         // if (map.zoom != 17) {
         //     map.setZoom(17);
         //  }
         map.panTo(latlng);
      });
      
      // handle clicks to the marker
      google.maps.event.addListener(marker, 'click', function() {
        if (this.url) {
          window.open(this.url);
        } else {
          infowindow.open(map, marker);
        }
      });

      // if there are multiple markers, fit the map to them; otherwise, center the map on the only marker
      if (points.length == 1) {
        map.setCenter(latlng);
      } else {      
        bounds.extend(latlng);
        map.fitBounds(bounds);
      }

    });

  });
  
});


function initMap(canvas) {

  // set a default zoom unless it's specified
  zoom = parseInt($(canvas).attr('zoom')) || 14;

  // center the map and create options
  var latlng = new google.maps.LatLng(latlng);
  var myOptions = {
      center: new google.maps.LatLng(latlng),
      zoom: 11,
      scrollwheel: false,
      scaleControl: false,
      mapTypeIds: [google.maps.MapTypeId.HYBRID, 'SolidXpress_map']
    };

  // create the map
  map = new google.maps.Map(canvas, myOptions);
  map.setCenter(latlng);
  
  // set some custom styles
  map.set('styles', [
   {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      { color: '#222222' },
      { visibility: 'on' }
    ]
  }, {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        { hue: "#444444"},
        { saturation: -20}
      ]
    },{
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        { color: "#222"},
        { lightness: 44 },
        { saturation: -45 }
      ]
    },{
    featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        { color: "#E30922"}
        
      ]
    },{
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      { hue: '#254785' }
    ]
  }
  ]);
  
  return map;
  
}

