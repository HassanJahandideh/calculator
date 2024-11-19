const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
   button.addEventListener('click', (e) => {
      const buttonValue = e.target.dataset.value;
      // console.log(buttonValue);
      if (buttonValue === 'AC') {
         display.value = '';
      } else if (buttonValue === 'DEL') {
         display.value = display.value.slice(0, -1);
      } else if (buttonValue === '=') {
         try {
            display.value = eval(display.value)
         } catch {
            display.value = 'Error'
         }
      } else {
         display.value += buttonValue
      }
   })
})
