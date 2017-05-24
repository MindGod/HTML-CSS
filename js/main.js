var img = document.getElementsByTagName('li');
for (var i = 0; i < img.length; i++){
	img[i].addEventListener('click', doSelect);
}
function doSelect(){
	this.classList.add('select');
}
var select = document.getElementsByClassName('select');
var count = select.length;
console.log(select);
// document.write('You have selected ' + count + ' images');
