//your JS code here. If required.
const inputs = document.querySelectorAll('.code');
inputs[0].focus();

inputs.forEach((input, idx) => {
	input.addEventListener('input', (e) => {
		const value = e.target.value;
		// Accept only digits
		if (!/^\d$/.test(value)) {
			input.value = '';
			return;
		}
		if (idx < inputs.length - 1) {
			inputs[idx + 1].focus();
		}
	});
	input.addEventListener('keydown', (e) => {
		if (e.key === 'Backspace') {
			if (input.value === '') {
				if (idx > 0) {
					inputs[idx - 1].focus();
					inputs[idx - 1].value = '';
				}
			} else {
				input.value = '';
			}
		} else if (e.key >= '0' && e.key <= '9') {
			input.value = ''; // To allow only new digit entry
		}
	});
	// Prevent non-digit input
	input.addEventListener('paste', (e) => e.preventDefault());
});
