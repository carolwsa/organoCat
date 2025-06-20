import { IoIosCloseCircle, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import "./Colaborador.css";

interface ColaboradorProps {
  nome: string;
  imagem: string;
  cargo: string;
  corDeFundo: string;
  favorito: boolean;
  id: string;
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
}

const Colaborador = ({
  nome,
  imagem,
  cargo,
  id,
  corDeFundo,
  aoDeletar,
  aoFavoritar,
  favorito = false,
}: ColaboradorProps) => {
  return (
    <div className="colaborador">
      <IoIosCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />
      <div
        className="colaborador-foto"
        style={{ backgroundColor: corDeFundo, borderRadius: "10px 10px 0 0" }}
      >
        <img src={imagem} alt={nome} />
      </div>
      <div className="colaborador-info">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="colaborador-favorito">
          {favorito ? (
            <IoMdHeart onClick={() => aoFavoritar(id)} />
          ) : (
            <IoMdHeartEmpty onClick={() => aoFavoritar(id)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
