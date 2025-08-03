const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn, .btn-opt, .btn-equal');

let input = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        if (value === 'clear') {
            input = '';
            display.value = '';
        } else if (value === 'backspace') {
            input = input.slice(0, -1);
            display.value = input;
        } else if (value === 'equals') {
            try {
                input = eval(input).toString();
                display.value = input;
            } catch {
                display.value = 'Error';
                input = '';
            }
        } else {
            input += value;
            display.value = input;
        }
    });
});
