import './App.css';

function App() {
  return (
    <div className="App">
    
        <img src="https://avatars.githubusercontent.com/u/69362122?v=4" className="photo-profile" alt="photo" />
        <h1 className="name">Matheus da Silva Ferreira</h1>

        <main className="main-information">
          
          <section className="container-information">
            <h3 className="title">Dados pessoais</h3>
            <ul className="list">
              <ol>Endereço: Rua São Domingão 777 Fundos, Morro São Bento, Santos-SP</ol>
              <ol>Telefone: (13) 3224-4214</ol>
              <ol>Celular: (13) 92000-4406</ol>
            </ul>
          </section>

          <section className="container-information">
            <h3 className="title">Formação</h3>
            <ul className="list">
              <ol>Ensino Médio: E.E. João Octavio dos Santos - completo em 2015</ol>
              <ol>Ensino Superior:  Universidade Paulista - incompleto (2020-2021)</ol>
            </ul>
          </section>
         
          <section className="container-information">
            <h3 className="title">Experiência</h3>
            <ul className="list">
              <ol>Auxiliar Administrativo: 1° Cartório de registro civil de Santos (2014-2017)</ol>
              <ol>Monitor de Eventos: MEDGRUPO (2017-2019)</ol>
            </ul>
          </section>
         
          <section className="container-information">
            <h3 className="title">Projetos</h3>
            <ul className="list">
              <ol>Web: <a href="https://github.com/Matheus2798/Web-NodeJS-ReactJS">NodeJS + ReactJS</a></ol>
              <ol>Mobile: <a href="https://github.com/Matheus2798/React-Native-Expo">React Native</a></ol>
            </ul>
          </section>
        </main>

    </div>
  );
}

export default App;
