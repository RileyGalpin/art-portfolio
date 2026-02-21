import React, { useState } from 'react';

const artworks = [
  { 
    id: 1, 
    title: 'Belonging', 
    coverImage: '/images/Belonging1.JPG',
    images: [
      '/images/Belonging1.JPG', 
      '/images/Belonging2.JPG', 
      '/images/Belonging3.JPG'
    ]
  },
  { 
    id: 2, 
    title: 'Eclipse', 
    coverImage: '/images/Eclipse1.JPG',
    images: [
      '/images/Eclipse1.JPG', 
      '/images/Eclipse2.JPG'
    ]
  },
  { 
    id: 3, 
    title: 'Fog', 
    coverImage: '/images/Fog.JPG',
    images: [
      '/images/Fog.JPG', 
      '/images/Fog1.JPG', 
      '/images/Fog2.JPG'
    ]
  },
  { 
    id: 4, 
    title: 'Forgotten', 
    coverImage: '/images/Forgotten1.JPG',
    images: [
      '/images/Forgotten3.JPG', 
      '/images/Forgotten1.JPG', 
      '/images/Forgotten2.JPG',
      '/images/Forgotten4.JPG',
      '/images/Forgotten5.JPG',
      '/images/Forgotten6.JPG'
    ]
  },
  { 
    id: 5, 
    title: 'Hope', 
    coverImage: '/images/Hope1.JPG',
    images: [
      '/images/Hope1.JPG', 
      '/images/Hope2.JPG', 
      '/images/Hope3.JPG',
      '/images/Hope4.JPG'
    ]
  },
  { 
    id: 6, 
    title: 'Hypo', 
    coverImage: '/images/Hypo1.JPG',
    images: [
      '/images/Hypo1.JPG', 
      '/images/Hypo2.JPG'
    ]
  },
  { 
    id: 7, 
    title: 'Picnic', 
    coverImage: '/images/Picnic.JPG',
    images: [
      '/images/Picnic.JPG'
    ]
  },
  { 
    id: 8, 
    title: 'Safety', 
    coverImage: '/images/Safety1.JPG',
    images: [
      '/images/Safety3.JPG', 
      '/images/Safety2.JPG', 
      '/images/Safety1.JPG',
      '/images/Safety4.JPG'
    ]
  },
  { 
    id: 9, 
    title: 'Sparrow', 
    coverImage: '/images/Sparrow1.JPG',
    images: [
      '/images/Sparrow1.JPG', 
      '/images/Sparrow2.JPG', 
      '/images/Sparrow3.JPG'
    ]
  },
  { 
    id: 10, 
    title: 'Still Life', 
    coverImage: '/images/StillLife1.JPG',
    images: [
      '/images/StillLife1.JPG', 
      '/images/StillLife2.JPG', 
      '/images/StillLife3.JPG',
      '/images/StillLife4.JPG'
    ]
  },
  { 
    id: 11, 
    title: 'Waiting', 
    coverImage: '/images/Waiting1.png',
    images: [
      '/images/Waiting1.png', 
      '/images/Waiting2.JPG', 
      '/images/Waiting3.JPG'
    ]
  }
];

function Portfolio() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (artwork) => {
    setSelectedArtwork(artwork);
    setCurrentIndex(0);
  };

  const closeModal = () => {
    setSelectedArtwork(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === selectedArtwork.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? selectedArtwork.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Selected Works</h1>
      
      {/* The Grid */}
      <div className="image-grid">
        {artworks.map((art) => (
          <div className="grid-item" key={art.id} onClick={() => openModal(art)}>
            <img
              src={art.coverImage}
              alt={art.title}
              className="grid-image"
            />
            <div className="grid-overlay">
              <span>{art.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* The Modal (Slideshow) */}
      {selectedArtwork && (
        <div className="modal" onClick={closeModal}>
          <button className="close-btn" onClick={closeModal}>&times;</button>
          
          {selectedArtwork.images.length > 1 && (
            <button className="nav-btn prev" onClick={prevImage}>&#10094;</button>
          )}

          {/* This wrapper guarantees perfect centering */}
          <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedArtwork.images[currentIndex]} 
              alt={`${selectedArtwork.title} detail`} 
              className="modal-image" 
            />
            
            <div className="modal-info">
              <span className="modal-title">{selectedArtwork.title}</span>
              {selectedArtwork.images.length > 1 && (
                <span className="image-counter">
                  {currentIndex + 1} / {selectedArtwork.images.length}
                </span>
              )}
            </div>
          </div>

          {selectedArtwork.images.length > 1 && (
            <button className="nav-btn next" onClick={nextImage}>&#10095;</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Portfolio;