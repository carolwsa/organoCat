import "./Banner.css";

interface BannerProps {
  enderecoImagem: string;
  textoAlternativo?: string;
}
function Banner(props: BannerProps) {
  //ou
  //Banner({enderecoImagem, textoAlternativo}:BannerProps)

  return (
    //className == class em HTML;
    <header className="banner">
      <img src={props.enderecoImagem} alt={props.textoAlternativo} />
    </header>
  );
}

export default Banner;
