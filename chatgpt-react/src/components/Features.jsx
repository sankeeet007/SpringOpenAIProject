import React from 'react';

const features = [
  { title: "Real-Time Responses", icon: "⚡", desc: "Powered by OpenAI for fast and intelligent replies." },
  { title: "Spring Boot Backend", icon: "🌱", desc: "Robust REST API built with Spring Boot 3.4." },
  { title: "Secure Integration", icon: "🔒", desc: "Uses Bearer Tokens and HTTPS endpoints." },
  { title: "Custom Prompts", icon: "🎯", desc: "You can configure your own chatbot personality." },
];

const Features = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 text-primary">Key Features</h2>
      <div className="row">
        {features.map((f, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="display-4 mb-3">{f.icon}</div>
                <h5 className="card-title">{f.title}</h5>
                <p className="card-text">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
