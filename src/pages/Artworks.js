// ---- EDIT ME: contact + form endpoints -------------------------------------
export const SITE = {
    name: 'Riley Galpin',
    email: 'rgalpinart@gmail.com', // swap for a professional address, e.g. hello@yourdomain.com
    instagram: 'https://www.instagram.com/rileygalpinart/',
    tiktok: 'https://www.tiktok.com/@rileygalpinart',
    formUrl: 'https://formspree.io/f/YOUR_FORM_ID',      // free form backend: formspree.io
    newsletterUrl: 'https://YOUR-NEWSLETTER-SIGNUP-URL', // Mailchimp / Buttondown / Kit form action
    hero: 'Forgotten3.JPG',                               // big image on the home page
  };
  
  // ---- Image paths (keep original filenames in the data below) ----------------
  const base = (n) => n.replace(/\.[^.]+$/, '');
  export const thumb = (n) => `/images/optimized/thumbs/${encodeURI(base(n))}.webp`;
  export const full = (n) => `/images/optimized/${encodeURI(base(n))}.webp`;
  
  // ---- Artworks ---------------------------------------------------------------
  // Fields: title, medium, dimensions, year. In Shadow also: price, available, buyUrl.
  // Empty fields are hidden on the site, so fill them in as you go.
  const seq = (p, ext, k) => Array.from({ length: k }, (_, i) => `${p}${i + 1}.${ext}`);
  const make = (series, extra = {}) => (id, title, images) =>
    ({ id, title, series, images, medium: 'Oil paint and embroidery', dimensions: '', year: '', ...extra });
  const mem = make('in-memory');
  
  export const inMemory = [
    mem(1, 'Belonging', seq('Belonging', 'JPG', 3)),
    mem(2, 'Eclipse', seq('Eclipse', 'JPG', 2)),
    mem(4, 'Forgotten', ['Forgotten3.JPG', 'Forgotten1.JPG', 'Forgotten2.JPG', 'Forgotten4.JPG', 'Forgotten5.JPG', 'Forgotten6.JPG']),
    mem(5, 'Hope', seq('Hope', 'JPG', 4)),
    mem(8, 'Safety', ['Safety3.JPG', 'Safety2.JPG', 'Safety1.JPG', 'Safety4.JPG']),
    mem(10, 'Still Life', seq('StillLife', 'JPG', 4)),
    mem(11, 'Waiting', ['Waiting1.png', 'Waiting2.JPG', 'Waiting3.JPG']),
    mem(12, 'Anna With Lillies', seq('AnnaWithLillies', 'jpeg', 3)),
    mem(13, 'Kale With Corn Flowers', seq('KaleWithCornFlowers', 'jpeg', 3)),
    mem(14, 'Lina With Roses', seq('LinaWithRoses', 'jpeg', 3)),
    mem(15, 'Herring', seq('Herring', 'jpeg', 3)),
    mem(18, 'The Morning After', seq('morningAfter', 'jpeg', 3)),
    mem(19, 'Double Infinity', ['DoubleInfinity.JPG', 'DoubleInfinity1.JPG', 'DoubleInfinity3.JPG']),
    mem(20, 'Patience Park', ['WakullaSprings.png', 'PatiencePark3.jpeg']),
    mem(21, 'Picking Flowers', ['PickingFlowers.JPG', 'PickingFlowers2.JPG', 'PickingFlowers3.JPG']),
    mem(22, 'Wakulla Springs', ['q1p6o copy.jpeg', 'WakullaSprings2.JPG', 'WakullaSprings3.JPG']),
    mem(23, 'Natures Song', ['pT1Nk.png', 'YLLY7.jpeg']),
    mem(24, 'Lafayette Park', ['9aiwn.jpeg', '5kKwD.jpeg']),
    mem(25, 'Dreams', ['EAchq.png', 'MBE3F.png']),
  ];
  
  // In Shadow: add pieces here with ids above 25 so they count as newest. Example:
  // shadow(26, 'Title', ['Title1.JPG', 'Title2.JPG'], { year: '2026', dimensions: '24 x 36 in', price: '$1,200', available: true, buyUrl: 'https://...' }),
  const shadow = (id, title, images, extra) => make('in-shadow', extra)(id, title, images);
  export const inShadow = [];
  
  export const newest = (k = 3) => [...inShadow, ...inMemory].sort((a, b) => b.id - a.id).slice(0, k);