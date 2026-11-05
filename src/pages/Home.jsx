import { Link } from 'react-router-dom';
import { SITE, full, thumb, newest } from '../data/artworks';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <img className="logo" src="/images/optimized/logo.webp" alt="" />
          <h1>{SITE.name}</h1>
          <hr className="stitch" />
          <p className="prose">
            Riley Galpin is a mixed-media artist whose work explores the relationships between human presence, 
            memory, and the passage of time through working with acrylic and oil painting, embroidery, and beads.
          </p>
          <Link className="btn" to="/about">About my practice</Link>
        </div>
        <img src={full('DoubleInfinity.JPG')} alt="Featured painting: Double Infinity by Riley Galpin" fetchPriority="high" />
      </section>

      <div className="page">
        <h2>Series</h2>
        <div className="series-links">
          <Link to="/in-memory"><strong>In Memory</strong><span>Paintings of the people and places that shaped me.</span></Link>
          <Link to="/in-shadow"><strong>In Shadow</strong><span>The newest series, with originals available.</span></Link>
        </div>

        <h2>Newest Works</h2>
        <div className="grid">
          {newest(3).map((w) => (
            <Link className="card" key={w.id} to={`/${w.series}`}>
              <img src={thumb(w.images[0])} alt={w.title} loading="lazy" decoding="async" />
              <span>{w.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}