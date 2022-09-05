const input = document.querySelector('#validation-input');

const length = input.getAttribute('data-length');


input.addEventListener('blur',onInputBlur);

function onInputBlur(event) {
   	if (event.target.value.length == length) {
		input.classList.add('valid')
		if (input.classList.contains('invalid')) {
			input.classList.remove('invalid')
		}
	} else {
		if (input.classList.contains('valid')) {
			input.classList.remove('valid')
		}
		input.classList.add('invalid')
	}
    
}