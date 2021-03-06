import React, { TextareaHTMLAttributes } from "react";
// STYLES | STATICS
import "./styles.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} id={name} />
    </div>
  );
};

export default Textarea;
