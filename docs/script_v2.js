
const splitFlapClasses = document.getElementsByClassName('splitflap');

const speed_ms = 20;
const chance = 0.95;

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

/*
function nextCharacter(num){
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!8182510647$%^&*()-_+=[]{}:<>?/| ';
	// console.log(num%characters.length)
	return characters[num%(characters.length)];
}
*/

function nextCharacter(s,d){
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$%^&*’()_+-=[]{}|/?,.<>;:# \n*@:,-';
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
}



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
		sfc.setAttribute("num",0);
		sfc.innerText = "A".repeat(text.length);
	}

}
setup();

function replaceAt(str, index, replacement) {
	// console.log(replacement);
	if (index >= str.length) return str; // Index out of bounds
	return str.substr(0, index) + replacement + str.substr(index + 1);
}

function transitionText(){
	// console.log("transitionText");

	var result = true;
	for (sfc of splitFlapClasses) {


		var text = sfc.getAttribute("text");
		var num = parseInt(sfc.getAttribute("num"));
		var curText = sfc.innerText;
		
		
		// var curText = sfc.innerHTML.replace('<b>', '').replace('</b>', '');
		// console.log(sfc.innerHTML);

		// console.log(curText);
		// console.log(text);
		if (curText == text)
		{
			// console.log('true');
			sfc.classList.add("line_done");
			continue;
		}
		else
		{
			result = false;
			// console.log('false');
		}

		// console.log(curText);
		// console.log(text);

		// if (text == '# Justin Garza')
		// {
		// 	console.log(curText);
		// 	console.log(text);
		// }

		if (text == "* 📧 JGarza9788@gmail.com")
		{
			console.log(curText);
			console.log(text);
		}

		for (let i = 0; i < text.length; i++) 
		{
			if (curText[i] == text[i])
			{
				continue;
			}

			
			/*
			if (Math.random() > chance)
			{
				curText = replaceAt(curText,i,text[i]);
			}
			else
			{
				
				// replace with a random character
				// curText = replaceAt(curText,i, getRandomString(1) );

				//replace with the next character
				curText = replaceAt(curText,i, nextCharacter(curText[i]) );

			}
			*/

			curText = replaceAt(curText,i, nextCharacter(curText[i],text[i]) );

			num += 1;
			sfc.setAttribute("num",num);
			if (num > 62*text.length)
			{
				curText = text;
			}
		}




		// console.log(curText);
		sfc.innerText = curText;
		// sfc.innerHTML = curText;

	}

	return result;
}
transitionText();

function runUntilTrue() {
	// Simulate a condition that might eventually return true
	var result = transitionText(); // Adjust the probability as needed
	// console.log(result);

	if (result) {
		// console.log("Function returned true, stopping.");
	} else {
		// console.log("Function returned false, running again after 0.5 seconds.");
		setTimeout(runUntilTrue, speed_ms); // Wait for 500 milliseconds before trying again
	}
}
runUntilTrue();

