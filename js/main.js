document.addEventListener("DOMContentLoaded", function(event) { 

var img = document.getElementsByTagName('li');
for (var i = 0; i < img.length; i++){
	img[i].addEventListener('click', doSelect);
}
function doSelect(){
	if (this.classList.contains('select')) {
		this.classList.remove('select');
	} else {
	this.classList.add('select')
	}
    
var select = document.getElementsByClassName('select').length;
document.getElementsByClassName('demo')[0].innerHTML = "You have selected " + select + " images";
}
var atag = document.getElementsByTagName('a');

function removeElement() {
    this.parentNode.remove();
}

for (var y = 0; y < atag.length; y++){
	atag[y].addEventListener('click', removeElement);
}

var button1 = document.getElementsByClassName('btn2');

for (var i = 0; i < button1.length; i++){
	button1[i].addEventListener('click', addThis);

}

// console.log(button1);



function addThis(){
	var div = document.getElementsByTagName('div');
	// var prompt = window.prompt("What picture do you want to have?");
	div.innerHTML = '<img src="img/' + prompt + '.jpg">';
	console.log(document.getElementsByTagName('div'));
}


});