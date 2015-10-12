$(document).ready(function(){

// console.log("document ready"); works




function cityChange(event){
  event.preventDefault();
  // console.log("city change");

// If placeholder === New York or new york or NY
//   then the css background url changes to "images/nyc.jpg"
// else no change

// var lower = city.toLowerCase().trim();
  // Handles upper and lower case unlike what I did below

var citytext = $("#city-type").val();
// return citytext;
console.log(citytext);

if (citytext === "ny" || citytext ==="New York" || citytext ==="NY" || citytext ==="nyc" || citytext ==="NYC") {
  $("body").css("background-image", "url(images/nyc.jpg)");
} else if (citytext === "sf" || citytext ==="SF" || citytext ==="san francisco" || citytext ==="San Francisco" || citytext ==="Bay Area"){
  $("body").css("background-image", "url(images/sf.jpg)");
} else if (citytext === "austin" || citytext ==="Austin" || citytext ==="atx" || citytext ==="ATX"){
  $("body").css("background-image", "url(images/austin.jpg)");
} else if (citytext === "la" || citytext ==="LA" || citytext ==="los angeles" || citytext ==="Los Angeles" || citytext ==="lax" || citytext ==="LAX"){
  $("body").css("background-image", "url(images/la.jpg)");
} else if (citytext === "sydney" || citytext ==="Sydney" || citytext ==="syd" || citytext ==="SYD"){
  $("body").css("background-image", "url(images/sydney.jpg)");
} else {
  $("body").css("background-image", "url(images/citipix_skyline.jpg)");
}

}




// If user types New York, new york, NY etc. into #city-type and clicks #submit-btn the background url changes to an image of new york.

$('#submit-btn ').click(cityChange);
  event.preventDefault();

});



// if (citytext === "New York" || "ny" || "new york" || "NY" || "n.y." || "N.Y." || "newyork" || "Newyork" || "NewYork") {
//   $("body").css("background-image", "url(images/nyc.jpg)");
// } else  {
//   // if  (citytext === "San Francisco")
//   // $("body").css("background-image", "url(images/sf.jpg)");
//   console.log ("wrong");
// }
// }
