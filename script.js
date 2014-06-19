$(document).ready(function(){
		
	$("#playhead").draggable({ axis: "y", containment: "parent"  });
	
	console.log();
	
	
	// CLICK GO DIRECTLY TO ANY POINT ON THE TUNER
	function clickToTune(){
	
		//VARIABLES FOR THE FUNCTION
		var playhead = $('.playhead');		
		
		// FUNCTION TO CHANGE THE PLAYHEAD BASED ON THE CLICK STATE IN THE TUNER GRAPHIC
		$(document).click(function(e){
			yPosition = e.pageY - 150;
			moveNeedle(yPosition); // AFTER THE TUNER HAS BEEN CLICKED, MOVE THE PLAYHEAD GRAPHIC 	
		});		
		
	// MOVE NEEDLE POSITION
	function moveNeedle(y){
		
		// ANIMATE THE PLAYHEAD TO THE PASSED PARAMETER X
		$('#playhead').animate({ top: y}, 'easeInOutCubic');
		}
	}
	
	clickToTune();
	

});
