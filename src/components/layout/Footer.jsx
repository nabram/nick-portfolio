import React from "react";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span>© {new Date().getFullYear()} Nicholas Abram</span>
        <span className="footer-contact">nicklabram1@gmail.com</span>
      </div>
    </footer>
  );
};
