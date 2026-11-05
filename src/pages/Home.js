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
            I paint in oil and stitch embroidery over the surface, drawing on Sashiko, the Japanese
            art of visible mending. My work looks at memory, identity, and community, and at how small
            moments hold a person together.
          </p>
          <Link className="btn" to="/about">About my practice</Link>
        </div>
        <img src={full(SITE.hero)} alt="Featured painting by Riley Galpin" fetchpriority="high" />
      </section>

      <div className="page">
        <h2>Two series</h2>
        <div className="series-links">
          <Link to="/in-memory"><strong>In Memory</strong><span>Paintings of the people and places that shaped me.</span></Link>
          <Link to="/in-shadow"><strong>In Shadow</strong><span>The newest series, with originals available.</span></Link>
        </div>

        <h2>Newest work</h2>
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