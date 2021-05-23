var buttonClick = document.querySelector("#buttonClick");
var count = 0;
var delay = 500;

buttonClick.addEventListener("mouseover",()=>setTimeout(change,delay));

var btn = document.getElementById("buttonClick");

btn.onclick = function(){
	count++;
	
	if(count==3){
		alert("Level 2")
		delay = delay-100;
	}
	else if(count==6){
		alert("Level 3")
		delay = delay-100;
	}
	else if(count==9){
		alert("Level 4")
		delay = delay-100;
	}
	else if(count==12){
		alert("Level 5")
		delay = delay-100;
	}
	else if(count==15){
		alert("Level 6")
		delay = delay-100;
	}
}


function change()
{
	let i = Math.floor(Math.random()*300)+1;
	let j = Math.floor(Math.random()*300)+1;
    buttonClick.style.left = i + "px";
    buttonClick.style.top = j + "px";
	
};