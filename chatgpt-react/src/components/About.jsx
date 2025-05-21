import React from 'react';
import myImage from '../images/image.png';
const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center mt-5">
        <div className="col-md-6">
          <img src={myImage} className="img-fluid rounded shadow" alt="About Us" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4 text-primary">About Our ChatBot</h2>
          <p className="lead">
            This AI-powered chatbot is built using the latest Spring Boot and OpenAI APIs. It provides intelligent conversations, supports real-time query handling, and is designed for seamless integration into your web platform.
          </p>
          <p>
            Whether you're a student, developer, or business professional, this chatbot can assist you with tasks, answer questions, and improve productivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
