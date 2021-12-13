import "./style.css";
import myName from "./myName";
import Icon from "./icon.svg";

function component() {
	const element = document.createElement("div");

	element.innerHTML = myName("Kris");
	element.classList.add("hello");

	const myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());
