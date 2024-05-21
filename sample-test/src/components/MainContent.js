// src/components/MainContent.js
import React from 'react';
import Counter from './Counter';

function MainContent() {
  return (
    <main className="MainContent">
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to the home page!</p>
      </section>
      <section id="about">
        <h2>About</h2>
        <p>This is the about section.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Get in touch with us.</p>
      </section>
      <section id="counter">
        <h2>Counter</h2>
        <Counter />
      </section>
    </main>
  );
}

export default MainContent;
