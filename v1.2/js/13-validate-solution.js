/*=================================================================================================================
#15. Validate Solution.

*/

const validateSolution=()=>{

	// Boolean used to validate solution.
	let tileTest=false;
	
	// Array to hold current solution.
	let solutionArray=[];

	// Check if every tile has been populated.
	for(let i=0;i<81;i++){
		
		// Validate tile.
		let validTile=/[1-9]/g.test(document.getElementById(`tile_${i}`).innerHTML);

		// Bad tile.
		if(validTile===false){
			break;
		}
		else{
			// Build array for comparison.
			solutionArray.push(document.getElementById(`tile_${i}`).innerHTML);
		}
	
	}

	// Possible solution found. 
	if(solutionArray.length===81){

		for(let i=0;i<81;i++){

			if(solutionArray[i].toString()===numberSchemeArrayCopy[i].toString()){
				console.log(`Valid`);
				tileTest=true;
			}
			else{
				console.log(`Invalid`);
				tileTest=false;
			}
			
		}

	}

	// If solution validates.
	if(tileTest===true){

		// Store the time from timer.
		let timeCompleted=document.getElementById(`hint`).innerHTML;

		// Stop timer
		clearInterval(gameTimer);

		// Turn on overlay.
		document.getElementById(`solvedOverlay`).style.visibility=`visible`;

		// Reset timer.
		timeCount=0;
		gameTimer=undefined;
		
		// Reset the last selectedTile.
		document.getElementById(`tile_${selectedTile}`).style.border=`none`;
		selectedTile=undefined;

		// Reset activeGame.
		activeGame=0;

	}

}

export default validateSolution;