import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitar = (evento) => {
    props.aoAlterar(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        //"ouvindo" o valor digitado no input
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
