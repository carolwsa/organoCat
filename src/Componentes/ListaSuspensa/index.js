import "./ListaSuspensa.css";
import { IoIosAddCircleOutline } from "react-icons/io";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <div className="label-button">
        <label>{props.label}</label>
        <button
          type="button"
          className="lista-suspensa-button"
          onClick={props.aoAdicionar}
        >
          <IoIosAddCircleOutline size={25} />
        </button>
      </div>
      <select
        required={props.obrigatorio}
        value={props.valor}
        onChange={(evento) => props.aoAlterar(evento.target.value)}
      >
        {" "}
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
