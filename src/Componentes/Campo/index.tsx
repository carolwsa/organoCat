import "./Campo.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  //criando a props de uma função que é void(não retorna nada)
  //e recebe um parametro(valor) que é uma string
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio?: boolean;
  type?: "text" | "password" | "number" | "url" | "date" | "color";
  //como type recebe apenas valores especificos para o input,
  //podemos criar a tipagem dele desta maneira
}

const CampoTexto = ({
  aoAlterado,
  label,
  placeholder,
  valor,
  type,
  obrigatorio = false,
}: CampoTextoProps) => {
  //evento precisa ser tipado, correspondendo a açao de onChange
  //SyntheticEvent atribui a um elemento genérico, para verificar o evento expecífico, basta
  //atribuir o evento a uma arrow function no onChange
  const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        //"ouvindo" o valor digitado no input
        value={valor}
        onChange={aoDigitar}
        required={obrigatorio}
        placeholder={placeholder}
        //atribui o type o valor "text" por padrão caso não seja passado outro tipo
        type={type || "text"}
      />
    </div>
  );
};

export default CampoTexto;
