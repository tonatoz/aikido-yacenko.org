ymaps.ready(init);

function adultMap() {
  var adultMap = new ymaps.Map("adult-map-bl", {
    center: [55.80637494, 37.58877380],
    zoom: 15
  });

  var adultPlacemark = new ymaps.Placemark([55.80642328, 37.59323700], {
    hintContent: 'Секция айкидо',
    balloonContent: 'Московский центр единоборств «Lukomsky Dojo»'
  });

  var adultPolyline = new ymaps.Polyline(
    [[55.80809697, 37.58155866],
      [55.80797009, 37.58103295],
      [55.80572236, 37.58255108],
      [55.80622992, 37.58667095],
      [55.80650787, 37.58944972],
      [55.80655621, 37.59200318],
      [55.80624201, 37.59200318],
      [55.80642328, 37.59323700]], {}, {strokeWidth: 4}
  );

  adultMap.geoObjects.add(adultPlacemark);
  adultMap.geoObjects.add(adultPolyline);
}

function childMap() {
  var childMap = new ymaps.Map("child-map-bl", {
    center: [55.60983089, 37.53996731],
    zoom: 15
  });

  var childPlacemark = new ymaps.Placemark([55.61349878, 37.54189850], {
    hintContent: 'Секция айкидо',
    balloonContent: 'СК Атлант'
  });

  var childPolyline = new ymaps.Polyline(
    [[55.60602034, 37.53515311],
      [55.61198085, 37.53940518],
      [55.61223283, 37.53940717],
      [55.61360472, 37.53967724],
      [55.61349878, 37.54189850]], {}, {strokeWidth: 4}
  );

  childMap.geoObjects.add(childPlacemark);
  childMap.geoObjects.add(childPolyline);
}

function init() {
  "use strict";

  if ($("#adult-map-bl").length > 0) {
    adultMap();
  }

  if ($("#child-map-bl").length > 0) {
    childMap();
  }
}
