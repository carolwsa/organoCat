import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Time.css";

const Time = ({ colaboradores, aoDeletar, time, mudarCor, aoFavoritar }) => {
  return (
    //se a lista foi maior que 0, ele renderiza a seção do time
    colaboradores.length > 0 ? (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(time.cor, "0.6") }}
      >
        <input
          type="color"
          className="input-cor"
          value={time.cor}
          onChange={(evento) => mudarCor(evento.target.value, time.id)}
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => {
            // o parenteses permite um return de mais de uma linha
            return (
              <Colaborador
                corDeFundo={time.cor}
                key={colaborador.id}
                id={colaborador.id}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
                favorito={colaborador.favorito}
              />
            );
          })}
        </div>
      </section>
    ) : (
      //se a lista for igual a 0, ele não renderiza nada
      <section className="time" style={{ backgroundColor: time.cor }}>
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <p>O time ainda não esta formado!</p>
      </section>
    )
  );
};

export default Time;
