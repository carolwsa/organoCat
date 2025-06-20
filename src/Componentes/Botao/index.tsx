import { ReactElement } from "react";
import "./Botao.css";

interface BotaoProps {
  children: ReactElement | string;
  type?: "button" | "submit" | "reset"; // Adiciona a propriedade type como opcional
  onClick?: () => void; // Caso o botão tenha um evento de clique
}

const Botao = (props: BotaoProps) => {
  return (
    <button type={props.type} onClick={props.onClick} className="botao">
      {props.children}
    </button>
  );
};

export default Botao;
