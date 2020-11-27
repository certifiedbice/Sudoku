/*=================================================================================================================
#8. Generate variable scheme.

Randomly generate the variable tiles in the puzzle, based on difficulty.

*/

const generateVariableScheme=()=>{

	// Logging output.
	logger(`START: generateVariableScheme()`);

	let emptyTileCount;

	if(difficulty===1){emptyTileCount=randomNumber(37,41);}
	else if(difficulty===2){emptyTileCount=randomNumber(42,46);}
	else if(difficulty===3){emptyTileCount=randomNumber(47,51);}
	else if(difficulty===4){emptyTileCount=randomNumber(52,56);}
	else if(difficulty===5){emptyTileCount=randomNumber(57,61);}

	// Logging output.
	logger(`difficulty===${difficulty}`);
	// Logging output.
	logger(`emptyTileCount===${emptyTileCount}`);

 	// Copy numberScheme to numberSchemeCopy.
	numberSchemeArrayCopy=numberSchemeArray.slice(0,numberSchemeArray.length);

	// Logging output.
	if(numberSchemeArrayCopy.length===81){logger(`numberSchemeArray has been copied to numberSchemeArrayCopy`);}
	
	// Logging output.
	logger(`Building array of all tile numbers`);

	// This array will contain all of the empty tile numbers.
	for(let i=0;i<81;i++){variableScheme[i]=i;}
	
	// Logging output.
	logger(`variableScheme.length===${variableScheme.length}`);

	// Remove tile numbers that are to remain unchanged.
	for(let i=0;i<(81-emptyTileCount);i++){
		//Randomize the array so that the tiles removed are random.
		variableScheme.sort(function(a,b){return 0.5-Math.random()});
		variableScheme.pop();
	}

	// Logging output.
	logger(`Removing ${81-emptyTileCount} tiles that are to remain unchanged from the variableScheme array`);
	
	// Logging output.
	logger(`variableScheme.length===${variableScheme.length}`);
	
	// Remove the variableScheme values from the numberScheme array.
	for(let i=0;i<variableScheme.length;i++){
		numberSchemeArray[variableScheme[i]]=null;
	}

	// Logging output.
	logger(`END: generateVariableScheme()`);

}

export default generateVariableScheme;