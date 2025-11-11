export const templates = {
  home: `
    <section>
      <h1>Bem-vindo à Plataforma ONG</h1>
      <p>Conectando pessoas e causas sociais.</p>
    </section>
  `,
  cadastro: `
    <section>
      <h2>Cadastro de Voluntário</h2>
      <form id="formCadastro">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" required>

        <label for="email">Email:</label>
        <input type="email" id="email" required>

        <button type="submit">Cadastrar</button>
      </form>
      <p id="mensagem"></p>
    </section>
  `
};
