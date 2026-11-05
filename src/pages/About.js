import { full } from '../data/artworks';

// ---- EDIT ME: replace every [bracketed] placeholder. Empty lists/photos are hidden. ----
const PORTRAIT = '';           // e.g. 'riley-portrait.jpg' (put the file in public/images, then run the compressor)
const STUDIO = [];             // e.g. ['studio1.jpg', 'studio2.jpg']
const BIO = [
  'Riley Galpin is an artist working in mixed-media oil paint with overlaid embroidery. Her work explores memory, identity, and community.',
  '[Add 1–2 sentences of personal background: where you grew up, how you started painting.]',
];
const PHILOSOPHY = 'I believe worn things are beautiful and that mending them is an act of care. Sashiko taught me that repair can honor what has been used, and I bring that idea to the moments we usually overlook.';
const PRACTICE = 'Each piece begins as an oil painting drawn from people and images around me. I then stitch embroidered motifs over the surface, so the thread and the paint read as one.';
const LISTS = [
  ['Education', ['[Degree, school, year]']],
  ['Exhibitions', ['[Show title, venue, city, year]']],
  ['Awards', ['[Award, organization, year]']],
  ['Publications and press', ['[Publication, title, year]']],
];

export default function About() {
  return (
    <main className="page about">
      <h1>About</h1>
      <div className="about-top">
        <div className="prose">
          {BIO.map((p, i) => <p key={i}>{p}</p>)}
          <h2>Philosophy</h2><p>{PHILOSOPHY}</p>
          <h2>Practice</h2><p>{PRACTICE}</p>
        </div>
        {PORTRAIT && <img src={full(PORTRAIT)} alt="Riley Galpin" loading="lazy" />}
      </div>
      {STUDIO.length > 0 && (
        <>
          <hr className="stitch" />
          <div className="studio">{STUDIO.map((s) => <img key={s} src={full(s)} alt="Inside the studio" loading="lazy" />)}</div>
        </>
      )}
      <hr className="stitch" />
      <div className="cv">
        {LISTS.map(([title, items]) => (
          <section key={title}>
            <h2>{title}</h2>
            <ul>{items.map((x) => <li key={x}>{x}</li>)}</ul>
          </section>
        ))}
      </div>
    </main>
  );
}