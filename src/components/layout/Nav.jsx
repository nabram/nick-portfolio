import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "nav-link nav-link-active" : "nav-link";

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" className="nav-logo">
          Nicholas Abram
        </Link>
        <nav className="nav-links">
          <Link className={isActive("/")} to="/">
            Work
          </Link>
          <Link className={isActive("/about")} to="/about">
            About
          </Link>
          <Link className={isActive("/case-studies")} to="/case-studies">
            Case Studies
          </Link>
        </nav>
      </div>
    </header>
  );
};
