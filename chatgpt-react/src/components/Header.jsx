
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="bg-light text-center py-5">
      <div className="container">
        <h1 className="display-4">Welcome to SpringOpenAI ChatBot</h1>
        <p className="lead">A simple chatbot built with SpringBoot React OpenAI</p>
      </div>
    </header>
  );
};

export default Header;
