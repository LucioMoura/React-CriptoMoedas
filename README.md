# Lucio Moura

![myimage-alt-tag](layout.png)

Clone o projeto e siga as instrucoes de abaixo.

### Instalar dependências
Para instalar as dependencias digite no console:
```
npm install
```

### Compilar e iniciar o projeto
Para compilar o projeto:
```
npm start
```
### Compilar e minificar para produção
```
npm build
```
Logo de executar o comando será gerada uma pasta **build** com todos os arquivos compilados e minificados prontos para produção.

O deploy depende de como esteja estruturado o ambiente de desenvolvimento da empresa:

* Copiando e colando, os arquivos compilados, diretamente em produção através de uma conexão **ssh** com a maquina de produção;
* Subindo as mudanças no **git** e logo entrando na maquina de produção e fazendo pull das mudanças utilizando o comando **git pull** na raiz do projeto.

# Teste Front-End React

O objetivo deste teste é conhecer um pouco das suas habilidades de programação e perícia com React e o consumo de APIs.

**Utilize todas as boas práticas de software que você conhece!**

Faça um fork privado deste projeto e inicie o desenvolvimento. 

Quando terminar, dê acesso de leitura ao usuário squadbr (https://bitbucket.org/squadbr) e envie um email para flavia@squad.com.br

A proposta é simples:

O App deverá consumir uma API que mostra a cotação atual de várias criptomoedas.
No load inicial da página todas as moedas deverão ser exibidas.
Um campo de busca deverá existir e quando o usuário fizer o input de qualquer caractere a lista deverá ser alterada dinamicamente, mostrando apenas criptomoedas que contenham as combinação de caracteres digitados pelo usuário.

Crie um layout responsivo com as cores #009BAA #009B46 #002814.

```
Ex:
---> Página Carregada
Campo de busca _____: 
Criptomoedas: 
Bitcoin
Ripple
EOS

Campo de busca b___: 
Criptomoedas:
Bitcoin
```

**Tasks**

* Escreva uma breve descrição de como rodar os testes locais e fazer o setup do ambiente de desenvolvimento.
* Consuma a API: https://api.coinmarketcap.com/v1/ticker/.
* Mostre na tela apenas os atributos `symbol` e `price_usd` de cada moeda.
* Filtre o nome das moedas baseando-se no input do usuário no search field.
* Utilize qualquer lib de componentes estilizados para o search e a listagem. (React Material-UI, React Bulma, etc)
* Crie testes automatizados tanto para o consumo da API quanto para a interação com o botão de busca.


**Bonus**

* Crie uma imagem Docker para o deploy em produção.

