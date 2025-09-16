const inputs = document.querySelectorAll('.code');
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    // Accept only digits
    if (!/^\d$/.test(value)) {
      input.value = '';
      return;
    }
    // Move to next input if available
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '') {
        // Move focus to previous input and clear its value
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = '';
          e.preventDefault();
        }
      } else {
        // Clear current value
        input.value = '';
        e.preventDefault();
      }
    } else if (e.key >= '0' && e.key <= '9') {
      // Overwrite existing input on pressing number keys
      input.value = '';
    }
  });

  // Prevent paste to maintain correct input flow
  input.addEventListener('paste', (e) => e.preventDefault());
});
