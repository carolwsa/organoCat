import "./Formulario.css";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

//ferramenta (hook) do React que serve para guardar e atualizar informações que podem mudar
//durante a execução do componente
import { useState } from "react";

const Formulario = (props) => {
  // "nome" é onde guardamos o valor do input, "setNome" é a função que atualiza esse valor
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [nomeTime, setnomeTime] = useState("");
  const [corTime, setcorTime] = useState("");

  const novoTime = (evento) => {
    evento.preventDefault();
    props.cadastrarTime({ nome: nomeTime, cor: corTime });

    setnomeTime("");
    setcorTime("");
  };

  const aoSalvar = (evento) => {
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
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          // aqui passa o valor atual para mostrar no input
          valor={nome}
          // aqui passa uma função para mudar o estado quando o input mudar
          aoAlterar={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          itens={props.times}
          label="Time"
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>

      <form onSubmit={novoTime}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterar={(valor) => setnomeTime(valor)}
        />
        <Campo
          obrigatorio={true}
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterar={(valor) => setcorTime(valor)}
        />
        <Botao onClick={novoTime}>Criar novo time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
