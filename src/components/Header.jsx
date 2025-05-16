import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="sticky-header">
      <div className="logo-title">🍚 Rice Bowl Buffet</div>
      <nav>
        <a href="#menu">menu</a>
        <a href="#buffet">buffet</a>
        <a href="#about">about us</a>
      </nav>
    </header>
  );
};

export default Header;
