import "./Formulario.css";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { v4 as uuidv4 } from "uuid";

//ferramenta (hook) do React que serve para guardar e atualizar informações que podem mudar
//durante a execução do componente
import { useState } from "react";
import { ITimes } from "../../Compartilhado/Interfaces/ITimes";
import CampoTexto from "../Campo";
import { IColaborador_Form } from "../../Compartilhado/Interfaces/IColaborador_Form";

interface FormularioProps {
  cadastrarTime: (time: ITimes) => void;
  aoColaboradorCadastrado: (colaborador: IColaborador_Form) => void;
  times: string[];
}

const Formulario = (props: FormularioProps) => {
  // "nome" é onde guardamos o valor do input, "setNome" é a função que atualiza esse valor
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [nomeTime, setnomeTime] = useState("");
  const [corTime, setcorTime] = useState("");

  const novoTime = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.cadastrarTime({ nome: nomeTime, cor: corTime, id: uuidv4() });

    setnomeTime("");
    setcorTime("");
  };

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    //aqui chamamos a função que foi passada como prop para o componente Formulario
    //para que seja criada uma lista dos funcionarios cadastrados ao salvar o fotmulário
    //como argumentos, criamos um objeto com os dados do coladorador que foram
    //lidos através dos estados (useState)
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Catlab</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          // aqui passa o valor atual para mostrar no input
          valor={nome}
          // aqui passa uma função para mudar o estado quando o input mudar
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          itens={props.times}
          label="Time"
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />
        <Botao children={"Criar Card"}></Botao>
      </form>

      <form onSubmit={novoTime}>
        <h2>Preencha os dados para criar um novo time</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setnomeTime(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setcorTime(valor)}
        />
        <Botao type="submit" children={"Criar novo time"}></Botao>
      </form>
    </section>
  );
};

export default Formulario;
