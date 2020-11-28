/*=================================================================================================================
#9. Print Puzzle.

Outputs the puzzle to the UI for game play.

*/

const printPuzzle=()=>{

	// Logging output.
	logger(`START: printPuzzle()`);

	for(let i=0;i<81;i++){
		document.getElementById(`tile_${i}`).value=numberSchemeArray[i];
	}

	// Logging output.
	logger(`END: printPuzzle()`);

}
export default printPuzzle;