import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  label: string;
  obrigatorio: boolean;
  valor: string;
  aoAlterar: (valor: string) => void;
  itens: string[];
}

const ListaSuspensa = ({
  label,
  aoAlterar,
  obrigatorio,
  valor,
  itens,
}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <div className="label-button">
        <label>{label}</label>
      </div>
      <select
        required={obrigatorio}
        value={valor}
        onChange={(evento) => aoAlterar(evento.target.value)}
      >
        {" "}
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
