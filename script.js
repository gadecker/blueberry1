function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;


function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}

function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}

function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}

}

dragElement(document.getElementById('blueberry1'));
dragElement(document.getElementById('blueberry2'));
dragElement(document.getElementById('blueberry3'));
dragElement(document.getElementById('blueberry4'));
dragElement(document.getElementById('blueberry5'));
dragElement(document.getElementById('blueberry6'));
dragElement(document.getElementById('blueberry8'));
dragElement(document.getElementById('blueberry9'));
dragElement(document.getElementById('blueberry10'));
dragElement(document.getElementById('blueberry11'));
dragElement(document.getElementById('blueberry12'));
dragElement(document.getElementById('blueberry13'));