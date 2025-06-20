import hexToRgba from "hex-to-rgba";
import "./Time.css";
import { IColaborador } from "../../Compartilhado/Interfaces/IColaborador";
import { ITimes } from "../../Compartilhado/Interfaces/ITimes";
import Colaborador from "../Colaborador";

interface TimeProps {
  mudarCor: (cor: string, id: string) => void;
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
  cor: string;
  nome: string;
  colaboradores: IColaborador[];
  time: ITimes;
}

const Time = (props: TimeProps) => {
  return (
    //se a lista foi maior que 0, ele renderiza a seção do time
    props.colaboradores.length > 0 ? (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(props.time.cor, "0.6") }}
      >
        <input
          type="color"
          className="input-cor"
          value={props.time.cor}
          onChange={(evento) =>
            props.mudarCor(evento.target.value, props.time.id)
          }
        />
        <h3 style={{ borderColor: props.time.cor }}>{props.time.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            // o parenteses permite um return de mais de uma linha
            return (
              <Colaborador
                corDeFundo={props.time.cor}
                key={colaborador.id}
                id={colaborador.id}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={props.aoDeletar}
                aoFavoritar={props.aoFavoritar}
                favorito={colaborador.favorito ?? false}
              />
            );
          })}
        </div>
      </section>
    ) : (
      //se a lista for igual a 0, ele não renderiza nada
      <section className="time" style={{ backgroundColor: props.time.cor }}>
        <h3 style={{ borderColor: props.time.cor }}>{props.time.nome}</h3>
        <p>O time ainda não esta formado!</p>
      </section>
    )
  );
};

export default Time;
