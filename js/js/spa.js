import { templates } from './templates.js';

export function initSPA() {
  const main = document.querySelector('#main-content');
  const links = document.querySelectorAll('[data-route]');

  function navigate(route) {
    main.innerHTML = templates[route] || '<h2>Página não encontrada</h2>';
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const route = link.getAttribute('data-route');
      navigate(route);
    });
  });

  navigate('home');
}

