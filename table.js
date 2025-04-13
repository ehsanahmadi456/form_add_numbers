const numberInputs = document.querySelectorAll('table.responsive-enabled.draggable-table tbody tr td:nth-child(5) input[type=number]');
const textInput = document.querySelector('.my_number_value_total input');

numberInputs.forEach(input => {
  input.addEventListener('input', () => {
    const sum = Array.from(numberInputs)
      .reduce((total, input) => total + (Number(input.value) || 0), 0);

    textInput.value = sum;
  });
});