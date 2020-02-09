var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randdom = document.getElementById("random");

function generateRandom() {
	color1.value = random_bg_color();
	console.log(color1.value);
	color2.value = random_bg_color();
	setGradient();
}

function random_bg_color() {
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	return "rgb(" + x + "," + y + "," + z + ")";
}



function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randdom.addEventListener("click", generateRandom);