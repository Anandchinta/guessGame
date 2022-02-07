let gameresult=document.getElementById("gameresult");
let userinput=document.getElementById("userinput");
let randomNumber=Math.ceil(Math.random()*100);

userinput.addEventListener("keydown",function(event){
    let guessedNumber=parseInt(userinput.value);
    if (event.key==="Enter"){
        if (guessedNumber>randomNumber){
              gameresult.textContent="Too High! Try Again";
              gameresult.style.color="red";
        
        }
        else if (guessedNumber<randomNumber){
            gameresult.textContent="Too Low! Try Again";
            gameresult.style.color="red" ;
       
        }
        else if (guessedNumber===randomNumber){
            gameresult.textContent="Congratulations! You Got it";
            gameresult.style.color="Green" ;
        
        }
      
    }

})

function checkguess(){
    let guessedNumber=parseInt(userinput.value);

    if (guessedNumber>randomNumber){
        gameresult.textContent="Too High! Try Again";
        gameresult.style.color="red";
    }
    else if (guessedNumber<randomNumber){
       gameresult.textContent="Too Low! Try Again";
        gameresult.style.color="red" ;
    }
    else if (guessedNumber===randomNumber){
        gameresult.textContent="Congratulations! You Got it";
        gameresult.style.color="Green" ;
    }
}

