
const results=document.getElementById("results")
const guessit=document.getElementById("guessit")
const submited=document.getElementById("submited")
const randomNumber=Math.floor((Math.random() * 10) + 1) 
console.log
function answerCheck(){
    var userGuess=guessit.value 

        if(userGuess > randomNumber){
        results.innerText="Your Guess is too high, guess lower! "; 
        results.style.color=("red")                                
    }        
     else if(userGuess < randomNumber){
        results.innerText="Your guess is too low, try a greater number";  
        results.style.color=("red")                                       
    }                                                                           
    else {
        results.innerText="Your Guess is Correct, Good job!"; 
        results.style.color=("green")                
    }                        
}
 
submited.addEventListener("click",answerCheck);