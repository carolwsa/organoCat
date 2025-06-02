import "./Colaborador.css";

const Colaborador = ({ nome, cargo, imagem, corDeFundo }) => {
  return (
    <div className="colaborador">
      <div
        className="colaborador-foto"
        style={{ backgroundColor: corDeFundo, borderRadius: "10px 10px 0 0" }}
      >
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
