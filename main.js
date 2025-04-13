const numberInputs = document.querySelectorAll('.my_number_value input[type="number"]');
const textInput = document.querySelector('.my_number_total');

numberInputs.forEach(input => {
  input.addEventListener('input', () => {
    const sum = Array.from(numberInputs)
      .reduce((total, input) => total + (Number(input.value) || 0), 0);

    textInput.innerText = `Computed Twig ${sum}`;
  });
});