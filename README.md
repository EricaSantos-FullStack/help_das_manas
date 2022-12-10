# Projeto { Reprograma } Help das Manas
![logo_help2](https://user-images.githubusercontent.com/71906862/206830131-3bd09b37-11d2-4ba5-8df1-0f79c3dd05b9.png)

Já pensou em ter um espaço onde você pode se conectar com outras mulheres da tecnologia e ainda ser ajudada com as suas principais dúvidas?
Help das Manas é um projeto desenvolvido com o intuito de criar um espaço de network e colaboração multua entre mulheres da tecnologia e para aquelas que estão em transição de carreira. <br>
Nessa primeira parte do projeto, será apresentado uma listagem das manas para conferencia. <br>
Na segunda parte, será implementado o front-end para que as mulheres possam buscar pelas categorias que precisam de ajudar e dar match nas manas que podem ajudar. <br>

### 💜 Informações:
____________________
- Nome:
- Profissão:
- Descrição:
- LinkedIn:
- GitHub:
- Precisa de ajuda em:
- Posso ajudar em:


### ✏ Planejamento:
____________________
- [x] Decisão do tema.
- [x] Estudo sobre criação de uma API com as principais informações do usuário.
- [x] Checar se contém todas as ferramentas necessárias para a criação.
- [x] Criação do container.
- [x] Criação do server com Node.
- [x] Instalação do Express.
- [x] Nodemon para rodar o servidor sem precisar dar restart.
- [x] Criação do Dockerfile.
- [x] Instalação das 2 imagens do Docker: server e pgAdmin.
- [x] Criação do front básico para exemplo.
- [x] Criação do Docker Compose YML.
- [ ] Criação dos testes.
- [ ] Implementação das funcionalidades.


### 🛠 Ferramentas necessárias:
____________________
- [x] [Visual Studio Code](https://code.visualstudio.com/)
- [x] [XAMPP](https://www.apachefriends.org/pt_br/index.html)
- [x] [Docker](https://www.docker.com/)
- [x] [Node.js](https://nodejs.org/en/)

### 😎 Porque usar Docker e o que é essa ferramenta?
____________________

<img align="center" alt="docker" height="140" width="140" src="https://user-images.githubusercontent.com/71906862/206830131-3bd09b37-11d2-4ba5-8df1-0f79c3dd05b9.png">

É uma ferramenta que permite empacotar o ambiente para executar seu aplicativo junto com o próprio aplicativo. Você pode fazer isso simplesmente incluindo um único arquivo chamado `Dockerfile` com seu projeto.
Ele usa um conceito chamado _containers_ que são mais leves (requerem menos recursos) do que completos em máquinas virtuais para criar o ambiente para seu aplicativo. Esses contêineres são projetados para serem extremamente _portáveis_, o que significa que você pode implantá-los rapidamente em qualquer lugar e também dimensionar seu aplicativo rapidamente simplesmente implantando mais cópias de seu contêiner.

### 📚 Como subir o projeto?
____________________
Use o seguinte comandos :

`npm install`

`docker-compose build --no-cache`

`docker-compose up`

Ambiente: http://localhost:5000

#### Projeto em produção 🏗️

