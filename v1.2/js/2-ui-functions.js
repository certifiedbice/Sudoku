/*=================================================================================================================
#2. UI Related Functions.

*/

// Used to alter tile color based on a given option.
const tileColor=(opt)=>{

	// Logging output.
	// console.log('START: tileColor()');

	// Reset the board color.
	if(opt===0){
		for(let i=0;i<81;i++){
			document.getElementById(`tile_${i}`).style.backgroundColor=`#fff`;
		}
	}
	// Highlight the given tiles.
	else if(opt===1){
		for(let i=0;i<numberSchemeArray.length;i++){
			if(numberSchemeArray[i]!==null){
				document.getElementById(`tile_${i}`).style.backgroundColor=`#ccc`;
			}
		}
	}

	// PlaceHolder for highlight incorrect tiles.

	// Logging output.
	// console.log('END: tileColor()');

};

// Onmouseup of an active tile, the tile number is stored, and the tile is highlight in the UI.
// Additionally, if hinting is active, the hint function is triggered to display the hint for that tile.
const tileSelect=(tileNumber)=>{
	
	// Logging output.
	// console.log('START: tileSelect()');

	// If the activeTiles object is unset, then set object key/values.
	if(Object.keys(activeTiles).length===0){
		for(let i=0;i<variableScheme.length;i++){
			activeTiles[variableScheme[i]]=variableScheme[i];
		}
	}

	// If the tile is active?
	if(activeTiles.hasOwnProperty(tileNumber)){
		
		// If set, reset the previous tile.
		if(selectedTile!==null){
			// Previous tile UI reset code here.
			document.getElementById(`tile_${selectedTile}`).style.border=`none`;
		}
		
		// Store tileNumber as the currently selectedTile.
		selectedTile=tileNumber;

		// selectedTile UI code here.
		document.getElementById(`tile_${selectedTile}`).style.border=`1px solid #f00`;

	}

	/* if hint is active,

	I'm too sexy for my code
	Too sexy for my code
	code's going to leave me
	I'm too sexy for this framework
	Too sexy for this framework
	So sexy it hurts
	And I'm too sexy for React
	Too sexy for React
	Node, and Angular
	I'm too sexy for your code
	Too sexy for your code
	No way I'm Cisco hacking
	'Cause I'm e l33t, you know what I mean
	And I do run exploits on your box
	Yeah, on your box
	On your box, yeah
	I shake some salt on the hash
	I'm too sexy for my Pentium
	Too sexy for my Pentium
	Too sexy by far
	And I'm too sexy for my skillz
	Too sexy for my skillz
	What do you think about that?
	'Cause I'm e l33t, you know what I mean
	And I do run exploits on your box
	Yeah, on your box
	On your box, yeah
	I shake some salt on the hash
	Too sexy for my
	Too sexy for my
	Too sexy for my
	'Cause I'm e l33t, you know what I mean
	And I do run exploits on your box
	Yeah, on your box
	On your box
	Yeah, I shake some salt on the hash
	Too sexy for my hack
	Too sexy for my hack
	Poor exploit
	Poor exploit hack
	I'm too sexy for my code
	Too sexy for my code
	Code's going to leave me
	And I'm too sexy for this song
	
	*/
	if(displayHint){
		hint();
	}

	// Logging output.
	// console.log('END: tileSelect()');

}

// Validates a keypress and updates the tile value.
const tileInput=(key)=>{

	// Validate key is is in the range 1-9.
	let validKey=/[1-9]/g.test(key);

	if(validKey){
		// Update the UI.
		document.getElementById(`tile_${selectedTile}`).innerHTML=key;
		
		// Check Solution.
		validateSolution();

	}

}

export {
	tileColor,
	tileSelect,
	tileInput
};