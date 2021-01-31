/* global $, alert, console*/


(function($) {
	"use strict";

	/* ---------------------------------------------------
			1 - Adjust Loading Page
	----------------------------------------------------- */
	$(window).load(function() {
		$(".loading .loading-wrapper").delay(500).animate({
			 top: "-100%"
		}, 1000, "easeInQuart");
		$(".loading").delay(1100).fadeOut(1500);
	});

	/* ---------------------------------------------------
			2 - Make Header takes the Full
			Height of the window
	----------------------------------------------------- */
	var homeSec = $("#home");
	homeSec.height($(window).height());

	$(window).resize(function() {
		homeSec.height($(window).height());
	});

	/* ---------------------------------------------------
			3 - Parallax Effect
	----------------------------------------------------- */
	var parallaxHome 	= $("#home.parallax"),
		parallaxFacts 	= $("#fun-facts.parallax"),
		parallaxQuote 	= $("#quote.parallax"),
		parallaxSkills 	= $("#skills.parallax"),
		parallaxTest 	= $("#testimonials.parallax"),
		parallaxContact = $("#contact.parallax"),
		parallaxSlider 	= $(".slider-item.parallax");

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		parallaxHome.css({"background-attachment": "scroll"});
		parallaxFacts.css({"background-attachment": "scroll"});
		parallaxQuote.css({"background-attachment": "scroll"});
		parallaxSkills.css({"background-attachment": "scroll"});
		parallaxTest.css({"background-attachment": "scroll"});
		parallaxContact.css({"background-attachment": "scroll"});
		parallaxSlider.css({"background-attachment": "scroll"});
	} else {
		parallaxHome.parallax("50%", 0.4);
		parallaxFacts.parallax("50%", 0.2);
		parallaxQuote.parallax("50%", 0.4);
		parallaxSkills.parallax("50%", 0.2);
		parallaxTest.parallax("50%", 0.02);
		parallaxContact.parallax("50%", 0.1);
		parallaxSlider.parallax("50%", 0.5);
	}

    /* ---------------------------------------------------------
			4 - Move to section onclick on navbar link 
	----------------------------------------------------- */
    $("a.scroll-link").on("click", function(e) {
    	e.preventDefault();
    	var target = $($(this).attr("href"));
    	if (target) {
    		$("html, body").animate({
    			scrollTop: target.offset().top
    		}, 1000, "easeInQuart");
    	}
    });

	/* ---------------------------------------------------
			5 - change navbar background on scroll 
	----------------------------------------------------- */
	$(window).scroll(function() {
		var navBar = $("#home .navbar");
		if ($(this).scrollTop() > 100) {
			navBar.addClass("scrolled");
		} else {
			navBar.removeClass("scrolled");
		}
	});

	/* ---------------------------------------------------
			6 - Hide menu after clicking on a link 
	----------------------------------------------------- */
	$(".nav a").on("click", function() {
		$("#navbar-collaps").collapse("hide");
	});

	/* ---------------------------------------------------
			7 - Launch To Top Button when scroll 
	----------------------------------------------------- */
	var toTopButton = $("#toTop");
	$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
			toTopButton.addClass("appeared");
		} else {
			toTopButton.removeClass("appeared");
		}
	});

	/* ---------------------------------------------------
			8 - Go To Top onclick on toTop Button
	----------------------------------------------------- */
	toTopButton.on("click", function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1500, "easeInQuart");
	});

	/* ---------------------------------------------------
			10 - Launch Bootstrap Tabs in About-Me Section 
	----------------------------------------------------- */
	$(".info-tabs .nav-tabs a").on("click", function(e) {
		e.preventDefault();
		$(this).tab("show");
	});

    /* ---------------------------------------------------
			13 - start mixitup plugin in portfolio section
	----------------------------------------------------- */
    $("#Container").mixItUp();

    /* ---------------------------------------------------
			14 - start Tooltip in portfolio section
	----------------------------------------------------- */
	$('[data-toggle="tooltip"]').tooltip({
		delay: 150
	});

    /* ---------------------------------------------------
			18 - Contact Form
	----------------------------------------------------- */
	// Variables
	var contactForm = $("#contact-form"),
		formResponse = $(".form-response"),
		submitButton = $("#submit");
	contactForm.validator().on("submit", function(e) {
		if(e.isDefaultPrevented()) {
			formResponse.text("Sorry, you didn't fill the form.").fadeIn(1000);
		} else {
			e.preventDefault();
			submitForm();
		}
	});
	
})(jQuery); 

// contact form submit
			window.addEventListener("DOMContentLoaded", function () {

				// get the form elements defined in your form HTML above

				var form = document.getElementById("contact-form");
				var button = document.getElementById("submit");
				var status = document.getElementById("form-status");

				// Success and Error functions for after the form is submitted

				function success() {
					button.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Sending..."
					form.reset();
					setTimeout(() => { button.innerHTML = "Send Message"; }, 500);
					status.innerHTML= "Thanks! Your message sent correctly.";
				}

				function error() {
					button.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Sending..."
					setTimeout(() => { status.innerHTML = "Oops! There was a problem."; }, 500);
				}

				// handle the form submission event

				form.addEventListener("submit", function (ev) {
					ev.preventDefault();
					var data = new FormData(form);
					ajax(form.method, form.action, data, success, error);
				});
			});

			// helper function for sending an AJAX request

			function ajax(method, url, data, success, error) {
				var xhr = new XMLHttpRequest();
				xhr.open(method, url);
				xhr.setRequestHeader("Accept", "application/json");
				xhr.onreadystatechange = function () {
					if (xhr.readyState !== XMLHttpRequest.DONE) return;
					if (xhr.status === 200) {
						success(xhr.response, xhr.responseType);
					} else {
						error(xhr.status, xhr.response, xhr.responseType);
					}
				};
				xhr.send(data);
			}
