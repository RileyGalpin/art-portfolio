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
    id: 4, 
    title: 'Forgotten', 
    coverImage: '/images/Forgotten3.JPG',
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
    id: 8, 
    title: 'Safety', 
    coverImage: '/images/Safety3.JPG',
    images: [
      '/images/Safety3.JPG', 
      '/images/Safety2.JPG', 
      '/images/Safety1.JPG',
      '/images/Safety4.JPG'
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
  },
  { 
    id: 12, 
    title: 'Anna With Lillies', 
    coverImage: '/images/AnnaWithLillies1.jpeg',
    images: [
      '/images/AnnaWithLillies1.jpeg', 
      '/images/AnnaWithLillies2.jpeg', 
      '/images/AnnaWithLillies3.jpeg'
    ]
  },

  { 
    id: 13, 
    title: 'Kale With Corn Flowers', 
    coverImage: '/images/KaleWithCornFlowers1.jpeg',
    images: [
      '/images/KaleWithCornFlowers1.jpeg', 
      '/images/KaleWithCornFlowers2.jpeg', 
      '/images/KaleWithCornFlowers3.jpeg'
    ]
  },

  { 
    id: 14, 
    title: 'Lina With Roses', 
    coverImage: '/images/LinaWithRoses1.jpeg',
    images: [
      '/images/LinaWithRoses1.jpeg', 
      '/images/LinaWithRoses2.jpeg', 
      '/images/LinaWithRoses3.jpeg'
    ]
  },

  {
  id: 15, 
  title: 'Herring', 
  coverImage: '/images/Herring1.jpeg',
  images: [
    '/images/Herring1.jpeg', 
    '/images/Herring2.jpeg', 
    '/images/Herring3.jpeg'
  ]
},
{
  id: 18, 
  title: 'The Morning After', 
  coverImage: '/images/morningAfter1.jpeg',
  images: [
    '/images/morningAfter1.jpeg',
    '/images/morningAfter2.jpeg',
    '/images/morningAfter3.jpeg'
  ]
},
{
  id: 19, 
  title: 'Double Infinity', 
  coverImage: '/images/DoubleInfinity.JPG',
  images: [
    '/images/DoubleInfinity1.JPG',
    '/images/DoubleInfinity3.JPG'
  ]
},

{
  id: 20, 
  title: 'Patience Park', 
  coverImage: '/images/WakullaSprings.jpeg',
  images: [
    '/images/PatiencePark3.jpeg'
  ]
},
{
  id: 21, 
  title: 'Picking Flowers', 
  coverImage: '/images/PickingFlowers.JPG',
  images: [
    '/images/PickingFlowers2.JPG',
    '/images/PickingFlowers3.JPG'
  ]
},
{
  id: 22, 
  title: 'Wakulla Springs', 
  coverImage: '/images/q1p6o copy.jpeg',
  images: [
    '/images/WakullaSprings2.JPG',
    '/images/WakullaSprings3.JPG'
  ]
},
{
  id: 23, 
  title: 'Natures Song', 
  coverImage: '/images/pT1Nk.png',
  images: [
    '/images/YLLY7.jpeg'
    
  ]
},

{
  id: 24, 
  title: 'Lafayette Park', 
  coverImage: '/images/9aiwn.jpeg',
  images: [
    '/images/5kKwD.jpeg',
    
  ]
},

{
  id: 25, 
  title: 'Dreams', 
  coverImage: '/images/EAchq.png',
  images: [
    '/images/MBE3F.png',
    
  ]
},





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