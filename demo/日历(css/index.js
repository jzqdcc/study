var month = document.getElementsByTagName('div');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var index = 2;
slide(0);

function slide(n){
	for (var i = month.length - 1; i >= 0; i--) {
		month[i].style.display = 'none';
	}
	index += n
	if (index > 11) {index = 0}
	else if (index < 0) {index = 11}
	month[index].style.display = 'block';
}

prev.onclick = function(){slide(-1)};
next.onclick = function(){slide(1)};