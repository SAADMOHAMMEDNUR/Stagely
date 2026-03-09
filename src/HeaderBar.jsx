import React from "react";
import { Link } from "react-router";

export function Header() {
  const NavLinks = [
    { link: "index.html", text: "Home" },
    { link: "voting-artists.html", text: "Artists" },
    { link: "voting-commercials.html", text: "Commercials" },
    { link: "voting-bingo.html", text: "Make Your Own Bingo" },
  ]
  const navItems = NavLinks.map((item) => (
    <a href={item.link}>
      {item.text}
    </a>
  ));
  return (
    <header>
      <div className="container">
        <nav className="nav-bar">
  {navItems}
</nav>

        <div className="container text-center">
          <Link to="/" className="site-title">
            <h1>Stagely</h1>
          </Link>
          <p className="lead">
            Vote for which artist to headline the halftime show or your favorite Super Bowl commercial!
          </p>
        </div>
      </div>
    </header>
  );
}