/*=================================================================================================================
#7. Assign Tile Value.

The number is chosen randomly by selecting a random
element from validTileValueList, the value of that
element will be pushed to the appropriate 
numberSchemeArray element.

*/

const assignTileValue=()=>{

	// Logging output.
	logger(`START: assignTileValue()`);

	// Set the random number.
	let numberToAssign=randomNumber(0,validTileValueList.length);
	
	// Logging output.
	logger(`Random number selected, numberToAssign===${numberToAssign}`);

	// Logging output.
	logger(`validTileValueList[${numberToAssign}] has been selected`);
	
	// Assign the selected value to the appropriate numberSchemeArray element.
	numberSchemeArray[currentTile]=validTileValueList[numberToAssign];
	
	// Logging output.
	logger(`numberSchemeArray[${currentTile}] has been assigned a value of ${validTileValueList[numberToAssign]}`);
	
	// Logging output.
	logger(`END: assignTileValue()`);

}

export default assignTileValue;