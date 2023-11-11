
  //access token required to use mapbox api
  //use your token generated from mapbox.com 
  
  mapboxgl.accessToken = '';

   //create the map
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.104081, 42.365554],
      zoom: 14
  });
 //add a marker to the map
var marker = new mapboxgl.Marker()
    .setLngLat([-71.092761, 42.357575])
    .addTo(map);

    //add a number of longtitude and latitude coordinates
    //whic correspond to the bus stops along the way
const busStops = [
    [-71.093729, 42.359244], 
    [-71.094915, 42.360175],
    [-71.095800, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863]
];

let counter = 0;
//the move function
function move(){
  //set a timer
  setTimeout(()=>{
    //if the counter is greater than or equal to the array conaining the 
    //bus stop coordinates
    //this means we went through all the bus stops, return 
    if (counter >= busStops.length) return;
    //otherwise move the marker to the new logtitude and latitude coordinate
    marker.setLngLat(busStops[counter]);
    counter++;//increment the counter so the next time the counter is called we advance to the next  position
    move(); // call the move function again to repeat executing
  },1000); //repeat every 1 second
}

 
