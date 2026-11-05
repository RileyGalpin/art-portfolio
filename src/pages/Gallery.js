import { useState, useEffect } from 'react';
import { thumb, full, SITE } from '../data/artworks';

export default function Gallery({ works }) {
  const [open, setOpen] = useState(null);
  const [i, setI] = useState(0);
  const n = open ? open.images.length : 0;
  const step = (d) => setI((x) => (x + d + n) % n);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!works.length) return <p>New works are on the way. Check back soon.</p>;
  const details = (w) => [w.medium, w.dimensions, w.year].filter(Boolean).join(', ');
  const forSale = (w) => w.price !== undefined || w.available !== undefined;

  return (
    <>
      <div className="grid">
        {[...works].reverse().map((w) => (
          <button className="card" key={w.id} onClick={() => { setOpen(w); setI(0); }}>
            <img src={thumb(w.images[0])} alt={w.title} loading="lazy" decoding="async" />
            <span>{w.title}</span>
            <small>{details(w)}</small>
          </button>
        ))}
      </div>

      {open && (
        <div className="modal" role="dialog" aria-label={open.title} onClick={() => setOpen(null)}>
          <button className="close" aria-label="Close" onClick={() => setOpen(null)}>&times;</button>
          {n > 1 && <button className="nav prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); step(-1); }}>&#10094;</button>}
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <img src={full(open.images[i])} alt={`${open.title}, image ${i + 1}`} />
            <h2>{open.title}{n > 1 && <small> {i + 1} / {n}</small>}</h2>
            <p>{details(open)}</p>
            {forSale(open) && (
              <p>
                {open.price && <strong>{open.price} </strong>}
                {open.available === false
                  ? 'Sold'
                  : <a className="btn" href={open.buyUrl || `mailto:${SITE.email}?subject=Inquiry: ${open.title}`}>
                      {open.buyUrl ? 'Buy this painting' : 'Inquire about this painting'}
                    </a>}
              </p>
            )}
          </div>
          {n > 1 && <button className="nav next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); step(1); }}>&#10095;</button>}
        </div>
      )}
    </>
  );
}