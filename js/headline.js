/* Typewriter effect on the heading description */


"use strict";
var i = 0;
var txt = "I'm a Full Stack Web Developer_";
var speed = 70;

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
