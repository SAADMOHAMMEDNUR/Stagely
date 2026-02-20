import React from 'react';

export function Header() {
    return (
    <header>
    <div className="container">
    <nav className="nav-bar">
      
      <a href="index.html">Home</a>
      <a href="voting-artists.html">Artists</a>
      <a href="voting-commercials.html">Commercials</a>
      <a href="bingo.html">Make Your Own Bingo</a>
    </nav>

    <div className="container text-center">
      <a href="index.html" className="site-title">
        <h1>Stagely</h1>
      </a>  
      <p className="lead">Vote for which artist to headline the halftime show or your favorite Super Bowl commercial!</p>
    </div>
    </div>
    </header>
    );
    }