# Cofre de Acessos — Samid / Jolaz

Site simples (React + Vite + TypeScript) para centralizar logins, senhas e
links de acesso a sistemas usados pela operação.

## ⚠️ Aviso importante de segurança

Todas as senhas estão escritas diretamente no código-fonte (`src/data.ts`),
sem criptografia, banco de dados ou autenticação. Isso foi proposital,
conforme solicitado, mas significa que:

- **Qualquer pessoa que acessar este site (ou o código) verá todas as senhas.**
- Não há controle de quem pode entrar — não existe tela de login.
- Se publicar isso em um link público (ex: Vercel, Netlify sem proteção),
  qualquer pessoa com o link terá acesso a tudo.

**Recomendação:** hospede apenas em rede interna/privada, ou atrás de algum
controle de acesso (ex: VPN, proteção por senha do próprio provedor de
hospedagem, IP allowlist), nunca em uma URL pública sem proteção.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Como gerar a versão final (build)

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`, que pode ser hospedada em
qualquer servidor de arquivos estáticos.

## Como adicionar ou editar acessos

Tudo fica em `src/data.ts`. Cada acesso é um objeto assim:

```ts
{
  id: 'identificador-unico',
  nome: 'NOME DO SISTEMA',     // aparece em CAIXA ALTA no botão
  url: 'https://site.com',
  usuario: 'usuario@email.com', // opcional
  senha: 'SenhaAqui',            // opcional
  extra: 'Observação livre',     // opcional
}
```

Para adicionar, copie um bloco existente, ajuste os campos e adicione na
lista `acessos`. Para os links que ficam na seção "URLS de acesso" (sem
senha/usuário), edite a lista `urlsDeAcesso` no mesmo arquivo.

## Estrutura do projeto

```
src/
  data.ts          -> todos os dados (acessos e urls)
  App.tsx          -> tela principal (busca, listagem, exportação)
  AccessCard.tsx    -> componente de cada card de acesso
  Toast.tsx         -> notificação de "copiado!"
  exportTxt.ts      -> lógica do botão "Gerar Arquivo .txt"
  index.css         -> todo o estilo visual (separado do código)
  main.tsx          -> ponto de entrada do React
```

## Funcionalidades

- 🔎 Campo de busca que filtra os cards pelo nome em tempo real.
- 🔗 Botão principal de cada card abre o site correspondente em nova aba.
- 👤 Botão "Usuário" copia o login para a área de transferência.
- 🔒 Botão "Senha" copia a senha para a área de transferência.
- 🌐 Seção "URLs de acesso" com botões apenas de redirecionamento (sem
  credenciais).
- 📄 Botão "Gerar Arquivo .txt" baixa um arquivo `.txt` organizado com
  todos os acessos, logins, senhas e urls.
