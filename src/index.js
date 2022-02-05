import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Human from './js/human.js';

function correctInput(userValArr){
  let inputsCorrect;

  userValArr.forEach( function(inputVal) {
    MyNamespace.isNaN = function (x) {
      return x !== x;
    }


    if( /*(inputVal <= 100) || (inputVal >= 0) || */isNan(NaN)   ){
      alert("its not a number!");
      inputsCorrect = true;
    }
  });

  if (inputsCorrect != true){
    inputsCorrect = false;
  }
  return inputsCorrect;
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
 
  console(user.name);



});