import "./Colaborador.css";

const Colaborador = ({ nome, cargo, imagem }) => {
  return (
    <div className="colaborador">
      <div className="colaborador-foto">
        <img src={imagem} alt={nome} />
      </div>
      <div className="colaborador-info">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
