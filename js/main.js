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





