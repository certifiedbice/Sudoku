/*=================================================================================================================
#6. Build A Valid Tile Value List.

Build a list of values based on the tileComparisonList, that are valid and that the currentTile
can contain because they are not in use anywhere else in the currentTile's tileComparisonList.

*/

const buildValidTileValueList=()=>{

	// Logging output.
	logger(`START: buildValidNumberList()`);

	// Reset before each build.
	validTileValueList=[];

	// Build an object containing invalid values, and ignoring null values.
	let invalid={};
	for(let j=0;j<tileComparisonList.length;j++){
		let tileVal=numberSchemeArray[tileComparisonList[j]];
		if(tileVal!==null&&tileVal!==undefined){
			if(!invalid[tileVal]){
				invalid[tileVal]=numberSchemeArray[tileComparisonList[j]];
			}
		}
	}
	
	// Logging output.
	logger(invalid);
	
	// Build a list of valid values based on the invalid values object.
	for(let j=1;j<10;j++){
		if(!invalid[j]){
			validTileValueList.push(j);
		}
	}

	// Logging output.
	logger(`validTileValueList===${validTileValueList}`);

	// Logging output.
	logger(`END: buildValidNumberList()`);
	
}
export default buildValidTileValueList;