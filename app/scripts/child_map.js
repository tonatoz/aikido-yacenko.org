ymaps.ready(init);
var myMap, myPlacemark;

function init() {
    myMap = new ymaps.Map("child-map-bl", {
        center: [55.60983089, 37.53996731],
        zoom: 15
    });

    myPlacemark = new ymaps.Placemark([55.61349878, 37.54189850], {
        hintContent: 'Секция айкидо',
        balloonContent: 'СК Атлант'
    });

    var myPolyline = new ymaps.Polyline(
        [[55.60602034, 37.53515311],
        [55.61198085, 37.53940518],
        [55.61223283, 37.53940717],
        [55.61360472, 37.53967724],
        [55.61349878, 37.54189850]], {}, {strokeWidth: 4}
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPolyline);
}
