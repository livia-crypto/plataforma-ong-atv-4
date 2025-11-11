export function initAccessibility() {
  const btn = document.createElement('button');
  btn.id = 'toggle-contrast';
  btn.textContent = 'Alto Contraste';
  btn.setAttribute('aria-label', 'Ativar modo de alto contraste');
  document.body.prepend(btn);

  btn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });
}
