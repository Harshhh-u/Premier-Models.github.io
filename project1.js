const count = document.querySelector('.display')
const minusBtn = document.querySelector('.minus')
const plusBtn = document.querySelector('.plus')
const changeBy = document.querySelector('.input')
const reset = document.querySelector('.resetBtn')
const invalidValue = document.querySelector('.input')

 minusBtn.addEventListener('click', () =>
{
    const countValue = parseInt(count.innerText)
    console.log(countValue)
    const changeByValue = parseInt(changeBy.value) 
    count.innerText = countValue - changeByValue
})

plusBtn.addEventListener('click', () =>
    {
    const countValue = parseInt(count.innerText)
    console.log(countValue)
    const changeByValue = parseInt(changeBy.value) 
    count.innerText = countValue + changeByValue
    })
const changeByValue = parseInt(changeBy.value) 

reset.addEventListener('click', () => {
    count.innerText = 0;
    changeBy.value = 0;
    console.log('Reset button is clicked')
})

plusBtn.addEventListener('click', () => {
    if(changeBy.value == 00 && changeBy.value == 0) {
        alert("please enter valid range number")
    }
})
minusBtn.addEventListener('click', () => {
    if(changeBy.value == 00 && changeBy.value == 0) {
        alert("please enter valid range number")
    }
})

