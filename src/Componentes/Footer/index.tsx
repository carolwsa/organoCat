import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="redes">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="./Images/fb.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <img src="./Images/tw.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src="./Images/ig.png" alt="Instagram" />
        </a>
      </div>
      <img src="./Images/logo.png" alt="Logo da Organo" className="organo" />
      <p>Desenvolvido por Alura.</p>
    </footer>
  );
};

export default Footer;
