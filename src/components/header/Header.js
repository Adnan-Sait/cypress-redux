import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <Link className="app-home-link" to="/">
        Home
      </Link>
    </header>
  );
}

export default Header;
