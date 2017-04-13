var list = document.getElementById("content");
var upNum = document.getElementsByClassName("prev")[0];
var dwNum = document.getElementsByClassName("next")[0];
var dotNum = document.getElementsByClassName("dot");
var dotFir = dotNum[0];
var dotSec = dotNum[1];
var dotThr = dotNum[2];

function getStyle(element,attr) {
	if(element.currentStyle) {
		return element.currentStyle[attr];
	} else {
		return getComputedStyle(element,false)[attr];
	}
}

upNum.onclick = function(){slide(-1);};
dwNum.onclick = function(){slide(1);};
dotFir.onclick = function(){state(0)};
dotSec.onclick = function(){state(1)};
dotThr.onclick = function(){state(2)};

function slide(n){
	var x = parseInt(getStyle(list,'left'))
	for (var i = dotNum.length - 1; i >= 0; i--) {
		dotNum[i].className = 'dot';
	}
	if (x-n < -2000) {x = 1000}
	else if(x-n > 0) {x = -3000}
	list.style.left = x - n*1000 +'px';
	dotNum[parseInt(getStyle(list,'left'))/-1000].className += ' active';
}

function state(n){
	if (dotNum[n].className == 'dot') {
	for (var i = dotNum.length - 1; i >= 0; i--) {
		dotNum[i].className = 'dot';
	}
	list.style.left = n*-1000 +'px';
	dotNum[n].className += ' active';
	}
	else {return}
}