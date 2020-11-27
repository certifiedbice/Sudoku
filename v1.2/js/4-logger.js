/*=================================================================================================================
#4. Logger.

Handles logging output,

uses variables/arrays:

admin
logMode
logOutput
numberSchemeLog
variableSchemeLog
printPuzzleLog
hintLog

*/

const logger=(msg)=>{

	// Logging output.
	// console.log('START: logger()');

	// Logging output.
	// console.log(`logMode=${logMode}`);

	// Admin setting
	if(admin===0){return;}

	// Clear Mode.
	if(logMode==0){
		console.log(`logMode=${logMode}, clearing logs.`);
		numberSchemeLog.length=0;
		variableSchemeLog.length=0;
		printPuzzleLog.length=0;
		hintLog.length=0;
	}
	else if(logMode==1){
		numberSchemeLog.push(msg);
	}
	else if(logMode==2){
		variableSchemeLog.push(msg);
	}
	else if(logMode==3){
		printPuzzleLog.push(msg);
	}
	else if(logMode==4){
		hintLog.push(msg);
	}
	else if(logMode==69){
		if(msg==0){
			// Output numberSchemeLog to the console log.
			console.log(`OUTPUT: numberSchemeLog`);
			for(let i=0;i<numberSchemeLog.length;i++){
				console.log(numberSchemeLog[i]);
			}
		}
		if(msg==1){
			// Output variableScheme to the console log.
			// console.log('OUTPUT: variableSchemeLog');
			for(let i=0;i<variableSchemeLog.length;i++){
				console.log(variableSchemeLog[i]);
			}
		}
		if(msg==2){
			// Output printPuzzleLog to the console log.
			for(let i=0;i<printPuzzleLog.length;i++){
				console.log(printPuzzleLog[i]);
			}
		}
		if(msg==3){
			// Output hintLog to the console log.
			for(let i=0;i<hintLog.length;i++){
				console.log(hintLog[i]);
			}
		}
		if(msg==4){
			// Output solution to the console log.
			for(let i=0;i<numberSchemeCopy.length;i++){
				// html=logWin.innerHTML;
				if(i==8||i==17||i==26||i==35||i==44||i==53||i==62||i==77){
					// chngElement('logWin','alterInnerHTML',(html+numberSchemeCopy[i]+'</br>'));
				}
				else{
					// chngElement('logWin','alterInnerHTML',(html+numberSchemeCopy[i]));
				}
			}
		}
	}

	// Logging output.
	// console.log('END: Logger()');
	
}
export default logger;