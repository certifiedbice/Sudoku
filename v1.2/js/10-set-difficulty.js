/*=================================================================================================================
#10. Set Difficulty.

Stores the difficulty level set by the user,
it also makes changes to the UI element displaying the difficulty settings.

*/

const setDifficulty=(setting)=>{

	// Logging output.
	// console.log('START: setDifficulty()');

	// Check for active puzzle.
	if(activeGame){
		alert('You cannot alter difficulty while a game is in progress');
		return;
	}

	// Validate setting.
	let validSetting=/[1-5]/g.test(setting);

	if(validSetting==true){
		// Store the new difficulty setting.
		difficulty=setting;
		// Adjust the buttons to reflect the setting.
		for(let i=0;i<5;i++){
			if(i===setting-1){
				document.getElementById(`difficulty_${i+1}`).style='background-color:#000000;color:#ffffff;';
			}
			else{
				document.getElementById(`difficulty_${i+1}`).style='background-color:#fff;color:#000000;';
			}
		}
	}

	// Logging output.
	// console.log('END: setDifficulty()');

}

export default setDifficulty;