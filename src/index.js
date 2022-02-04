import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Human from './js/human.js';

function correctInput(userValArr){
  inputsCorrect = true;
  userValArr.forEach((inputVal) =>{
    if( (inputVal >100) || (inputVal < 0) ){
      inputsCorrect = false;
    }
    return inputsCorrect;
  });

}

$("#submit").click( function(){
  alert("we're in the .click function!");
  const userInputs = [5];
  nameVar = $("#name").val();
  userInputs[0] = $("#age").val();
  smokeVar = $("#smoke").val();
  userInputs[1] = $("#activity").val();
  userInputs[2] = $("#combat").val();
  userInputs[3] = $("#intelligence").val();
  userInputs[4] = $("#rad").val();

  if ( correctInput( userInputs) ){
    user = new Human(nameVar, userInputs[0], smokeVar, userInputs[1], userInputs[2], userInputs[3], userInputs[4]);
    //$("userInput").hide();
  } else {
    alert("You entered an incorrect value, try again!");
  }
 



});