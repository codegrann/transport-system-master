import React, { useState } from "react";
import "./header.css";
import logo from "../images/logo/erplogo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "bootstrap";

function Header() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  return (
    <div className="header">
      <div className="logo-region">
        <div className="logo-container">
          <Link to="/dashboard">
            <img src={logo} alt="erplogo" />
          </Link>
        </div>
        <div className="logo-text">
          <Link to="/dashboard">
            <h2>ERP Africa</h2>
          </Link>
        </div>
      </div>
      <div className={`search-bar ${isInputFocused ? "focused" : ""}`}>
        <input
          type="text"
          placeholder="Search"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className="notification">
        <i className="bi bi-bell"></i>
        <span class="badge">2</span>
      </div>
    </div>
  );
}

export default Header;
