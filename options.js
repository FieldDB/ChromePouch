var bg = chrome.extension.getBackgroundPage();

function replTo(){
	console.log("pressed replfrom button");
	var text = document.getElementById("replto").value;
	bg.replTo(text);
}

function replFrom(){
	console.log("pressed replfrom button");
	var text = document.getElementById("replfrom").value;
	bg.replFrom(text);
}

document.querySelector('#repltobutton').addEventListener('click', replTo);
document.querySelector('#replfrombutton').addEventListener('click', replFrom);

