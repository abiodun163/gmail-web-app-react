import React from 'react';
import "../styles/SidebarOptions.css";


const SidebarOptions = ({ selected, title, Icon, number }) => {
    return <div className={`SidebarOptions ${selected &&  "sidebar--active"}`}>
        <Icon />
        <h3>{title}</h3>
        <p>{ number }</p>
  </div>;
};

export default SidebarOptions