if(!document.getElementsByClassName){   
document.getElementsByClassName = function(className, element){   
var children = (element || document).getElementsByTagName('*');   
var elements = new Array();   
for (var i=0; i<children.length; i++){   
var child = children[i];   
var classNames = child.className.split(' ');   
for (var j=0; j<classNames.length; j++){   
if (classNames[j] == className){   
elements.push(child);   
break;   
}   
}   
}   
return elements;   
};   
}  
var x = -1;
// slide(x);

var dotFir = document.getElementsByClassName("dot")[0];
var dotSec = document.getElementsByClassName("dot")[1];
var dotThr = document.getElementsByClassName("dot")[2];

dotFir.onclick = function(){slide(x = 0)};
dotSec.onclick = function(){slide(x = 1)};
dotThr.onclick = function(){slide(x = 2)};

var numUp = document.getElementsByClassName("prev")[0];
var numDw = document.getElementsByClassName("next")[0];

numUp.onclick = function(){slide(x -= 1)};
numDw.onclick = function(){slide(x += 1)};

var slides = document.getElementsByClassName("slide-show");
var dotNum = document.getElementsByClassName("dot");

var slides = document.getElementsByClassName("slide-show");
var dotNum = document.getElementsByClassName("dot");

function slide(n){
	if (n > slides.length-1) {x = 0;}
	if (n < 0) {x = slides.length-1}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (var i = 0; i < dotNum.length; i++) {
		dotNum[i].className = dotNum[i].className.replace(" active","");
	}
	slides[x].style.display = "block";
	dotNum[x].className += " active";
}

function autoSlide(){
	for (var i = slides.length - 1; i >= 0; i--) {
		slides[i].style.display = "none";
	}
	for (var i = dotNum.length - 1; i >= 0; i--) {
		dotNum[i].className = dotNum[i].className.replace(" active","");
	}
	x++;
	if (x > slides.length-1) {x = 0}
	slides[x].style.display = "block";
	dotNum[x].className += " active";
	// setTimeout(autoSlide,2000);
	
	setTimeout(function(){ 
		setTimeout(autoSlide, 2000); 
	}, 2000); 
}

autoSlide(x);