const userInput = document.querySelector('.input-number')
const submitBtn = document.querySelector('.submit-Btn')
const startBtn = document.querySelector('.start-game-Btn')
const form = document.querySelector('form')
const UserResult = document.querySelector('.userResult')
const allguesses = document.querySelector('.all-guesses')
let userAttempts = document.querySelector('.user-Attempts')
const userGuesses = []

userAttempts = 1
let maxAttempts = 5




let randomNumbers = Math.round(Math.random() * 100)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInputValue = parseInt(userInput.value)
    console.log(userInputValue)
    
    if(userInputValue < randomNumbers && userAttempts < maxAttempts ){
        maxAttempts--;
        UserResult.innerText = `Too Low! Attempts left: ${maxAttempts}`;
        
       
    } 
      else if(userInputValue > randomNumbers){

        UserResult.innerText = `Too High! Attempts left: ${maxAttempts}` ;
        
        
    }
     else {
        UserResult.innerText = 'CONGRATULATION, YOU WIN'
        startBtn.disabled = false 
        submitBtn.disabled = true
        
        

    }
    if(maxAttempts == 0){
        UserResult.innerText = `You Lost! random number is: ${randomNumbers}`
        startBtn.disabled = false
        submitBtn.disabled = true
   
    

   }
   
    
    
    
    startBtn.addEventListener('click', () => {
        randomNumbers = Math.round(Math.random() * 100)
        startBtn.disabled = true 
        submitBtn.disabled = false
        UserResult.innerText = ''
        allguesses.innerText = ''



    })
    
    userGuesses.push(userInputValue)
    allguesses.innerText = 'Your Guesses: ' + userGuesses.join(', ')
    
    form.reset()



    


})
