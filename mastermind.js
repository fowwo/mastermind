var playing = true;
var timeStart = -1;
var timeStop = -1;
var timer;

var code = [];
var guess = 0;


// The function to add leading zeros
Number.prototype.pad = function (size){
	var leadingZero = String(this);
	while (leadingZero.length < (size || 2)){
		leadingZero = "0" + leadingZero;
	}
	return leadingZero;
};
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
		clearInterval(timer);
		timeStop = new Date().getTime();
		playing = false;

		console.log(timeStop - timeStart);
		console.log(timef(timeStop - timeStart));
		document.getElementById("timer").textContent = timef(timeStop - timeStart);
		document.getElementById("timer").style.color = "#cdf";
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
		clearInterval(timer);
		timeStop = new Date().getTime();
		playing = false;
		document.getElementById("timer").textContent = timef(timeStop - timeStart);
		document.getElementById("timer").style.color = "#700";
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
}
function timef(input){
	// Converts the time from ms to a formatted look (#:##.###)
	return Math.floor(input / 60000) + ":" + Math.floor(input % 60000 / 1000).pad(2) + "." + (input % 1000).pad(3);
}
function generate(){
	// Generates a new code and restarts the game
	blank();
	timeStart = -1;
	timeStop = -1;
	document.getElementById("timer").textContent = "0:00";
	document.getElementById("timer").style.color = "rgb(87, 104, 138)";
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
	code = [];
	for (var i = 0; i < digit; i++){
		code.push(Math.floor(Math.random()*10));
		document.getElementById("" + i).style.color = "#cdf";
	}
	guess = 0;
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
  }

	*/
generate();

window.addEventListener("keyup", (event) => {
	if (playing){
		// To prevent things like Number(Spacebar) === 0...
		if (event.key === "0" || event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9" || event.key === "0"){
			if (timeStart === -1){
				timeStart = new Date().getTime();
				var i = 0;
				timer = setInterval(() => {
					i++;
					document.getElementById("timer").textContent = Math.floor(i / 60) + ":" + Math.floor(i % 60).pad(2);
				}, 1000);
			}
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