// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="Header">
      <h1>My Website</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
