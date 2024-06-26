import React, { useState } from "react";
import { FaSearch, FaPlay } from "react-icons/fa";
import phishingImage from "../assets/phishing.jpg";
import passsec from "../assets/Passwordsec.jpg";
import Social from "../assets/socialengi.jpg";
import Secure from "../assets/browsing.jpg";
import Data from "../assets/datapro.jpg";
import Network from "../assets/nwsec.jpg";

const categories = [
  {
    id: 1,
    name: "Phishing",
    description: "Learn how to identify and avoid phishing scams.",
    imageUrl: phishingImage,
  },
  {
    id: 2,
    name: "Password Security",
    description: "Best practices for creating and managing passwords.",
    imageUrl: passsec,
  },
  {
    id: 3,
    name: "Social Engineering",
    description:
      "Understand social engineering tactics and how to protect yourself.",
    imageUrl: Social,
  },
  {
    id: 4,
    name: "Secure Browsing",
    description: "Tips for safe and secure browsing on the internet.",
    imageUrl: Secure,
  },
  {
    id: 5,
    name: "Data Protection",
    description: "How to protect your personal and sensitive data.",
    imageUrl: Data,
  },
  {
    id: 6,
    name: "Network Security",
    description: "Essentials of network security and threat prevention.",
    imageUrl: Network,
  },
];

const recentlyUploadedVideos = [
  {
    id: 1,
    title: "Understanding Phishing",
    url: "https://www.youtube.com/embed/XBkzBrXlle0",
    category: "Phishing",
    quality: "4K",
  },
  {
    id: 2,
    title: "Avoiding Email Scams",
    url: "https://www.youtube.com/embed/YEoQzk4vsDM",
    category: "Phishing",
    quality: "1080p",
  },
  {
    id: 3,
    title: "Recognizing Fake Websites",
    url: "https://www.youtube.com/embed/ukvehg2jj-E",
    category: "Phishing",
    quality: "720p",
  },
  {
    id: 4,
    title: "Creating Strong Passwords",
    url: "https://www.youtube.com/embed/q5DYkzOrz_I",
    category: "Password Security",
    quality: "1080p",
  },
  {
    id: 5,
    title: "Using Two-Factor Authentication",
    url: "https://www.youtube.com/embed/AMOtB7XkTT4",
    category: "Password Security",
    quality: "720p",
  },
  {
    id: 6,
    title: "Password Manager Benefits",
    url: "https://www.youtube.com/embed/J3lRI9LRcmQ",
    category: "Password Security",
    quality: "4K",
  },
  {
    id: 7,
    title: "Understanding Social Engineering",
    url: "https://www.youtube.com/embed/Vo1urF6S4u0",
    category: "Social Engineering",
    quality: "1080p",
  },
  {
    id: 8,
    title: "Phishing vs. Social Engineering",
    url: "https://www.youtube.com/embed/gSQgbCo6PAg",
    category: "Social Engineering",
    quality: "720p",
  },
  {
    id: 9,
    title: "Protecting Against Social Engineering",
    url: "https://www.youtube.com/embed/rENYxfpsirQ",
    category: "Social Engineering",
    quality: "4K",
  },
  {
    id: 10,
    title: "Safe Online Shopping Practices",
    url: "https://www.youtube.com/embed/Ll2lOUwE_Bo",
    category: "Secure Browsing",
    quality: "1080p",
  },
  {
    id: 11,
    title: "Using VPNs for Privacy",
    url: "https://www.youtube.com/embed/WUxqVxh39BM",
    category: "Secure Browsing",
    quality: "720p",
  },
  {
    id: 12,
    title: "Browser Security Settings",
    url: "https://www.youtube.com/embed/9SraN9V23WA",
    category: "Secure Browsing",
    quality: "4K",
  },
  {
    id: 13,
    title: "Data Backup Strategies",
    url: "https://www.youtube.com/embed/RQSdSZkMBkI",
    category: "Data Protection",
    quality: "1080p",
  },
  {
    id: 14,
    title: "Encryption Basics",
    url: "https://www.youtube.com/embed/TImdsUglGv4",
    category: "Data Protection",
    quality: "720p",
  },
  {
    id: 15,
    title: "Secure File Sharing",
    url: "https://www.youtube.com/embed/GOblHHETjMg",
    category: "Data Protection",
    quality: "4K",
  },
  {
    id: 16,
    title: "Firewall Essentials",
    url: "https://www.youtube.com/embed/Fli0GD_9OEU",
    category: "Network Security",
    quality: "1080p",
  },
  {
    id: 17,
    title: "Intrusion Detection Systems",
    url: "https://www.youtube.com/embed/dfVAi87BSEs",
    category: "Network Security",
    quality: "720p",
  },
  {
    id: 18,
    title: "Network Monitoring Tools",
    url: "https://www.youtube.com/embed/Y66aWGg2EQo",
    category: "Network Security",
    quality: "4K",
  },
];

const VideoLibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const CategoryCard = ({ category }) => (
    <div
      className="category-card"
      onClick={() => setSelectedCategory(category)}
      style={{ backgroundImage: `url(${category.imageUrl})` }}
    >
      <div className="category-card-content">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
      </div>
    </div>
  );

  const VideoCard = ({ video }) => (
    <div className="video-card" onClick={() => setSelectedVideo(video)}>
      <FaPlay /> {video.title} ({video.quality})
    </div>
  );

  const ClosePopupButton = () => (
    <button
      onClick={() => {
        setSelectedCategory(null);
        setSelectedVideo(null);
      }}
      className="close-popup-btn"
    >
      Close
    </button>
  );

  return (
    <div className="video-library-page">
      <h1>Cybersecurity Awareness Video Library</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a category..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <FaSearch />
      </div>
      <div className="category-cards">
        {filteredCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <h2>Recently Uploaded Videos</h2>
      <div className="recent-videos">
        {recentlyUploadedVideos.slice(-3).map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      {selectedCategory && (
        <div className="popup-card">
          <ClosePopupButton />
          <h2>{selectedCategory.name}</h2>
          <p>{selectedCategory.description}</p>
          <div className="related-videos">
            {recentlyUploadedVideos
              .filter((video) => video.category === selectedCategory.name)
              .map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
          </div>
        </div>
      )}
      {selectedVideo && (
        <div className="video-player-popup">
          <ClosePopupButton />
          <div className="video-player">
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedVideo.title}
            ></iframe>
          </div>
        </div>
      )}
      <style>
        {`
        .video-library-page {
          font-family: Arial, sans-serif;
          color: #1A2130;
          background-color: #ffffff;
          padding: 20px;
          margin: 150px;
          margin-bottom: 15px;
        }

        .search-bar {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .search-bar input {
          width: 100%;
          padding: 10px;
          border: 1px solid #83B4FF;
          border-radius: 4px;
                    margin-right: 10px;
        }

        .search-bar svg {
          color: #000000;
        }

        .category-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .category-card-content {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
          color: white;
          padding: 20px;
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .category-card {
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          height: 200px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .recent-videos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .video-card {
          background-color: #1A2130;
          color: white;
          padding: 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s;
          margin-bottom: 10px; /* Add margin-bottom to create distance between video cards */
        }

        .video-card a {
          color: white;
          text-decoration: none;
        }

        .video-card:hover {
          transform: scale(1.05);
        }

        .popup-card,
        .video-player-popup {
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

        .video-player {
          width: 800px;
          height: 450px;
        }

        .close-popup-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        .footer {
          text-align: center;
          padding: 20px;
          background-color: #5A72A0;
          color: white;
          margin-top: 40px;
        }
        `}
      </style>
    </div>
  );
};

export default VideoLibraryPage;
