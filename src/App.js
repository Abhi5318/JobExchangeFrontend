import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Navbar from "./Navbar";
// import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<ContactForm />} />
            <Route path="/contact-list" element={<ContactList />} />
          </Routes>
          <Navbar />
        </div>
      </div>
    </Router>
  );
};

export default App;
