//////////////////////////////////
/* Map Aufgabe Level 1.4 */
//////////////////////////////////
var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var Celcius = fahrenheit.map(element=>(element- 32)/1.8000

)
console.log(Celcius);

tempNow=Celcius.splice(3,1)
console.log(tempNow);

//////////////////////////////////
/* Map Aufgabe Level 1.3 */
//////////////////////////////////
var array1 = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];
  
let edc = array1.map(element=>
    element * 2 +(Math.floor(Math.random()*10))
)
console.log(edc);

//////////////////////////////////
/* Map Aufgabe Level 1.2 */
//////////////////////////////////

var brands=[
"Coca-Cola",
"Apfelsaft",
"Pepsi",
"Traubensaft",
"Sprite",
"Orangensaft",
"Red Bull Energy Drink",
"Fanta"
]
let Großbuchstaben=brands.map(element=>
    element.toUpperCase()
)
console.log(Großbuchstaben);