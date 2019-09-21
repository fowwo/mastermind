var playing = true;
var time = 0;
var timeStart = 0;

var code = [];
var guess = 0;

function blank(){
	for (var i = 0; i < digit; i++){
		document.getElementById("" + i).textContent = "_";
	}
}
function check(){
	var codeNum = [0,0,0,0,0,0,0,0,0,0];
	var guessNum = [0,0,0,0,0,0,0,0,0,0];
	var correct = 0;
	var near = 0;
	guess++;

	// Calculate correct numbers and near numbers
	for (var i = 0; i < digit; i++){
		codeNum[code[i]]++; // Counts the number of each digit in the code
		guessNum[Number(document.getElementById("" + i).textContent)]++; // Counts the number of each digit in the guess
		if (Number(document.getElementById("" + i).textContent) === code[i]) { // Check if the digit guessed is in the same position in the code (check if correct)
			correct++;
		}
	}
	for (var i = 0; i < 10; i++){
	  near += Math.min(codeNum[i], guessNum[i]); // Calculates how many numbers are near by choosing the lower of the two digit counts (code and guess)
	}

	// Display guess and stats
	var temp = "";
	for (var i = 0; i < digit; i++){
		temp += document.getElementById("" + i).textContent;
	}
	document.getElementById("e" + (3 * guess - 3)).textContent = temp;
	document.getElementById("e" + (3 * guess - 2)).textContent = correct;
	document.getElementById("e" + (3 * guess - 1)).textContent = near;

	// Check if the code is guess correctly
	if (correct === digit){
		playing = false;
		/*
		if (fastest == -1 || fastest > (getTime() - timeStart)){
			fastest = getTime() - timeStart;
			setProperty("timer", "text-color", "#fc0");
			setText("timer", format(fastest));
		}
		else {
			setText("timer", format(getTime() - timeStart));
		}
		*/
		//playSound("sound://category_points/vibrant_game_ding_touch_1.mp3");
		
		for (var i = 0; i < digit; i++){
			document.getElementById("" + i).style.color = "#0f0";
		}
		//showElement("restart");
		//showElement("leaderboardButton");
		/*
		average = (guesses / win).toFixed(3);
		score += Math.floor(2000000 / (getTime() - timeStart + 20000) * ((-19 / 300) * (guessCount - 1) + 1) + 0.5);
		setText("bonus", "+" + Math.floor(2000000 / (getTime() - timeStart + 20000) * ((-19 / 300) * (guessCount - 1) + 1) + 0.5));
		console.log("bonus should be: " + Math.floor(2000000 / (getTime() - timeStart + 20000) * ((-19 / 300) * (guessCount - 1) + 1) + 0.5));

		setProperty("bonus", "text-color", "#0c0");
		showElement("bonus");
		timeStart = 0;
		update();
		*/
	}
	else if (guess >= max){
		playing = false;
		for (var i = 0; i < digit; i++){
			document.getElementById("" + i).textContent = code[i];
			document.getElementById("" + i).style.color = "#f00";
		}
		/*
		setText("timer", getText("timer") + "." + ((getTime() - timeStart) % 1000).pad(3));
		loss++;
		playSound("sound://category_alerts/vibrant_game_life_lost_1.mp3");
		showElement("restart");
		showElement("leaderboardButton");
		guesses++;
		average = (guesses / win).toFixed(3);
		if (score >= 500) {
			setText("bonus", "(-500)");
			score -= 500;
		}
		else {
			setText("bonus", "(-" + score + ")");
			score = 0;
		}
		setProperty("bonus", "text-color", "#c00");
		showElement("bonus");
		timeStart = 0;
		update();
		*/
	}
	else {
		//playSound("sound://category_tap/vibrant_ui_mouse_click_1.mp3");
		blank();
		//update();
	}

	//
	if (guess > 16) {
		playing = false;
	}
	else {
		/*
		if (guessCount == 9) {
			var p;
			for (p = 1; p < 9; p++) {
				setPosition("check" + p, getXPosition("check" + p) - 70, getYPosition("check" + p));
				setPosition("right" + p, getXPosition("right" + p) - 70, getYPosition("right" + p));
				setPosition("near" + p, getXPosition("near" + p) - 70, getYPosition("near" + p));
			}
			for (p = 9; p < 17; p++) {
				setPosition("check" + p, getXPosition("check" + p) + 70, getYPosition("check" + p));
				setPosition("right" + p, getXPosition("right" + p) + 70, getYPosition("right" + p));
				setPosition("near" + p, getXPosition("near" + p) + 70, getYPosition("near" + p));
			}
		}
		setText("check" + guessCount, getText("guess1") + getText("guess2") + getText("guess3") + getText("guess4"));
		setText("right" + guessCount, correct);
		setText("near" + guessCount, near);
		showElement("check" + guessCount);
		showElement("right" + guessCount);
		showElement("near" + guessCount);
		*/
	}
}
function timef(input){
	// Converts the time from ms to a formatted look (#:##.###)
	return Math.floor(input / 60000) + ":" + Math.floor(input % 60000 / 1000).pad(2) + "." + (input % 1000).pad(3);
}
function generate(){
	// Generates a new code and restarts the game
	blank();
	for (var i = 0; i < 3 * max; i++){
		if (i % 3 === 0){
			var temp = "";
			for (var j = 0; j < digit; j++){
				temp += "-";
			}
			document.getElementById("e" + i).textContent = temp;
		}
		else {
			document.getElementById("e" + i).textContent = "--";
		}
	}
	code = [Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
	guess = 0;
	for (var i = 0; i < digit; i++){
		document.getElementById("" + i).style.color = "#cdf";
	}
	playing = true;
}
	/*
	if (correct === 5) {
		playing = false;
		if (fastest == -1 || fastest > (getTime() - timeStart)) {
			fastest = getTime() - timeStart;
			setProperty("timer", "text-color", "#fc0");
			setText("timer", format(fastest));
		}
		else {
			setText("timer", format(getTime() - timeStart));
		}
		win++;
		playSound("sound://category_points/vibrant_game_ding_touch_1.mp3");
		setProperty("guess1", "text-color", "#0c0");
		setProperty("guess2", "text-color", "#0c0");
		setProperty("guess3", "text-color", "#0c0");
		setProperty("guess4", "text-color", "#0c0");
		showElement("restart");
		showElement("leaderboardButton");
		guesses++;
		average = (guesses / win).toFixed(3);
		score += Math.floor(2000000 / (getTime() - timeStart + 20000) * ((-19 / 300) * (guessCount - 1) + 1) + 0.5);
		setText("bonus", "+" + Math.floor(2000000 / (getTime() - timeStart + 20000) * ((-19 / 300) * (guessCount - 1) + 1) + 0.5));
		console.log("bonus should be: " + Math.floor(2000000 / (getTime() - timeStart + 20000) * ((-19 / 300) * (guessCount - 1) + 1) + 0.5));

		setProperty("bonus", "text-color", "#0c0");
		showElement("bonus");
		timeStart = 0;
		update();
	}
	else if (guessCount < 16) {
		playSound("sound://category_tap/vibrant_ui_mouse_click_1.mp3");
		setText("guess1", "•");
		setText("guess2", "•");
		setText("guess3", "•");
		setText("guess4", "•");
		guesses++;
		update();
	}
	else {
		playing = false;
		setText("timer", getText("timer") + "." + ((getTime() - timeStart) % 1000).pad(3));
		loss++;
		playSound("sound://category_alerts/vibrant_game_life_lost_1.mp3");
		setText("guess1", num[0]);
		setText("guess2", num[1]);
		setText("guess3", num[2]);
		setText("guess4", num[3]);
		setProperty("guess1", "text-color", "#c00");
		setProperty("guess2", "text-color", "#c00");
		setProperty("guess3", "text-color", "#c00");
		setProperty("guess4", "text-color", "#c00");
		showElement("restart");
		showElement("leaderboardButton");
		guesses++;
		average = (guesses / win).toFixed(3);
		if (score >= 500) {
			setText("bonus", "(-500)");
			score -= 500;
		}
		else {
			setText("bonus", "(-" + score + ")");
			score = 0;
		}
		setProperty("bonus", "text-color", "#c00");
		showElement("bonus");
		timeStart = 0;
		update();
	}

	//
	if (guessCount > 16){
	  playing = false;
	}
	else {
	  if (guessCount == 9){
		var p;
		for (p = 1; p < 9; p++){
		  setPosition("check" + p, getXPosition("check" + p) - 70, getYPosition("check" + p));
		  setPosition("right" + p, getXPosition("right" + p) - 70, getYPosition("right" + p));
		  setPosition("near" + p, getXPosition("near" + p) - 70, getYPosition("near" + p));
		}
		for (p = 9; p < 17; p++){
		  setPosition("check" + p, getXPosition("check" + p) + 70, getYPosition("check" + p));
		  setPosition("right" + p, getXPosition("right" + p) + 70, getYPosition("right" + p));
		  setPosition("near" + p, getXPosition("near" + p) + 70, getYPosition("near" + p));
		}
	  }
	  setText("check" + guessCount, getText("guess1") + getText("guess2") + getText("guess3") + getText("guess4"));
	  setText("right" + guessCount, correct);
	  setText("near" + guessCount, near);
	  showElement("check" + guessCount);
	  showElement("right" + guessCount);
	  showElement("near" + guessCount);
	}
  }

	*/
generate();

window.addEventListener("keyup", (event) => {
	if (playing){
		// To prevent things like Number(Spacebar) === 0...
		if (event.key === "0" || event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9" || event.key === "0"){
			for (var i = 0; i < digit; i++){
				if (document.getElementById("" + i).textContent === "_"){
					document.getElementById("" + i).textContent = event.key;
					break;
				}
			}
		}
		else if (event.key === "Backspace"){
			for (var i = digit - 1; i >= 0; i--){
				if (document.getElementById("" + i).textContent !== "_"){
					document.getElementById("" + i).textContent = "_";
					break;
				}
			}
		}
		else if (event.key === "Enter" || event.key === "Spacebar"){
			if (document.getElementById("" + (digit - 1)).textContent !== "_"){
				check();
			}
		}
	}
	else if (event.key === "Enter" || event.key === "Spacebar"){
		generate();
	}
	
	/*
	else if (event.key === "s"){

	}
	else if (event.key === "s"){
		for (var i = 0; i < digit; i++){
			document.getElementById("" + (i + 1)).textContent = code[i];
		}
	}
	else if (event.key === "g"){
		generate();
	}
	else if (event.key === "c"){
		document.getElementById("1").textContent = document.getElementById("5").textContent;
	}
	*/
});


/* Creating places for the code with n digits
var codeHolder = document.createElement("table");
	codeHolder.className = "code";
	for (var i = 0; i < 6; i++){
		var place = document.createElement("th");
		codeHolder.appendChild(place);
		place.textContent = "_";
		place.id = i;
	}
*/