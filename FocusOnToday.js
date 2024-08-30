


const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressValue = document.querySelector('.progress-value')
const progressBar = document.querySelector('.progress-bar')

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allFieldsFilled = [...inputFields].every((input) => {
            return input.value
        })
        if(allFieldsFilled){ 
            checkbox.parentElement.classList.toggle('completed')
             progressValue.style.width = '33.33%'
                
        }
        else{
            progressBar.classList.add('show-error')
        }
        
    })
    
   
})

inputFields.forEach((input) => {
    input.addEventListener('focus', () => {
        progressBar.classList.remove('show-error')
    })
})
gsap.from('.main-container img', {
    opacity: 0,
    y: -150,
    delay: 1,
    stagger: 1
})




