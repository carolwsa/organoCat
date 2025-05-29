import { useState } from "react";
import Banner from "./Componentes/Banner/Banner.js";
import Formulario from "./Componentes/Formulario/index.js";

function App() {
  //criação de uma lista de colaboradores através do hook useState
  //onde inicia com uma lista vazia "[]", uma variavel "colaboradores" que guarda os dados
  //e uma função "setColaboradores" que atualiza os dados dessa lista
  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionarNovoColaborador = (colaborador) => {
    console.log("Novo colaborador");
    //utiliza o setColaboradores para atualizar a lista de colaboradores
    //ele pega o antigo "colaboradores", "espalha" os dados com o operador spread "..."
    // e adiciona o novo colaborador que foi passado como argumento
    setColaboradores(...colaboradores, colaborador);
  };

  return (
    <div className="App">
      {/*Importando os componentes*/}
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoAdicionarNovoColaborador(colaborador)
        }
      />
    </div>
  );
}

export default App;
