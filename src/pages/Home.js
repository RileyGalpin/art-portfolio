import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <div className="bio-section">
        
        <div className="bio-image-wrapper">
          <img 
            src="/images/logo.jpg" 
            alt="Artist Logo" 
            className="profile-pic"
          />
        </div>

        <div className="bio-text">
          <h1 className="artist-name">Riley Galpin</h1>
          <div className="accent-line"></div>
          <p className="artist-statement">
            I am an artist specializing in mixed media oil paint with overlayed embroidery. 
            My work explores themes of memories, identity, and community. I draw inspiration 
            from the world around me and strive to capture emotion in every piece.
          </p>
          
          <div className="contact-wrapper">
            <h3>Connect</h3>
            <ul className="contact-list">
              <li><a href="mailto:rgalpinart@gmail.com">Email</a></li>
              <li><a href="https://www.instagram.com/rileygalpinart/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@rileygalpinart" target="_blank" rel="noreferrer">TikTok</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;