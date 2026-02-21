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
            My work explores themes of memories, identity, and community. Many of my artworks, including my current collection,
             “In Memory,” have been inspired by the people and images surrounding me.
             I was inspired to overlay my paintings with embroidered motifs by the style of Sashiko, the art of Japanese visible mending. 
             Sashiko carries the idea that worn objects have beauty and that repairing them is an act of care.This idea of repair,
              honoring what has been used, parallels my desire to honor the moments that shape us.
              From afar the embroidery is nearly invisible, but up close one can see the minute details and color variations intertwining with the oil-paint.
               The Sashiko shows that the moments captured have shaped and strengthened the individual and should be celebrated.
               Showing how as a whole small moments may not seem to matter, but they are part of the fabric of people and experiences that make us who we are. 



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