// JavaScript Document
window.
{
	const addown = document.getElementById('adminus');
	const adup = document.getElementById('adplus');
	const adtext = document.getElementById('adout');
	
	addown.addEventListener('click', (event)=>{
		if (adtext.value >=1) {
			adtext.value--;
		}
	});
	
	adup.addEventListener('click', (event) => {
		if (adtext.value =<20) {
			adtext.value = adtext + 1;
		}
	});
	
	document.getElementById("adult").innerHTML = adtext;
}