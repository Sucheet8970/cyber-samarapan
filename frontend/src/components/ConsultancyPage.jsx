import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaTrashAlt } from 'react-icons/fa';

import johnDoeImage from '../assets/man1.jpg';
import janeSmithImage from '../assets/girl1.jpg';
import aliceJohnsonImage from '../assets/man2.jpg';
import robertBrownImage from '../assets/girl2.jpg';
import emilyDavisImage from '../assets/man3.jpg';
import michaelClarkImage from '../assets/girl3.jpg';

function ConsultantPage() {
  const lawyers = [
    { id: 1, name: 'Gopal Subramaniun', expertise: 'Criminal Law', contact: 'Gopal@gmail.com', rating: 4.5, imageUrl: johnDoeImage },
    { id: 2, name: 'Indira Jaising', expertise: 'Social Law', contact: 'Jaising@gmail.com', rating: 5, imageUrl: janeSmithImage },
    { id: 3, name: 'K. Parasaran', expertise: 'Real-Estate Law', contact: 'Parasaran@gmail.com', rating: 4.7, imageUrl: aliceJohnsonImage },
    { id: 4, name: 'Geeta Luthra', expertise: 'Human-rights Law', contact: 'Geeta@gmail.com', rating: 4.2, imageUrl: robertBrownImage },
    { id: 5, name: 'K.K. Venugopal', expertise: 'Criminal Law', contact: 'K.K@gmail.com', rating: 4.9, imageUrl: emilyDavisImage },
    { id: 6, name: 'Flavia Agnes', expertise: 'Corporate Law', contact: 'Agnes@gmail.com', rating: 4.6, imageUrl: michaelClarkImage },
    // Add more lawyers as needed
  ];

  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const LawyerCard = ({ lawyer }) => {
    const { name, expertise, contact, rating, imageUrl } = lawyer;

    const handleCardClick = () => {
      setSelectedLawyer(lawyer);
    };

    return (
      <div className="lawyer-card" onClick={handleCardClick}>
        <div className="lawyer-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="lawyer-details">
          <h3>{name}</h3>
          <p>Expertise: {expertise}</p>
          <p>Contact: {contact}</p>
          <p>Rating: {rating}</p>
          {/* Add more details or actions as needed */}
        </div>
      </div>
    );
  };

  const ClosePopupButton = () => {
    return (
      <button onClick={() => setSelectedLawyer(null)} className="close-popup-btn">
        Close
      </button>
    );
  };

  return (
    <div className="consultant-page">
      <h1>Consultant Page</h1>
      <div className="lawyer-cards">
        {lawyers.map(lawyer => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>
      {selectedLawyer && (
        <div className="popup-card">
          <ClosePopupButton />
          <h2>{selectedLawyer.name}</h2>
          <p>Expertise: {selectedLawyer.expertise}</p>
          <p>Contact: {selectedLawyer.contact}</p>
          <p>Rating: {selectedLawyer.rating}</p>
          {/* Add more details or actions as needed */}
        </div>
      )}
      <style>
        {`
          .lawyer-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 3 cards in each row */
            gap: 20px;
          }

          .lawyer-card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 10px;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .lawyer-card:hover {
            background-color: #f0f0f0;
          }

          .lawyer-image {
            margin-right: 20px;
          }

          .lawyer-image img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 50%;
          }

          .lawyer-details {
            flex-grow: 1;
          }

          .popup-card {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            z-index: 1000;
          }

          .close-popup-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: transparent;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default ConsultantPage;
