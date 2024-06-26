import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ForumPage from './components/ForumPage';
import VideoLibraryPage from './components/VideoLibraryPage';
import ConsultancyPage from './components/ConsultancyPage';
import ContactUs from './components/ContactUs'; // Import ContactUs component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/forum" element={<ForumPage />} />
      <Route path="/video-library" element={<VideoLibraryPage />} />
      <Route path="/consultancy" element={<ConsultancyPage />} />
      <Route path="/contact" element={<ContactUs />} /> {/* New route for ContactUs */}
    </Routes>
  );
};

export default App;
