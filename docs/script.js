

String.prototype.replaceAt=function(index, replacement) {
  let left;
  let right;

  if(this.substr(0,index) == undefined){
    left = "";
  }
  else
  {
    left = this.substr(0,index);
  }

  if(this.substr(index + replacement.length) == undefined ){
    right="";
  }
  else{
    right = this.substr(index + replacement.length);
  }
  return left + replacement + right;
}

const splitFlapClasses = document.getElementsByClassName('splitflap');

const speed_ms = 50;
const chance = 0.90;

function getRandomString(length){

  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!8182510647$%^&*()';

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
  if (index >= str.length) return str; // Index out of bounds
  return str.substr(0, index) + replacement + str.substr(index + 1);
}

function transitionText(){
  console.log("transitionText");

  var result = true;
  for (sfc of splitFlapClasses) {


    var text = sfc.getAttribute("text");
    var curText = sfc.innerText


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
        curText = replaceAt(curText,i,getRandomString(1));
        // console.log(curText);
      }
    }

    console.log(curText);
    sfc.innerText = curText;

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

// setTimeout(changeText,5000);

/*
function changeText(){
  let beforeText;
  let afterText;

  console.log(curIndex);
  if(curIndex >= 0){
    beforeText = texts[curIndex];
    if(curIndex == texts.length-1){
      afterText = texts[0];
    }
    else{
      afterText = texts[curIndex+1];
    }
  }
  else
  {
    beforeText = splitflapDiv.innerText;
    afterText = texts[0];
  }
  updateIndex();
  transitionText(beforeText, afterText);
}
*/

/*
function transitionText(element, startText, endText){
  console.log("Start text : "+startText);
  console.log("End text : "+endText);

  curText = startText;
  if(endText.length < curText.length){
    let diff = curText.length-endText.length;
    curEndText = endText+" ".repeat(diff);
  }
  else
  {
    curEndText = endText;
  }
  transitionTextTick(element);
}

function transitionTextTick(element){
  let endLength;
  let startLength;

  // console.log(curText+" length : "+curText.length);
  // console.log(curEndText+" length : "+curEndText.length);
  
  if(curText.length == null){
    startLength=0;
  }
  else
  {
    startLength = curText.length;
  }
  if(curEndText.length == null){
    endLength=0;
  }
  else
  {
    endLength = curEndText.length;
  }
  var longestLength = (startLength >= endLength ? startLength : endLength);

  for (var i = 0; i < longestLength; i++) {
    let curCharCode = curText.charCodeAt(i);

    if(curCharCode == undefined || isNaN(curCharCode))
    {
      curCharCode = String.fromCharCode(32);
      curText = curText.replaceAt(i,curCharCode);
    }
    else
    {
      if(curText.charAt(i)!=curEndText.charAt(i)){
        if(curCharCode >= 126 || curCharCode < 32)
        {          
          curCharCode = 32;
        }
        else{
          curCharCode ++;
        }
        curText = curText.replaceAt(i,String.fromCharCode(curCharCode));
      }
    }    
  }

  if(curDoneIterations >= nbJumpIterations || curText.trim().localeCompare(curEndText.trim()) == 0 ){
    element.innerText=curText;

    if(curText.trim().localeCompare(curEndText.trim()) != 0)
    {
      setTimeout(transitionTextTick, 60);
    }
    else
    {
      // setTimeout(changeText,1500);
    }
    curDoneIterations = 0;
  }
  else
  {
    curDoneIterations++;
    transitionTextTick();
  }
}

function updateIndex(){
  if(curIndex < texts.length-1)
  {
    curIndex++;
  }
  else
  {
    curIndex = 0;
  }
}

*/