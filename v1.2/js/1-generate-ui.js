// #1. Generate UI / DOM elements

// Header.
let header=document.createElement(`header`);
header.setAttribute(`id`,`header`);
document.body.appendChild(header);

// Title Container.
let titleContainer=document.createElement(`h1`);
titleContainer.setAttribute(`id`,`titleContainer`);
titleContainer.innerHTML=`Sudoku`;
header.appendChild(titleContainer);

// Admin setting
if(window.admin===1){
		// Log Control Container.
		let logControlsContainer=document.createElement(`div`);
		logControlsContainer.setAttribute(`id`,`logControlsContainer`);
		header.appendChild(logControlsContainer);

		// Log Control Buttons.
		let printButton=new Array();
		for(let i=0;i<5;i++){
			printButton[i]=document.createElement(`div`);
			printButton[i].setAttribute(`id`,`printButton${i+1}`);
			printButton[i].setAttribute(`class`,`printButton`);
			printButton[i].setAttribute(`onmouseup`,`logger(${i})`);
			if(i==0){printButton[i].innerHTML=`Number Scheme`;}
			else if(i==1){printButton[i].innerHTML=`Variable Scheme`;}
			else if(i==2){printButton[i].innerHTML=`Print Puzzle`;}
			else if(i==3){printButton[i].innerHTML=`Hint`;}
			else if(i==4){printButton[i].innerHTML=`Solution`;}
			logControlsContainer.appendChild(printButton[i]);
		}
		printButton[5]=document.createElement(`div`);
		printButton[5].setAttribute(`id`,`printButton`+6);
		printButton[5].setAttribute(`class`,`printButton`);
		printButton[5].setAttribute(`onmouseup`,`console.clear()`);
		printButton[5].innerHTML=`Clear Console`;
		logControlsContainer.appendChild(printButton[5]);
}

// Puzzle Container.
let puzzleContainer=document.createElement(`div`);
puzzleContainer.setAttribute(`id`,`puzzleContainer`);
document.body.appendChild(puzzleContainer);

// Solved puzzle overlay.
let solvedOverlay=document.createElement(`div`);
solvedOverlay.setAttribute(`id`,`solvedOverlay`);
solvedOverlay.innerHTML=`Congratulations,</br>You have solved the puzzle!`;
puzzleContainer.appendChild(solvedOverlay);

// Tiles.
let tileR=new Array();
for(let i=0;i<81;i++){
		tileR[i]=document.createElement(`input`);
		tileR[i].setAttribute(`type`,`text`);
		// tileR[i].setAttribute(`value`,`${i}`);
		tileR[i].setAttribute(`id`,`tile_${i}`);
		tileR[i].setAttribute(`class`,`tile`);
		// Tiles needing additional right margin, visually separating inner squares.
		if(i===2||i===11||i===20||i===29||i===38||i===47||i===56||i===65||i===74){
			tileR[i].setAttribute(`class`,`tile tile-r-margin`);
		
		}
		// Tiles needing additional left margin, visually separating inner squares.
		if(i===6||i===15||i===24||i===33||i===42||i===51||i===60||i===69||i===78){
			tileR[i].setAttribute(`class`,`tile tile-l-margin`);
		
		}
		// Tiles needing additional top margin, visually separating inner squares.
		if(
			i===27||i===28||i===29||i===30||i===31||i===32||i===33||i===34||i===35||
			i===54||i===55||i===56||i===57||i===58||i===59||i===60||i===61||i===62
		){
			tileR[i].setAttribute(`class`,`${tileR[i].getAttribute(`class`)} tile-t-margin`);
		}
		tileR[i].setAttribute(`onmouseup`,`tileSelect(${i})`);
		// tileR[i].setAttribute(`onkeydown`,`tileInput()`);
		puzzleContainer.appendChild(tileR[i]);
}

// Footer.
let footer=document.createElement(`footer`);
footer.setAttribute(`id`,`footer`);
document.body.appendChild(footer);

// Timer Container.
let timerContainer=document.createElement(`div`);
timerContainer.setAttribute(`id`,`timerContainer`);
timerContainer.setAttribute(`class`,`control-container`);
footer.appendChild(timerContainer);

// Hint Container.
let hintContainer=document.createElement(`div`);
hintContainer.setAttribute(`id`,`hintContainer`);
hintContainer.setAttribute(`class`,`control-container`);
footer.appendChild(hintContainer);

// Hint Button.
let hintBtn=document.createElement(`div`);
hintBtn.setAttribute(`id`,`hint-btn`);
hintBtn.setAttribute(`onmouseup`,`hint(69)`);
hintBtn.innerHTML=`Hint - Off`;
hintContainer.appendChild(hintBtn);

// Hint.
let hint=document.createElement(`div`);
hint.setAttribute(`id`,`hint`);
hintContainer.appendChild(hint);

// Start Button.
let startBtn=document.createElement(`div`);
startBtn.setAttribute(`id`,`startBtn`);
startBtn.setAttribute(`class`,`control-container`);
startBtn.setAttribute(`onmouseup`,`generatePuzzle()`);
startBtn.innerHTML=`Start`;
footer.appendChild(startBtn);

// Difficulty Container.
let difficultyContainer=document.createElement(`div`);
difficultyContainer.setAttribute(`id`,`difficulty-container`);
difficultyContainer.setAttribute(`class`,`control-container`);
footer.appendChild(difficultyContainer);

// Difficulty Title.
let difficultyTitle=document.createElement(`div`);
difficultyTitle.setAttribute(`id`,`difficulty-title`);
difficultyTitle.innerHTML=`Difficulty`;
difficultyContainer.appendChild(difficultyTitle);

// Difficulty Button Container.
let difficultyLevelContainer=document.createElement(`div`);
difficultyLevelContainer.setAttribute(`id`,`difficulty-btn-container`);
difficultyContainer.appendChild(difficultyLevelContainer);

// Difficulty Buttons.
let difficultyButtons=new Array();
for(let i=0;i<5;i++){
	difficultyButtons[i]=document.createElement(`div`);
	difficultyButtons[i].setAttribute(`id`,`difficulty_${i+1}`);
	difficultyButtons[i].setAttribute(`class`,`difficulty-btn`);
	difficultyButtons[i].setAttribute(`onmouseup`,`setDifficulty(${i+1})`);
	// Highlight the default.
	if(i==0){
		difficultyButtons[i].style.backgroundColor=`#000`;
		difficultyButtons[i].style.color=`#fff`;
	}
	difficultyButtons[i].innerHTML=(i+1);
	difficultyLevelContainer.appendChild(difficultyButtons[i]);
}