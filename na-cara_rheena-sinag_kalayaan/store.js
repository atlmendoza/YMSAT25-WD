let bal=50;
document.getElementById("balance").innerHTML = bal;

// Function for Buying Return Powerup 
function returnpu(){
  let rpu = prompt("Confirm to buy the Return Powerup for 10 coins?", "yes / no");
  if (rpu=='yes'){
    alert("Thank you for purchasing the Return Powerup. Please check your balance.");
    bal=bal-10;
          if (bal>=10){
    document.getElementById("balance").innerHTML = bal;
      } else if (bal<10){
        alert("Invalid Purchase. Please check your balance again and go back to the store.")
      }
  } else if (rpu=='no') {
    alert("Back to store");
  }
}

// Function for Buying Foresee Powerup 
function foresee(){
  let fpu = prompt("Confirm to buy the Foresee Powerup for 10 coins?", "yes / no");
    if (fpu=='yes'){
    alert("Thank you for purchasing the Foresee Powerup. Please check your balance.");
      bal=bal-10;
          if (bal>=10){
    document.getElementById("balance").innerHTML = bal;
      } else if (bal<10){
        alert("Invalid Purchase. Please check your balance again and go back to the store.")
      }
  } else if (fpu=='no') {
    alert("Back to store");
  }
}

// Function for buying double coins powerup
function DoubCoin(){
  let dcpu = prompt("Confirm to buy the Double Coins Powerup for 20 coins?", "yes / no");
    if (dcpu=='yes'){
    alert("Thank you for purchasing the Double Coins Powerup. Please check your balance.");
      bal=bal-20;
          if (bal>=20){
    document.getElementById("balance").innerHTML = bal;
      } else if (bal<20){
        alert("Invalid Purchase. Please check your balance again and go back to the store.")
      }
  } else if (dcpu=='no') {
    alert("Back to store");
  }
}

// function for buying better option hint powerup 
function betteropt(){
  let bopu = prompt("Confirm to buy the Better Option Hint Powerup for 15 coins?", "yes / no");
    if (bopu=="yes"){
    alert("Thank you for purchasing the Better Option Hint Powerup. Please check your balance.");
    bal=bal-15;
          if (bal>=15){
    document.getElementById("balance").innerHTML = bal;
      } else if (bal<15){
        alert("Invalid Purchase. Please check your balance again and go back to the store.")
      }
  } else if (bopu=='no') {
    alert("Back to store");
  }
}


//function for buying eliminate one option powerup
function elimone(){
  let eopu = prompt("Confirm to buy the Eliminate One Option Powerup for 20 coins?", "yes / no");
    if (eopu=='yes'){
    alert("Thank you for purchasing the Eliminate One Option Powerup. Please check your balance.");
      bal=bal-20;
      if (bal>=20){
    document.getElementById("balance").innerHTML = bal;
      } else if (bal<20){
        alert("Invalid Purchase. Please check your balance again and go back to the store.")
      }
  } else if (eopu=='no') {
    alert("Back to store");
  }
}