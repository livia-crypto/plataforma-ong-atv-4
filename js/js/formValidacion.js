export function initFormValidation() {
  document.addEventListener('submit', e => {
    if (e.target.id === 'formCadastro') {
      e.preventDefault();

      const nome = document.querySelector('#nome').value.trim();
      const email = document.querySelector('#email').value.trim();
      const msg = document.querySelector('#mensagem');

      if (!nome || !email) {
        msg.textContent = 'Preencha todos os campos obrigatórios!';
        msg.style.color = 'red';
        return;
      }

      if (!email.includes('@')) {
        msg.textContent = 'Digite um e-mail válido!';
        msg.style.color = 'red';
        return;
      }

      msg.textContent = 'Cadastro realizado com sucesso!';
      msg.style.color = 'green';

      const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
      voluntarios.push({ nome, email });
      localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

      e.target.reset();
    }
  });
}
