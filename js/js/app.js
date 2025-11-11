import { initSPA } from './spa.js';
import { initFormValidation } from './formValidation.js';
import { initAccessibility } from './accessibility.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Aplicação iniciada...');
  initSPA();
  initFormValidation();
  initAccessibility();
});
