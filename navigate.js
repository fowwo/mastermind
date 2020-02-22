var tabs = {
	"index.html": "Play",
	"leaderboard.html": "Leaderboard",
	"#settings": "Settings"
}
var subtabs = {
	"mastermind.html": "Mastermind"
}

var div = document.createElement("div");
var subdiv = document.createElement("div");
div.className = "tab";
subdiv.className = "subtab";

var url = window.location.pathname.split("/");
url = url[url.length - 1];
for (var key of Object.keys(tabs)) {
	var a = document.createElement("a");
	a.href = key;
	a.innerHTML = tabs[key];
    if (key == url){
		a.className = "active";
	}
	div.appendChild(a);
}
for (var key of Object.keys(subtabs)) {
	var a = document.createElement("a");
	a.href = key;
	a.innerHTML = subtabs[key];
    if (key == url){
		a.className = "active";
	}
	subdiv.appendChild(a);
}
document.body.appendChild(div);
document.body.appendChild(subdiv);