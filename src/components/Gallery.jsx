import { useState, useEffect } from 'react';
import { thumb, full, SITE } from '../data/artworks';

export default function Gallery({ works }) {
  const [open, setOpen] = useState(null);
  const [i, setI] = useState(0);
  const n = open?.images?.length || 0;
  const step = (d) => setI((x) => (x + d + n) % n);

  useEffect(() => {
    if (!open) return;
    const count = open.images.length;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setI((x) => (x + 1) % count);
      if (e.key === 'ArrowLeft') setI((x) => (x - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!works || !works.length) {
    return <p>New works are on the way. Check back soon.</p>;
  }

  const details = (w) => [w.medium, w.dimensions, w.year].filter(Boolean).join(', ');

  const renderPurchaseInfo = (w) => {
    if (!w.price && w.available === undefined) return null;

    const isNotForSale = w.price?.toLowerCase() === 'not for sale';
    const isSold = w.available === false || w.price?.toLowerCase() === 'sold';

    if (isNotForSale) {
      return <p><strong>Not for sale</strong></p>;
    }

    if (isSold) {
      return <p><strong>Sold</strong></p>;
    }

    return (
      <p>
        {w.price && <strong>{w.price} — </strong>}
        <a 
          className="btn" 
          href={w.buyUrl || `mailto:${SITE.email}?subject=Inquiry: ${encodeURIComponent(w.title)}`}
        >
          {w.buyUrl ? 'Buy this painting' : 'Inquire about this painting'}
        </a>
      </p>
    );
  };

  return (
    <>
      <div className="grid">
        {[...works].reverse().map((w) => (
          <button 
            className="card" 
            key={w.id} 
            onClick={() => { setOpen(w); setI(0); }}
          >
            <img src={thumb(w.images[0])} alt={w.title} loading="lazy" decoding="async" />
            <span>{w.title}</span>
            <small>{details(w)}</small>
          </button>
        ))}
      </div>

      {open && (
        <div className="modal" role="dialog" aria-label={open.title} onClick={() => setOpen(null)}>
          <button 
            className="close" 
            aria-label="Close" 
            onClick={(e) => { e.stopPropagation(); setOpen(null); }}
          >
            &times;
          </button>

          {n > 1 && (
            <button 
              className="nav prev" 
              aria-label="Previous image" 
              onClick={(e) => { e.stopPropagation(); step(-1); }}
            >
              &#10094;
            </button>
          )}

          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <img src={full(open.images[i])} alt={`${open.title}, view ${i + 1} of ${n}`} />
            <h2>
              {open.title}
              {n > 1 && <small> {i + 1} / {n}</small>}
            </h2>
            <p>{details(open)}</p>
            {renderPurchaseInfo(open)}
          </div>

          {n > 1 && (
            <button 
              className="nav next" 
              aria-label="Next image" 
              onClick={(e) => { e.stopPropagation(); step(1); }}
            >
              &#10095;
            </button>
          )}
        </div>
      )}
    </>
  );
}