
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/chatbot";
import About from "./components/About";
import Features from "./components/Features";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <div className="d-flex justify-content-center align-item-center vh-100">
        <Routes>
          <Route path="/" element={<ChatBot />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
