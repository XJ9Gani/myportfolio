// let calcNumber = document.querySelectorAll("#number")
// let calculatorInput = document.querySelector('#calculator-input');
// for(let number of calcNumber){
//       number.addEventListener('click' , function(){
//         calculatorInput.value += number.textContent;
//       })
// }

const input = document.getElementById('calculator-input');
const buttons = document.querySelectorAll('.calculator-numbers-1-button, .calculator-numbers-2-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clearAll') {
            input.value = '';
        } else if (button.id === 'equal') {
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = 'Error';
            }
        } else if (button.id === 'percentage') {
            input.value = parseFloat(input.value) / 100;
        } else {
            input.value += button.textContent;
        }
    });
});
