import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  //Ajuda a prevenir erros
  <React.StrictMode>
    {/*chama o App.js; é o ponto de entrada da aplicação,
     onde os componentes são importados e renderizados.*/}
    <App />
  </React.StrictMode>
);
