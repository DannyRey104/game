//function for rolling die on button press
function rollDice(){
// die1 variable random number 1-6
    var die1 = Math.floor(Math.random() * 6) +1;
    //die2 vasriable random number 1-6
    var die2 = Math.floor(Math.random() * 6) +1;
    //the total sum of the random numbers added together from die1 and die2
    var sum = die1+die2;
  }
//shows on screen what the number from die1 is
{document.write("die1 = " + die1);
//line break to clean up text
  document.write("br/")
}
//shows on screen what the number from die2 is
{document.write("die2 = " + die2);
//line break to clean up text
document.write("br/")
}
//shows on screen what the sum of the 2 die are added together on screen
{document.write("sum = " + sum);
//line break to clean up text
document.write("br/")
}
//if statement saying that if you roll a 7 or 11 first roll, then you win the game.
if (sum == 7 || sum == 11);
//shows on screen "you win" if the if condition is met.
{document.write("You Win!.")
//line break to clean up text
document.write("br/");
}
//else if satement where if you get double and if the die equal an even number, you roll again.  
else if (die1 == die2 && die1%2 == 0);
//text that shows on screen if you land on doubles 
  {docuent.write("You got doubles. Roll again and don't get 7 or 11!");
  //line break to clean up text
  docuent.write("br/");
} 
  
// else statement that if you roll again and you then get a sum of 7 you win and anything else would be a loss
else {
  (sum == 7);
  //text that shows on screen if you get a sum of 7 you win
{docuent.write("You Win!");
//line break to clean up text
docuent.write("br/");
}
}
//else statement that if you your sum is anything other than 7, you lose
else {
  (sum == 1, 2, 3, 4, 5, 6, 8, 9. 10, 11, 12);
  //text that shows on screen saying you lose
  {docuent.write("You Lose!");
  //line break to clean up text
  docuent.write("br/");
  }
}
//end of code
