import React from 'react';
import bitmoji from './assets/espresso drink.png';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import About from './About';  // Ensure this component exists
import Experience from './Experience';

function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="https://www.linkedin.com/in/holland-henderson-boyer" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin text-2xl text-white"></i>
      </a>
      <a href="https://github.com/supergeek57" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github text-2xl text-white"></i>
      </a>
      <a href="tel:+14106932212" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-phone text-2xl text-white"></i>
      </a>
      <a href="mailto:hhendersonboyer@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope text-2xl text-white"></i>
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen bg-cover bg-fixed bg-mountains">
        {/* Navigation Bar */}
        <nav className="text-white p-4">
          <div className="flex justify-between items-center max-w-screen-xl mx-auto">
            <div className="flex space-x-4">
              <Link to="/" className="font-source-code-pro hover:bg-indigo-800 px-3 py-2 rounded">Home</Link>
              <Link to="/about" className="font-source-code-pro hover:bg-indigo-800 px-3 py-2 rounded">About Me</Link>
              <Link to="/experience" className="font-source-code-pro hover:bg-indigo-800 px-3 py-2 rounded">Experience</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex items-center justify-center px-6" style={{ height: 'calc(100vh - 64px)' }}>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="font-source-code-pro font-semibold text-5xl text-white">
                    Hi, I'm Holland!
                  </div>
                  <div className="font-source-code-pro font-semibold text-xl text-white">
                    Software Engineer | Data Wrangler | Coffee Snob
                  </div>
                  <div className="mb-4"></div>
                  <div className="mb-4">
                    <SocialLinks />
                  </div>
                </div>

                <div className="ml-10">
                  <img
                    src={bitmoji}
                    alt="Bitmoji"
                    className="w-64 h-auto drop-shadow-lg animate-bounce md:animate-none"
                  />
                </div>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
