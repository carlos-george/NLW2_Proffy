# Proffy

O Proffy é a plataforma que faz uma conexão entre professores e alunos.

## Instalação

Para clonar e executar este aplicativo, você precisará do [Git](https://git-scm.com) e do [Node.js][nodejs] instalados no seu computador.

Na sua linha de comando:

### Instalar API

  

```bash

# Clone this repository

$ git clone https://github.com/carlos-george/NLW2_Proffy

  

# Entrar na pasta Server

$ cd NLW2_Proffy/server

  

# Instalar dependências

$ yarn install


# Criação de Banco de Dados

$ yarn knex:migrate



# Start servidor

$ yarn start

  

# executando na porta port 3333

```

  

### Instalar Front-end

  

```bash


$ cd NLW2_Proffy/web

  

# Instalar dependências

$ yarn install

  

# Run

$ yarn start

  

# running on port 3000

# preste atenção ao endereço de sua rede local e altere o arquivo api.ts com suas configurações.

```

  

### Install Mobile

  

```bash

# Go into the repository

$ cd NLW2_Proffy/mobile

  

# Instalar dependências

$ yarn install

  

# Run

$ yarn start

  

# Expo vai abrir, basta escanear o qrcode no terminal ou página expo


# Se houver algum problema com as fontes, execute:

$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins
```

## Contribuição
Solicitações de Pull Requests são bem-vindas. Para grandes mudanças, abra um problema primeiro para discutir o que você gostaria de mudar.


Certifique-se de atualizar os testes conforme apropriado.

## Technologies

  

Este projeto foi desenvolvido com as seguintes tecnologias:

  

- [Node.js][nodejs]

- [TypeScript][typescript]

- [React][reactjs]

- [React Native][rn]

- [Expo][expo]

- [Yarn][yarn]



Poderá ser utilizado o [NPM][npm] como gerenciador de pacotes ao invés do yarn.

## License
[MIT](https://choosealicense.com/licenses/mit/)


Made by Carlos George :wave: [Get in touch!](https://www.linkedin.com/in/carlos-george-58856a1b/)

[nodejs]:  https://nodejs.org/

[typescript]:  https://www.typescriptlang.org/

[expo]:  https://expo.io/

[reactjs]:  https://reactjs.org

[rn]:  https://facebook.github.io/react-native/

[yarn]: https://yarnpkg.com/

[npm]: https://www.npmjs.com/
