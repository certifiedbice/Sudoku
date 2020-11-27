/*=================================================================================================================
#5. Generate Number Scheme.

Generate the number scheme for a puzzle by building it from the left-to-right, top-down.

*/

const generateNumberScheme=()=>{

	// Logging output.
	logger(`START: generateNumberScheme()`);

	// Initialize the array with null values.
	for(let i=0;i<81;i++){
		numberSchemeArray[i]=null;
	}

	// Represents the current row of the number scheme being generated.
	let currentRow=0;
	
	// Used to track a row generation count/solution attempts.
	let iterationErrorCounter=0;

	// Begin generating the number scheme.
	for(let i=0;i<81;i++){

		// CurrentTile being assigned a value.
		currentTile=i;

		// Logging output.
		if(i===0||i===9||i===18||i===27||i===36||i===45||i===54||i===63||i===72){logger(`currentRow==${currentRow}`);}

		// Logging output.
		logger(`i===${i}`);

		// Logging output.
		logger(`currentTile===${currentTile}`);
		
		/* Load the currentTile tileComparisonList,
		the comparison list is used to gather values from the currentTile's
		corresponding tiles in order to build a list of values that are relevant 
		when populating the currentTile with a value. */
		tileComparisonList=comparisonLists[currentTile];

		// Logging output.
		logger(`comparisonLists[currentTile]===${comparisonLists[currentTile]}`);

		// Logging output.
		logger(`tileComparisonList===${tileComparisonList}`);

		// Build the list of numbers that a tile(div) can contain.
		buildValidTileValueList();
		
		// Randomly choose an element from the validNumberList array and assign the value to the numberSchemeArray.
		assignTileValue();

		if(numberSchemeArray[currentTile]===undefined){

			// Logging output.
			logger(`Invalid row solution ${iterationErrorCounter}, generating new row`);

			// Rollback currentTile and decrement row number.
			if(currentRow>0){currentRow--;}
			if(currentRow===0){i=0;}
			if(currentRow===1){i=8;}
			if(currentRow===2){i=17;}
			if(currentRow===3){i=26;}
			if(currentRow===4){i=35;}
			if(currentRow===5){i=44;}
			if(currentRow===6){i=53;}
			if(currentRow===7){i=62;}
			if(currentRow===8){i=71;}
			iterationErrorCounter++;
		}
		else if(i===0||i===9||i===18||i===27||i===36||i===45||i===54||i===63||i===72){currentRow++;}
		
		// Error catch the invalid number scheme and reset all variables and loop to begin generating new number scheme.
		if(iterationErrorCounter===10){
			logger(`Invalid number scheme solution, generating new number scheme`);
			currentTile=0;
			i=-1;
			currentRow=0;
			iterationErrorCounter=0;
			for(let j=0;j<81;j++){numberSchemeArray[j]=null;}
		}
	}

	// Logging output.
	logger(`END: generateNumberScheme()`);

}
export default generateNumberScheme;
