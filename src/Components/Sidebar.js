import React from "react";
import "../index.css";
import { SidebarData } from "./SidebarData";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="side-bar">
      <ul className= "side-bar-content">
        {SidebarData.map((val, key) => {
          return <Link to={val.link} key={key}>
            <li className={`row ${location.pathname === val.link ? "active" : ''}`}>
            <div id="icon">{val.icon}</div>
            <div id="title">{val.title}</div>
            </li>
            
          </Link>;
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
