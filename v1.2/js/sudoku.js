/*=================================================================================================================
Sudoku v1.2

*/

/*=================================================================================================================
Table of Contents:
#0.	Variable Declarations.
#1.	Generate UI DOM Elements.
#2.   UI Functions.
#3.   Generate Puzzle.
#4.   Print Log.
#5.   Generate Number Scheme.
#6.   Build Invalid Number List.
#7.   Build Valid Number List.
#8.   Assign Number.
#9.   Random Number.
#10.  Generate Variable Scheme.
#11.  Print Puzzle.
#12.  Difficulty.
*/

/*======================================= #0. Variable Declarations */

// Import with wildcard logic iteration.
import * as exports0 from './0-variable-declarations.js';
Object.entries(exports0).forEach(([name,exported])=>window[name]=exported);
/*======================================= #1. Generate UI DOM Elements */
import './1-generate-ui.js';
/*======================================= #2. UI Functions */
// Import with wildcard logic iteration.
import * as exports2 from './2-ui-functions.js';
Object.entries(exports2).forEach(([name,exported])=>window[name]=exported);
/*======================================= #3. Generate Puzzle */
import generatePuzzle from './3-generate-puzzle.js';
window.generatePuzzle=generatePuzzle;
document.addEventListener('keypress',e=>{e.preventDefault();if(selectedTile!==null){tileInput(e.key);}});
/*======================================= #4. Logger */
import logger from './4-logger.js';
window.logger=logger;
/*======================================= #5. Generate Number Scheme */
import generateNumberScheme from './5-generate-number-scheme.js';
window.generateNumberScheme=generateNumberScheme;
/*======================================= #6. Build Valid Tile Value List */
import buildValidTileValueList from './6-build-valid-tile-value-list.js';
window.buildValidTileValueList=buildValidTileValueList;
/*======================================= #7. Assign Number */
import assignTileValue from './7-assign-tile-value.js';
window.assignTileValue=assignTileValue;
/*======================================= #8. Generate Variable Scheme */
import generateVariableScheme from './8-generate-variable-scheme.js';
window.generateVariableScheme=generateVariableScheme;
/*======================================= #9. Print Puzzle */
import printPuzzle from './9-print-puzzle.js';
window.printPuzzle=printPuzzle;
/*======================================= #10. Difficulty */
import setDifficulty from './10-set-difficulty.js';
window.setDifficulty=setDifficulty;
/*======================================= #11. Timer */
import timer from './11-timer.js';
window.timer=timer;
/*======================================= #12. Hint */
import hint from './12-hint.js';
window.hint=hint;
/*======================================= #13. Validate Solution */
import validateSolution from './13-validate-solution.js';
window.validateSolution=validateSolution;