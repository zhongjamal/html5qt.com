/*
JavaScript for the demo: Recreating the Nikebetterworld.com Parallax Demo
Demo: Recreating the Nikebetterworld.com Parallax Demo
Author: Ian Lunn
Author URL: http://www.ianlunn.co.uk/
Demo URL: http://www.ianlunn.co.uk/demos/recreate-nikebetterworld-parallax/
Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

$(document).ready(function() { //when the document is ready...


	//save selectors as variables to increase performance
	var $window = $(window);
	var $homeBG = $('#home');
	var homesprite = $('#home .sprite');
	var $projectsBG = $('#projects');
	var $designBG = $('#design');
	var designsprite = $('#design .sprite');
	var $technikBG = $('#technik');
	var techniksprite = $('#technik .sprite');
	var $labBG = $('#lab');
	var labsprite = $('#lab .sprite');
	var $aboutBG = $('#about');
	var aboutsprite = $('#about .sprite');
	var $showroomsBG = $('#showrooms');
	var $jobsBG = $('#jobs');
	
	var windowHeight = $window.height(); //get the height of the window
	
	
	//apply the class "inview" to a section that is in the viewport
	$("#home, #projects, #design, #technik, #lab, #about,#showrooms,#jobs").bind("inview", function (event, visible) {
			if (visible) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});
	
			
	//function that places the navigation in the center of the window
	// function RepositionNav(){
	// 	var windowHeight = $window.height(); //get the height of the window
	// 	var navHeight = $('#nav').height() / 2;
	// 	var windowCenter = (windowHeight / 2); 
	// 	var newtop = windowCenter - navHeight;
	// 	$('#nav').css({"top": newtop}); //set the new top position of the navigation list
	// }
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar
		
		// Ausgabe: Position, Window height
		//$("#meta").html("pos: "+pos+" windowHeight: "+windowHeight);
		
		// home: 0
		if($homeBG.hasClass("inview")){
			//call the newPos function and change the background position
			$homeBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 600, 0.3)}); 
			//call the newPos function and change the secnond background position
			homesprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 1443, 0.6)});
		}
		
		// projects: 1000
		if($projectsBG.hasClass("inview")){
			//call the newPos function and change the background position
			$projectsBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1800, 0.3)});
		}
		
		// design: 2000
		if($designBG.hasClass("inview")){
			//call the newPos function and change the background position
			$designBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 2800, 0.3)}); 
			//call the newPos function and change the secnond background position
			designsprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 3640, 0.6)});
		}
		
		// technik: 3000
		if($technikBG.hasClass("inview")){
			//call the newPos function and change the background position
			$technikBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 3850, 0.3)}); 
			//call the newPos function and change the secnond background position
			techniksprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 3660, -0.6)});
		}

		// lab: 4000
		if($labBG.hasClass("inview")){
			//call the newPos function and change the background position
			$labBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 4800, 0.3)}); 
			//call the newPos function and change the secnond background position
			labsprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 5300, 0.6)});
		}

		// about: 5000
		if($aboutBG.hasClass("inview")){
			//call the newPos function and change the background position
			$aboutBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 5800, 0.3)}); 
			//call the newPos function and change the secnond background position
			aboutsprite.css({'backgroundPosition': newPos(50, windowHeight, pos, 6350, 0.6)});
		}

		// showrooms: 6000
		if($showroomsBG.hasClass("inview")){
			//call the newPos function and change the background position
			$jobsBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 6800, 0.3)}); 
		}

		// jobs: 7000
		if($jobsBG.hasClass("inview")){
			//call the newPos function and change the background position
			$jobsBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 7800, 0.3)}); 
		}
		
		//$('#pixels').html(pos); //display the number of pixels scrolled at the bottom of the page
	}
		
	//RepositionNav(); //Reposition the Navigation to center it in the window when the script loads
	
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
		//RepositionNav(); //reposition the navigation list so it remains vertically central
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});
	
});