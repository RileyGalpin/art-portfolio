// ---- EDIT ME: contact + form endpoints -------------------------------------
export const SITE = {
  name: 'Riley Galpin',
  email: 'rgalpinart@gmail.com', // swap for a professional address, e.g. hello@yourdomain.com
  instagram: 'https://www.instagram.com/rileygalpinart/',
  tiktok: 'https://www.tiktok.com/@rileygalpinart',
  formUrl: 'https://formspree.io/f/xqppjyll',      // free form backend: formspree.io
  newsletterUrl: 'https://YOUR-NEWSLETTER-SIGNUP-URL', // Mailchimp / Buttondown / Kit form action
  hero: 'DoubleInfinity.JPG',                          // big image on the home page
};
  
// ---- Image paths (keep original filenames in the data below) ----------------
const base = (n) => n.replace(/\.[^.]+$/, '');
export const thumb = (n) => `/images/optimized/thumbs/${encodeURI(base(n))}.webp`;
export const full = (n) => `/images/optimized/${encodeURI(base(n))}.webp`;

// ---- Artworks ---------------------------------------------------------------
const seq = (p, ext, k) => Array.from({ length: k }, (_, i) => `${p}${i + 1}.${ext}`);
const make = (series, extra = {}) => (id, title, images) =>
  ({ id, title, series, images, medium: 'Oil paint and embroidery', dimensions: '', year: '', ...extra });

export const inMemory = [
  make('in-memory', { medium: 'Oil paint and embroidery on canvas', dimensions: '30"x40"', price: '$3,500' })(
    1, 'Belonging', seq('Belonging', 'JPG', 3)
  ),
  make('in-memory', { medium: 'Acrylic paint and embroidery on canvas', dimensions: '11"x14"', available: false, price: 'Sold' })(
    4, 'Forgotten', ['Forgotten3.JPG', 'Forgotten1.JPG', 'Forgotten2.JPG', 'Forgotten4.JPG', 'Forgotten5.JPG', 'Forgotten6.JPG']
  ),
  make('in-memory', { medium: 'Oil paint and embroidery on canvas', dimensions: '30"x40"', price: '$5,000' })(
    5, 'Hope', seq('Hope', 'JPG', 4)
  ),
  make('in-memory', { medium: 'Oil paint and embroidery on canvas', dimensions: '30"x40"', price: '$3,500' })(
    8, 'Safety', ['Safety3.JPG', 'Safety2.JPG', 'Safety1.JPG', 'Safety4.JPG']
  ),
  make('in-memory', { medium: 'Acrylic paint and embroidery on canvas', dimensions: '16"x20"', price: '$250' })(
    11, 'Waiting', ['Waiting1.png', 'Waiting2.JPG', 'Waiting3.JPG']
  ),
  make('in-memory', { medium: 'Oil paint and embroidery on canvas', dimensions: '14"', price: '$300' })(
    12, 'Anna With Lillies', seq('AnnaWithLillies', 'jpeg', 3)
  ),
  make('in-memory', { medium: 'Oil paint and embroidery on canvas', dimensions: '14"', price: '$300' })(
    13, 'Kale With Corn Flowers', seq('KaleWithCornFlowers', 'jpeg', 3)
  ),
  make('in-memory', { medium: 'Oil paint and embroidery on canvas', dimensions: '14"', price: '$300' })(
    14, 'Lina With Roses', seq('LinaWithRoses', 'jpeg', 3)
  ),
  make('in-memory', { medium: 'Acrylic paint and embroidery on canvas', dimensions: '4.25"', price: '$75' })(
    15, 'Herring', seq('Herring', 'jpeg', 3)
  ),
  make('in-memory', { medium: 'Acrylic paint and embroidery on canvas', dimensions: '9"x12"', price: 'Not for sale' })(
    18, 'The Morning After', seq('morningAfter', 'jpeg', 3)
  ),
  make('in-memory', { medium: 'Oil paint and embroidery on canvas', dimensions: '16"x20"', price: 'Not for sale' })(
    19, 'Double Infinity', ['DoubleInfinity.JPG', 'DoubleInfinity1.JPG', 'DoubleInfinity3.JPG']
  ),
  make('in-memory', { medium: 'Oil paint on canvas', dimensions: '36"x24"', price: '$700' })(
    20, 'Patience Park', ['WakullaSprings.png', 'PatiencePark3.jpeg']
  ),
  make('in-memory', { medium: 'Acrylic paint and embroidery on canvas', dimensions: '16"x20"', price: '$500' })(
    21, 'Picking Flowers', ['PickingFlowers.JPG', 'PickingFlowers2.JPG', 'PickingFlowers3.JPG']
  ),
  make('in-memory', { medium: 'Acrylic paint on canvas', dimensions: '20"x16"', price: '$700' })(
    22, 'Wakulla Springs', ['q1p6o copy.jpeg', 'WakullaSprings2.JPG', 'WakullaSprings3.JPG']
  ),
  make('in-memory', { medium: 'Oil paint and embroidery on canvas', dimensions: '10"x10"', price: '$175' })(
    23, 'Natures Song', ['pT1Nk.png', 'YLLY7.jpeg']
  ),
  make('in-memory', { medium: 'Oil paint and embroidery on canvas', dimensions: '20"x16"', price: '$500' })(
    24, 'Lafayette Park', ['9aiwn.jpeg', '5kKwD.jpeg']
  ),
  make('in-memory', { medium: 'Beads, acrylic paint on canvas', dimensions: '8"x8"', price: '$200' })(
    25, 'Dreams', ['EAchq.png', 'MBE3F.png']
  ),
];

export const shadow = (id, title, images, extra) => make('in-shadow', extra)(id, title, images);
export const inShadow = [];

export const newest = (k = 3) => [...inShadow, ...inMemory].sort((a, b) => b.id - a.id).slice(0, k);