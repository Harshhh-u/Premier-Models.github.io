const fullDarkModeCheckbox = document.querySelector('#full-dark-mode')
const containedDarkModeCheckbox = document.querySelector('#contained-dark-mode')
const container = document.querySelector('.container')
const isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckbox'))
const isContainedDarkMode = JSON.parse(localStorage.getItem('containedDarkModeCheckbox'))

if(isFullDarkMode){
    fullDarkModeCheckbox.checked = true
}
if(isContainedDarkMode){
    containedDarkModeCheckbox.checked = true
}
changeContainedDarkMode()
changeFullDarkMode()

function changeFullDarkMode(){
    if(fullDarkModeCheckbox.checked){
        document.body.classList.add('dark')
        document.getElementById('contained-dark-mode').style = 
        localStorage.setItem('fullDarkModeCheckbox', true)
    }
    else{
        document.body.classList.remove('dark')
        localStorage.setItem('fullDarkModeCheckbox', false)
    }
    
}

fullDarkModeCheckbox.addEventListener('change', () => {
    changeFullDarkMode()
})

containedDarkModeCheckbox.addEventListener('change', () => {
    if(containedDarkModeCheckbox.checked){
        container.classList.add('dark')
        localStorage.setItem('containedDarkModeCheckbox', true)
    }
    else{
        container.classList.remove('dark')
        localStorage.setItem('containedDarkModeCheckbox', false)
    }

})
function changeContainedDarkMode(){
    if(containedDarkModeCheckbox.checked){
        container.classList.add('dark')
        localStorage.setItem('containedDarkModeCheckbox', true)
    }
    else{
        container.classList.remove('dark')
        localStorage.setItem('containedDarkModeCheckbox', false)
    }
}