import React, { useState } from 'react';

// Your artwork data remains the same
const artworks = [
  { 
    id: 1, 
    title: 'Hope', 
    coverImage: '/images/hope.jpeg',
    images: [
      '/images/hope.jpeg', 
      'https://via.placeholder.com/800x800?text=Hope+Detail+1', 
      'https://via.placeholder.com/800x800?text=Hope+Detail+2'
    ]
  },
  { 
    id: 2, 
    title: 'Belonging', 
    coverImage: '/images/belonging.jpeg',
    images: [
      '/images/belonging.jpeg', 
      'https://via.placeholder.com/800x800?text=Belonging+Detail+1'
    ]
  },
  { 
    id: 3, 
    title: 'Safety', 
    coverImage: '/images/safety.jpeg',
    images: [
      '/images/safety.jpeg', 
      'https://via.placeholder.com/800x800?text=Safety+Detail+1',
      'https://via.placeholder.com/800x800?text=Safety+Detail+2',
      'https://via.placeholder.com/800x800?text=Safety+Detail+3'
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