var tabs = [
	{
		url: "index.html",
		name: "Play",
		subtabs: [
			{
				url: "mastermind.html",
				name: "Mastermind"
			}
		]
	},
	{
		url: "leaderboard.html",
		name: "Leaderboard",
		subtabs: [
			{
				url: "#mastermind",
				name: "Mastermind"
			}
		]
	},
	{
		url: "#settings",
		name: "Settings",
		subtabs: []
	}
]

var div = document.createElement("div");
var subdiv = document.createElement("div");
div.className = "tab";
subdiv.className = "subtab";

var url = window.location.pathname.split("/");
url = url[url.length - 1];

for (var tab of tabs){
	var a = document.createElement("a");
	a.href = tab.url;
	a.innerHTML = tab.name;
    if (tab.url == url){
		a.className = "active";
		for (var subtab of tab.subtabs){
			var b = document.createElement("a");
			b.href = subtab.url;
			b.innerHTML = subtab.name;
			if (subtab.url == url){
				b.className = "active";
			}
			subdiv.appendChild(b);
		}
	}
	div.appendChild(a);
}
document.body.appendChild(div);
document.body.appendChild(subdiv);
