import React from 'react';
import "../styles/Section.css";

const Section = ({ functions, Icon, title, color, selected }) => {
  return (
    <div
      onClick={() => functions(title)}
      id={title}
      className={`Section ${selected && "Section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default Section