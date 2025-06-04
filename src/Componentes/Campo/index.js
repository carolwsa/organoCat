import "./Campo.css";

const CampoTexto = (props) => {
  const aoDigitar = (evento) => {
    props.aoAlterar(evento.target.value);
  };

  return (
    <div className={`campo campo-${props.type}`}>
      <label>{props.label}</label>
      <input
        //"ouvindo" o valor digitado no input
        value={props.valor}
        onChange={aoDigitar}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        //atribui o type o valor "text" por padrão caso não seja passado outro tipo
        type={props.type || "text"}
      />
    </div>
  );
};

export default CampoTexto;
