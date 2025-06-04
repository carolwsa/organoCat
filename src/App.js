import { useState } from "react";
import Banner from "./Componentes/Banner/Banner.js";
import Formulario from "./Componentes/Formulario/index.js";
import Time from "./Componentes/Time/index.js";
import Footer from "./Componentes/Footer/index.js";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import BotaoEsconder from "./Componentes/Botao-Esconder/index.js";

function App() {
  //trabalhando com a criação de uma lista de objetos
  //transformando o array de objetos em uma lista de times
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  //criação de uma lista de colaboradores através do hook useState
  //onde inicia com uma lista vazia "[]", uma variavel "colaboradores" que guarda os dados
  //e uma função "setColaboradores" que atualiza os dados dessa lista
  const [colaboradores, setColaboradores] = useState([]);
  const [exibirformulario, setExibirFormulario] = useState(false);

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
    setColaboradores([...colaboradores, { ...colaborador, id: uuidv4() }]);
  };

  function deletandoColaborador(id) {
    if (window.confirm("Deseja deletar este colaborador?")) {
      //se o usuário confirmar a exclusão, ele filtra a lista de colaboradores
      setColaboradores(
        colaboradores.filter((colaborador) => colaborador.id !== id)
      );
    }
  }

  //funcao para mudar a cor do time
  //ela recebe a cor e o nome do time, e atualiza o estado "times"
  //usando o método map para iterar sobre cada time
  //se o nome do time for igual ao nome passado como argumento, ela atualiza a cor
  //caso contrário, retorna o time sem alterações
  //isso garante que apenas o time específico tenha sua cor alterada
  function mudandoCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function favoritando(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          return { ...colaborador, favorito: !colaborador.favorito };
        }
        return colaborador;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function BotaoEsconde() {
    if (!exibirformulario) {
      setExibirFormulario(true);
    } else {
      setExibirFormulario(false);
    }
  }

  return (
    <div className="App">
      {/*Importando os componentes*/}
      <Banner />
      {exibirformulario && (
        <Formulario
          cadastrarTime={cadastrarTime}
          times={times.map((time) => time.nome)}
          aoColaboradorCadastrado={(colaborador) => {
            aoAdicionarNovoColaborador(colaborador);
          }}
        />
      )}

      <div className="botao-esconde">
        <h2 className="titulo">Minha organização</h2>
        <BotaoEsconder aoClicar={BotaoEsconde} />
      </div>

      {/*mapeando os times e adicionando seus atributos pelo .map*/}
      {times.map((time, indice) => {
        return (
          <Time
            mudarCor={mudandoCorDoTime}
            key={indice}
            nome={time.nome}
            time={time}
            cor={time.cor}
            //filtrando os colaboradores que pertencem ao time atual
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletandoColaborador}
            aoFavoritar={favoritando}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
