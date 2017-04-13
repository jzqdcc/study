var myBtn = document.getElementById('btn');
var myModal = document.getElementById('modal');
var myClose = document.getElementById('close');

myBtn.onclick = function() {
	myModal.style.display = 'block';
}

myClose.onclick = function() {
	myModal.style.display = 'none';
}

window.onclick = function(event) {
	if (event.target == myModal) {
		myModal.style.display = 'none';
	}
}