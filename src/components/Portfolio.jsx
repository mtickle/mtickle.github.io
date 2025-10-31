import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" className="card">
      <h2>My Portfolio</h2>
      <p>
        A collection of my personal projects, from web games to data tools.
        (You can add links here when they are ready).
      </p>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <h3>PatrolX Data Platform</h3>
          <p>
            Private project running on a Raspberry Pi using Go, Node, and React
            to gather and display public safety data.
          </p>
        </div>
        <div className="portfolio-item">
          <h3>No Man's Sky Tool</h3>
          <p>
            A utility for the game No Man's Sky, built with React, Node, and
            Electron.
          </p>
        </div>
        <div className="portfolio-item">
          <h3>React Web Games</h3>
          <p>
            A portfolio of games including Yahtzee, Blackjack, and more, built
            to sharpen my React and state management skills.
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Piano Chord Finder</h3>
          <p>
            A utility for my own music playing, helping to find piano chords.
            Built with React.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;