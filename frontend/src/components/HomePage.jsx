import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import profileImage from '../assets/file.png'; // Import the image

const HomePage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.cxgenie.ai/widget.js";
    script.setAttribute('data-aid', '909589f0-c9bc-485b-b63a-1a5c9f4ba4dd');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []); // Empty dependency array to run only once

  return (
    <div className="wrapper">
      <header className="site-header">
        <nav>
          <ul>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/forum">Forum</Link></li>
            <li><Link to="/video-library">Video Library</Link></li>
            <li><Link to="/consultancy">Consultancy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="home-page">
          <div className="block">
            <h1>I'm Cyber-Samarpan.</h1>
            <p className="intro">
              Your caring digital guardian, providing interactive quizzes, discussions, and video tutorials. Empowering you with cybersecurity knowledge and tools for a secure, fulfilling online journey.
            </p>
            <Link to="/contact" className="button">Contact Us</Link>
          </div>
          <div className="block">
            <img src={profileImage} alt="An illustration of me in profile" />
          </div>
        </div>
      </main>

      <footer>
        <p>Stay Connected with Cyber-Samarpan:</p>
        <Link to="/forum">Join the forum</Link>
        <Link to="/video-library">Explore videos</Link>
        <Link to="/contact">Contact us</Link>
        <p>© 2024 Cyber-Samarpan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
