import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} solankesanket007. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
