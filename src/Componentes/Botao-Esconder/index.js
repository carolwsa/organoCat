import "./Botao-Esconder.css";
import { TbReplace } from "react-icons/tb";

const BotaoEsconder = (props) => {
  return (
    <button className="botao-esconder" onClick={props.aoClicar}>
      <TbReplace />
    </button>
  );
};

export default BotaoEsconder;
