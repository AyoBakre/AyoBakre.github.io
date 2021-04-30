/* Typewriter effect on the heading description */


"use strict";
var i = 0;
var txt = "Software Developer_";
var speed = 100;

function typeWriter() {
  	if (i < txt.length) {
    	document.getElementById("type").innerHTML += txt.charAt(i);
    	i++;
    	setTimeout(typeWriter, speed);
  	}
}

document.body.onload = function() {
 typeWriter()
}


$(".menu, nav ul li a").on("click", function(e) {
  e.preventDefault();
  $("nav ul").toggleClass("active");
});