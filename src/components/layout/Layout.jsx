import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="site-root">
      <Nav />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
};
