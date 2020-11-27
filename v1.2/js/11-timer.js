/*=================================================================================================================
#14. Timer.

Function handles all timer related needs.

*/

const timer=()=>{
    
    // Logging output.
	// console.log('START: timer()');
    
    let hours=Math.floor(timeCount/60/60);
    let minutes=Math.floor(timeCount/60)-(hours*60);
    let seconds=timeCount%60;
    
    let time=`${hours}:${minutes}:${seconds}`;
    
    document.getElementById(`timerContainer`).innerHTML=time;
    
    timeCount++;

    // Logging output.
	// console.log('END: timer()');

}

export default timer;