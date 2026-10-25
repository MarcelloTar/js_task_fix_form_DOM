'use strict';

// write code here

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const attName = input.name;
  const label = document.createElement('label');

  label.htmlFor = attName;
  label.textContent = attName;
  label.classList.add('field-label');

  input.insertAdjacentElement('beforebegin', label);

  input.placeholder = attName[0].toLocaleUpperCase() + attName.slice(1);
});
