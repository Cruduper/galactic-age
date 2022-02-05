import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Human from './js/human.js';

function correctInput(userValArr){
  let correctInputs = true;
  userValArr.forEach( function(inputVal) {
    if( (inputVal > 100) || (inputVal < 0) || Number.isNaN(inputVal) ){
      correctInputs = false;
    }
  });

  return correctInputs;
}

$("#submit").click( function(){
  //alert("we're in the .click function!");
  const userInputs = [5];
  const nameVar = $("#name").val();
  userInputs[0] = parseInt( $("#age").val() );
  const smokeVar = $("#smoke").val();
  userInputs[1] = parseInt( $("#activity").val() );
  userInputs[2] = parseInt( $("#combat").val() );
  userInputs[3] = parseInt( $("#intelligence").val() );
  userInputs[4] = parseInt( $("#rad").val() );

  if ( correctInput( userInputs) ){
    const user = new Human(nameVar, userInputs[0], smokeVar, userInputs[1], userInputs[2], userInputs[3], userInputs[4]);
    //$("userInput").hide();
  } else {
    alert("You entered an incorrect value, try again!");
  }
});