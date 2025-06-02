import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return (
    //se a lista foi maior que 0, ele renderiza a seção do time
    props.colaboradores.length > 0 ? (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    ) : (
      //se a lista for igual a 0, ele não renderiza nada
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <p>O time ainda não esta formado!</p>
      </section>
    )
  );
};

export default Time;
