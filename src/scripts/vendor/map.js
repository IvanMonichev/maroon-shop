const map = document.getElementById( "map" );

if ( map ) {
  const mapCenter = map.dataset.center.split( "," );
  const mapZoom = map.dataset.zoom;
  const hintContent = map.dataset.hintContent;
  const balloonContent = map.dataset.balloonContent;

  /* eslint-disable no-undef */
  ymaps.ready( function() {
    const myMap = new ymaps.Map(
      "map", {
        center: mapCenter,
        zoom: mapZoom
      }, {
        searchControlProvider: "yandex#search"
      }
    );

    const myPlacemark = new ymaps.Placemark(
      myMap.getCenter(), {
        hintContent,
        balloonContent
      }, {
        iconLayout: "default#image",
        iconImageHref: require( "Images/sprite/mark.svg" ),
        iconImageSize: [ 16, 22 ],
        iconImageOffset: [ 0, 0 ]
      }
    );

    myMap.geoObjects.add( myPlacemark );
  } );
}
