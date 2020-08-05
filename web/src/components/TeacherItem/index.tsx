import React from "react";
// STYLES | STATICS
import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/35645590?s=460&u=2b86fc193b30e15abe3ad4df935ee7b7edf4cbd4&v=4"
          alt="Elias alexandre"
        />
        <div>
          <strong>Elias alexandre</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnoogias de química avançada.
        <br />
        <br />
        Apoixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de exeriências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>120,00 $</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
