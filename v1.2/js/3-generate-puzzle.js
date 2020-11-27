/*=================================================================================================================
#3. Generate Puzzle.

Parent function responsible for calling the various sub functions involved in a puzzle build.

*/

const generatePuzzle=()=>{
	
	// Logging output.
	// console.log(`START: generatePuzzle()`);

	// Catch if game is already active.
	if(activeGame){
		alert(`You cannot start a game while a game is in progress`);
		return;
	}
	
	// Catch if solutionOverlay is visible.
	document.getElementById(`solvedOverlay`).style.visibility=`hidden`;

	// Catch if timer-container has a value.
	document.getElementById(`timerContainer`).innerHTML=``;
	
	//Set logmode to clear.
	logMode=0;

	// Clear the logger content & log arrays every time a puzzle is generated.
	logger();

	// Reset the board's tile color.
	tileColor(0);

	// Set game to active.
	activeGame=1;

	// Store all log entries and generating the numberScheme.
	logMode=1;
	generateNumberScheme();

	// Store all log entries and generating the variableScheme.
	logMode=2;
	generateVariableScheme();

	// Store all log entries and printing the puzzle.
	logMode=3
	printPuzzle();

	// Highlight the given tiles.
	tileColor(1);

	// This logMode is used to differentiate between logModes(pushing log messages into arrays) and the interaction wth the UI Buttons(output of log arrays to the console).
	logMode=69;

	// Start Game Timer.
	gameTimer=setInterval(timer,1000);

	// Logging output.
	// console.log(`END: generatePuzzle()`);

}

export default generatePuzzle;
