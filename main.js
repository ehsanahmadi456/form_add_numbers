const form = document.querySelector('.form_numbers');
const numberInputs = form.querySelectorAll('input[type="number"]');
const textInput = form.querySelector('input[type="text"]');

numberInputs.forEach(input => {
  input.addEventListener('input', () => {
    const sum = Array.from(numberInputs)
      .reduce((total, input) => total + (Number(input.value) || 0), 0);

    textInput.value = sum;
  });
});