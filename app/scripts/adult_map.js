ymaps.ready(init);
var myMap, myPlacemark;

function init() {
    myMap = new ymaps.Map("adult-map-bl", {
        center: [55.80637494, 37.58877380],
        zoom: 15
    });

    myPlacemark = new ymaps.Placemark([55.80642328, 37.59323700], {
        hintContent: 'Секция айкидо',
        balloonContent: 'Московский центр единоборств «Lukomsky Dojo»'
    });

    var myPolyline = new ymaps.Polyline(
        [[55.80809697, 37.58155866],
        [55.80797009, 37.58103295],
        [55.80572236, 37.58255108],
        [55.80622992, 37.58667095],
        [55.80650787, 37.58944972],
        [55.80655621, 37.59200318],
        [55.80624201, 37.59200318],
        [55.80642328, 37.59323700]], {}, {strokeWidth: 4}
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPolyline);
}
