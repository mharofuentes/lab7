function init(){
//add your javascrip between these two lines of code
  var button= document.getElementById ('enterybutton');
  
  function showMeText(){
	  var textbook = document.getElementById('enteryinput');
	  document.getElementById('textoutput').innerHTML = textbook.value;
	  alert("Mitzi Haro: " + textbook.value);
  }
  
  button.addEventListener('click', showMeText);
  }
  
window.addEventListener('load', init);
