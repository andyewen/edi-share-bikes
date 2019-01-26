let mapImage;
let mapLongRange = [-3.2511, -3.0889];
let mapLatRange = [55.9837, 55.9207];
let journeys;
let journeys_length;
let longRange;
let latRange;

function preload() {
    mapImage = loadImage('assets/map.png');
    journeys = loadJSON('assets/december.json');
}

function setup() {
    noLoop();

    createCanvas(800, 480);

    journeys_length = Object.keys(journeys).length;
}

function draw() {
    image(mapImage, 0, 0, width, height);
    for (let i = 0; i < journeys_length; i++) {
        let j = journeys[i];
        let x1 = map(j.start_station_longitude, mapLongRange[0], mapLongRange[1], 0, width);
        let y1 = map(j.start_station_latitude, mapLatRange[0], mapLatRange[1], 0, height);
        let x2 = map(j.end_station_longitude, mapLongRange[0], mapLongRange[1], 0, width);
        let y2 = map(j.end_station_latitude, mapLatRange[0], mapLatRange[1], 0, height);
        noStroke();
        fill(180, 0, 0);
        ellipse(x1, y1, 3, 3);
        ellipse(x2, y2, 3, 3);
        stroke(220, 0, 0, 20);
        line(x1, y1, x2, y2);
    }
}
