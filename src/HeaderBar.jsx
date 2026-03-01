import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
    <header>
    <div className="container">
    <nav className="nav-bar">
      <Link to="/artists">Artists</Link>
      <Link to="/commercials">Commercials</Link>
      <a href="bingo.html">Make Your Own Bingo</a>
    </nav>

    <div className="container text-center">
      <Link to="/" className="site-title">
        <h1>Stagely</h1>
      </Link>  
      <p className="lead">Vote for which artist to headline the halftime show or your favorite Super Bowl commercial!</p>
    </div>
    </div>
    </header>
    );
    }