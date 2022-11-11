// This script disables the input dialog when conditions are unmet. IE. You have to input 3 to n digits to be able to run.
function checkInput() {
    // Get the dom elements 
    const button = document.getElementById('submit-btn')
    const input = document.getElementById('args-input')    
    // Get the value from the input
    const split = input.value.split(' ').filter(n => n)
    // Start with a valid state
    let isvalid = true 
    // This checks if the input contains valid characters 
    split.forEach(n => {
        if (!/^\d*$/.test(+n)) {
            isvalid = false
        }
    })
    // At least 3 numbers are required to process
    if (split.length < 3) {
        isvalid = false
    }
    // Set the button state accordinly
    if (isvalid) {
        button.disabled = false
    } else {
        button.disabled = true
    }
}