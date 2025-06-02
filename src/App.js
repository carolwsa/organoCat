import { useState } from "react";
import Banner from "./Componentes/Banner/Banner.js";
import Formulario from "./Componentes/Formulario/index.js";
import Time from "./Componentes/Time/index.js";
import Footer from "./Componentes/Footer/index.js";

function App() {
  //trabalhando com a criação de uma lista de objetos
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  //criação de uma lista de colaboradores através do hook useState
  //onde inicia com uma lista vazia "[]", uma variavel "colaboradores" que guarda os dados
  //e uma função "setColaboradores" que atualiza os dados dessa lista
  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionarNovoColaborador = (colaborador) => {
    //aqui estamos recebendo o novo colaborador que foi adicionado no formulário
    //e verificando se já existe um colaborador com o mesmo nome e cargo
    const existe = colaboradores.some(
      (c) => c.nome === colaborador.nome && c.cargo === colaborador.cargo
    );

    if (existe) {
      alert("Colaborador já pertence a um time!");
      return;
    }

    console.log("Novo colaborador", colaborador);
    //utiliza o setColaboradores para atualizar a lista de colaboradores
    //ele pega o antigo "colaboradores", "espalha" os dados com o operador spread "..."
    // e adiciona o novo colaborador que foi passado como argumento
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      {/*Importando os componentes*/}
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) => {
          aoAdicionarNovoColaborador(colaborador);
        }}
      />

      {/*mapeando os times e adicionando seus atributos pelo .map*/}
      {times.map((time) => {
        return (
          <Time
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            //filtrando os colaboradores que pertencem ao time atual
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
