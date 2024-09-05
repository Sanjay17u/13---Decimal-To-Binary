const decimalInput = document.querySelector('.decimal__Number')
const convertButton  = document.querySelector('.convert')
const output = document.querySelector('.output')

convertButton.addEventListener('click', () => {
   let decimalNumber = parseInt(decimalInput.value)

    let binary = '' 

    while(decimalNumber > 0) {
        binary = (decimalNumber % 2) + binary
        decimalNumber = Math.floor(decimalNumber / 2)
    }

    output.value = binary || 0

});