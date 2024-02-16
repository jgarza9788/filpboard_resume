

const splitFlapClasses = document.getElementsByClassName('splitflap');

const speed_ms = 50;
const chance = 0.90;

function getRandomString(length){

  var result = ''
  // var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!8182510647$%^&*(),./;[]<>?:{}+=-_';
  var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω.,!?@#$%^&*()-_=+[]{};:|/<>`~€£¥₹©®™'
//   var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω.,!?@#$%^&*()-_=+[]{};:|/`~€£¥₹©®™'

  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
 }
 return result;
}
	
function setup(){
	for (sfc of splitFlapClasses) {

		var text = sfc.getAttribute("text");
		sfc.innerText = getRandomString(text.length);

	}
}
setup();

function replaceAt(str, index, replacement) {
	// console.log(replacement);
	if (index >= str.length) return str; // Index out of bounds
	return str.substr(0, index) + replacement + str.substr(index + 1);
}

function transitionText(){
	console.log("transitionText");

	var result = true;
	for (sfc of splitFlapClasses) {


		var text = sfc.getAttribute("text");
		var curText = sfc.innerText;
		
		
		// var curText = sfc.innerHTML.replace('<b>', '').replace('</b>', '');
		// console.log(sfc.innerHTML);

		console.log(curText);
		console.log(text);
		if (curText == text)
		{
		console.log('true');
		sfc.classList.add("line_done");
		continue;
		}
		else
		{
		result = false;
		console.log('false');
		}


		for (let i = 0; i < text.length; i++) 
		{
			if (curText[i] == text[i])
			{
				continue;
			}
			
			if (Math.random() > chance)
			{
				curText = replaceAt(curText,i,text[i]);
			}
			else
			{
				// console.log(curText);
				curText = replaceAt(curText,i, getRandomString(1) );
				// curText = replaceAt(curText,i, getRandomString(1) );
				// console.log(curText);
			}
		}

		console.log(curText);
		sfc.innerText = curText;
		// sfc.innerHTML = curText;

	}

	return result;
}
transitionText();

function runUntilTrue() {
	// Simulate a condition that might eventually return true
	var result = transitionText(); // Adjust the probability as needed
	console.log(result);

	if (result) {
		console.log("Function returned true, stopping.");
	} else {
		console.log("Function returned false, running again after 0.5 seconds.");
		setTimeout(runUntilTrue, speed_ms); // Wait for 500 milliseconds before trying again
	}
}
runUntilTrue();
