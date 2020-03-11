"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Meadow Green
   Date:   3-11-20
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
window.onload = init;

function init(){
    var stars = document.querySelectorAll("span#stars img");
    for(var i =  0; i < stars.length; i++){
        stars[i].style.cursor = "pointer";
        stars[i].addEventListener("mouseenter", lightStars);
    }
    document.getElementById("comment").addEventListener("keyup", updateCount);
}

function lightStars(e){
    var starNumber = e.target.alt;
    var stars = document.querySelectorAll("span#stars img");
    /*steps 6c - 6e
    for(var i = 0; i < stars; i++){
        stars[i]
    }

    for(var i = 0; i < stars){
        stars[i]
    }
    
   document.getElementById("rating") = starNumber stars; 

   */

   e.target.addEventListener("mouseleave", turnOffStars);
   //step 6g  e.target.addEventListener("mouseleave", function(){turnOffStars()});

}

function turnOffStars(){
    var stars = document.querySelectorAll("span#stars img");
    for(var i = 0; i < stars.length; i++){
        // step 7b star[i] = 
        document.getElementById("rating").innerHTML = "";
    }
}

function updateCount(){
    var commentText = document.getElementById("comment"); 
    var charCount = countCharacters(commentText);
    var wordCount = document.getElementById("wordCount");
    wordCount = charCount + "/1000";
    if(charCount > 1000){
        wordCount.style.color = 'white';
        wordCount.style.backgroundColor = 'red';
    }else{
        wordCount.style.color = 'black';
        wordCount.style.backgroundColor = 'white';
    }
}


  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   