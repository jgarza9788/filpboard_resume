
const splitFlapClasses = document.getElementsByClassName('splitflap');
var chars = null;

const speed_ms = 0;
// const chance = 0.95;

function getRandomString(length){

  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!8182510647$%^&*()-_+=[]{}:<>?/| ';
//   var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω.,!?@#$%^&*()-_=+[]{};:|/<>`~€£¥₹©®™'
//   var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω.,!?@#$%^&*()-_=+[]{};:|/`~€£¥₹©®™'

  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
 }
 return result;
}

/*
function nextCharacter(s){
    return s.replace(/([a-zA-Z0-9])[^a-zA-Z]*$/, 
		function(a){

				if ( !isNaN(parseInt(a))  )
				{
					return ((parseInt(a) + 1)%10).toString();
				}

				if (a == 'z')
				{
					return 'A';
				}
				else if (a == 'Z')
				{
					return '0';
				}
				else if (a == '9')
				{
					return ' ';
				}


				var c= a.charCodeAt(0);
				switch(c){
					case 90: return 'A';
					case 122: return 'a';
					default: return String.fromCharCode(++c);
				}
			}
	);
}
*/


function nextCharacter(num){
	var characters = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@%*[]{}_-.’';
	// console.log(num%characters.length)
	return characters[num%(characters.length)];
}

/*
function nextCharacter(s,d){
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!8182510647$%^&*()_+-=|<>?/;:[]{} 📞📧';
	// console.log(num%characters.length)
	// return characters[num%(characters.length)];

	for (var i = 0; i < characters.length ;i++)
	{
		if (s == characters[i])
		{
			return characters[i+1];
		}
	}
	return d;

	// return characters[num%characters.length];
}
*/


// for (var i = 0; i < 124;i++)
// {
// 	console.log(nextCharacter(i));
// }


/*
console.log(nextCharacter(0))
console.log(nextCharacter(10))
console.log(nextCharacter(20))
console.log(nextCharacter(40))
console.log(nextCharacter(80))
console.log(nextCharacter(160))
console.log(nextCharacter(94))
console.log(nextCharacter(95))
console.log(nextCharacter(96))
*/

//test
/*
console.log(nextCharacter('A'));
console.log(nextCharacter('a'));
console.log(nextCharacter('Z'));
console.log(nextCharacter('z'));
console.log(nextCharacter('0'));
console.log(nextCharacter('9'));
console.log(nextCharacter('|'));
*/

/*
function setup(){
	for (sfc of splitFlapClasses) {

		var text = sfc.getAttribute("text");
		sfc.innerText = getRandomString(text.length);

	}
}
setup();
*/

function setup(){
	for (sfc of splitFlapClasses) {
		var text = sfc.getAttribute("text");

		for (let i = 0; i < text.length; i++) 
		{
			var char = document.createElement("char");
			char.innerText = " ";
			char.setAttribute("char",text[i]);
			char.setAttribute("num",0);

			sfc.appendChild(char);

			// sfc.setAttribute("num",0);
			// sfc.innerText = "A".repeat(text.length);
		}
		
	}
}
setup();

// console.log(chars);

function replaceAt(str, index, replacement) {
	// console.log(replacement);
	if (index >= str.length) return str; // Index out of bounds
	return str.substr(0, index) + replacement + str.substr(index + 1);
}

function transitionText(){
	// console.log("transitionText");
	chars = document.getElementsByTagName('char');
	

	var result = true;
	var count = 0;
	for (c of chars) {

		var char = c.getAttribute("char");
		var iText = c.innerText;
		var num = parseInt(c.getAttribute("num"));
		num += 1;

		if (char == iText)
		{
			c.classList.add("char-done");
			continue;
		}

		result = false;
		count += 1;

		if (count > 50)
		{
			break;
		}

		if (num < 75)
		{
			c.innerText = nextCharacter(num);
		}
		else
		{
			c.innerText = char;
		}
		
		c.setAttribute("num",num);

	} 
	

	return result;
}
// transitionText();

function runUntilTrue() {
	// Simulate a condition that might eventually return true
	var result = transitionText(); // Adjust the probability as needed
	// console.log(result);

	if (result) {
		console.log("Function returned true, stopping.");
	} else {
		console.log("Function returned false, running again after 0.5 seconds.");
		setTimeout(runUntilTrue, speed_ms); // Wait for 500 milliseconds before trying again
	}
}
runUntilTrue();

