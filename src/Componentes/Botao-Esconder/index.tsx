import "./Botao-Esconder.css";
import { TbReplace } from "react-icons/tb";

interface BotaoEsconderProps {
  aoClicar: (valor: boolean) => void;
}

const BotaoEsconder = (props: BotaoEsconderProps) => {
  return (
    <button className="botao-esconder" onClick={() => props.aoClicar(true)}>
      <TbReplace />
    </button>
  );
};

export default BotaoEsconder;
