import React from "react";
import api from "../../services";
// STYLES | STATICS
import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

export interface Teacher {
  avatar: string;
  bio: string;
  cost: Number;
  id: Number;
  name: string;
  subject: string;
  user_id: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  function createNewConnection() {
    api.post("/connections", {
      user_id: props.teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={props.teacher.avatar} alt="Elias alexandre" />
        <div>
          <strong>{props.teacher.name}</strong>
          <span>{props.teacher.subject}</span>
        </div>
      </header>

      <p>{props.teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{props.teacher.cost},00 $</strong>
        </p>

        <a
          onClick={createNewConnection}
          target="_BLANK"
          rel="noopener noreferrer"
          href={`https://wa.me/${props.teacher.whatsapp}?text="from: GENESIS"`}
        >
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
