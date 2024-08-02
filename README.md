# Projeto Canil

Este projeto visa ajudar o proprietário de um canil a encontrar o melhor petshop para banhos de cães, considerando o custo e a distância. O sistema calcula o custo total com base na quantidade de cães pequenos e grandes, e na data, para determinar o melhor petshop disponível.

## Instruções para Executar o Sistema

1. **Pré-requisitos**
   - Node.js (v16.0 ou superior) e npm (v7.0 ou superior) devem estar instalados. Você pode verificar a versão com os comandos:
     ```bash
     node -v
     npm -v
     ```

2. **Clonando o Repositório**
   - Clone o repositório usando o comando:
     ```bash
     git clone https://github.com/seu-usuario/projeto-canil.git
     ```
   - Navegue até o diretório do projeto:
     ```bash
     cd projeto-canil
     ```

3. **Instalando Dependências**
   - Execute o seguinte comando para instalar as dependências do projeto:
     ```bash
     npm install
     ```

4. **Executando a Aplicação**
   - Inicie o servidor de desenvolvimento com:
     ```bash
     npm run dev
     ```
   - Abra seu navegador e acesse `http://localhost:3000` para visualizar a aplicação em execução.

5. **Compilando para Produção**
   - Para criar uma versão otimizada para produção, execute:
     ```bash
     npm run build
     ```
   - Os arquivos gerados estarão no diretório `dist`.

## Lista de Premissas Assumidas

1. **Datas**: O sistema considera sábado e domingo como fins de semana. Outras datas são consideradas dias úteis.
2. **Distância e Preços**: A distância entre o canil e os petshops e os preços de banho são fixos e não variam com base em outros fatores além do dia da semana.
3. **Quantidades de Cães**: O número de cães pequenos e grandes é fornecido pelo usuário e é considerado diretamente para o cálculo de custos.

## Decisões de Projeto

1. **Estrutura de Dados**: Os petshops e seus preços são armazenados em um array de objetos para simplificar o acesso e manipulação dos dados.
2. **Lógica de Cálculo**: O cálculo do custo total é baseado no tipo de dia (dia útil ou fim de semana) e nas quantidades de cães.
3. **Interface de Usuário**: A interface foi projetada para ser simples e intuitiva, permitindo ao usuário inserir dados e visualizar resultados rapidamente.

## O Que Mais Compartilhar

- **Tecnologias Utilizadas**:
  - React: Biblioteca principal para construção da interface.
  - Vite: Ferramenta de build e desenvolvimento.
  - CSS: Para estilização básica da aplicação.

Se precisar de mais informações ou tiver alguma dúvida, sinta-se à vontade para entrar em contato.

