/*=================================================================================================================
 #12. Hint.

Displays a list of possible options for a given tile.

*/

const hint=(opt)=>{
	
	// Logging output.
	// console.log('START: hint()');

	// Turn on/off displayHint.
	if(opt===69){
		displayHint===0?displayHint=1:displayHint=0;
		if(displayHint===0){
			// Set the hint-title indicator.
			document.getElementById(`hint-btn`).innerHTML=`Hint - Off`;
			document.getElementById(`hint`).innerHTML=``;
			return;
		}
		else{
			// Set the hint-title indicator.
			document.getElementById(`hint-btn`).innerHTML=`Hint - On`;
		}
	}

	// Store all log entries while generating the hint.
	logMode=4;
	
	// Reset hintLog every time the hint function runs.
	hintLog.length=0;

	// Reset hint in the UI.
	document.getElementById(`hint`).innerHTML=``;

	if(selectedTile!==null){

		// Log the selectedTile.
		logger(`selectedTile===${selectedTile}`);
		
		/* Load the selectedTile tileComparisonList,
		the comparison list is used to gather values from the selectedTile's
		corresponding tiles in order to build a list of values that are valid hints. */
		tileComparisonList=comparisonLists[selectedTile];

		// Logging output.
		logger(`tileComparisonList===${tileComparisonList}`);

		// Build the list of values that the selectedTile cannot contain.
		logger(`Building the tileComparisonList for the selectedTile`);

		// Hash to contain possible hint values for the selectedTile.
		let hintList={}
		for(let i=0;i<tileComparisonList.length;i++){
			let val=document.getElementById(`tile_${tileComparisonList[i]}`).value;
			if(!hintList[val]&&val!==''){
				hintList[val]=val;
			}
		}

		// Logging output.
		logger(`hintList===${hintList}`);

		// Holds the values for the hint.
		let hintStr=``;
		for(let i=1;i<10;i++){
			if(!hintList.hasOwnProperty(i)){
				hintStr+=`${i}`;
			}
		}

		// Trim the trailing comma from the hint innerHTML.
		hintStr=hintStr.split(``).join();

		// Output the hint to the UI.
		document.getElementById(`hint`).innerHTML=hintStr;
	}	

	// Logging output.
	// console.log('END: hint()');

}

export default hint;