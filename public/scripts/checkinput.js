// This script disables the input dialog when conditions are unmet. IE. You have to input 3 to n digits to be able to run.
function checkInput() {

    const button = document.getElementById('submit-btn')
    const input = document.getElementById('args-input')    
    const split = input.value.split(' ').filter(n => n)
    // If there are 3 or more numbers, enable the submit button
    let isvalid = true 
    split.forEach(n => {
        // This checks if item is a number
        if (!/^\d*$/.test(+n)) {
            isvalid = false
        }
    })

    if (split.length < 3) {
        isvalid = false
    }

    if (isvalid) {
        button.disabled = false
    } else {
        button.disabled = true
    }

}