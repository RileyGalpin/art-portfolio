import { full } from '../data/artworks';

// ---- EDIT ME: replace every [bracketed] placeholder. Empty lists/photos are hidden. ----
const PORTRAIT = '';           // e.g. 'riley-portrait.jpg' (put the file in public/images, then run the compressor)
const STUDIO = [];             // e.g. ['studio1.jpg', 'studio2.jpg']
const BIO = [
  "Riley Galpin is a mixed-media artist whose work explores the relationships between human presence, memory, and the passage of time. Working with acrylic and oil painting, embroidery, and occasionally beads, Riley combines traditional painting techniques with textile practices to add texture and symbolism. His current series, In Shadow, examines humanity's impact on the natural world, considering how human presence reshapes landscapes and alters the environments we inhabit. Through the interplay of paint, thread, and embellishment, the series reflects on the fleeting nature of human existence and the lasting marks we leave behind. Riley is based in Tallahassee, Florida, where he studies at Florida State University."
];

const ARTISTSTATEMENT = "As an artist, I am fascinated with the ideas of memory and shadow, both of which shift and transform depending on the perspective through which they are experienced. My recent series, “In Memory” and “In Shadow” reflect on how people shape one another and leave lasting impressions on the natural world. Through painted scenes overlaid with embroidered motifs and landscapes draped in shadow, I examine the relationships between presence and absence, permanence and impermanence, and the traces we leave behind. By combining traditional painting techniques with embroidery and other mixed media, I use material and texture to explore how our experiences, interactions, and presence become woven into the world around us.";

const LISTS = [
  [
    'Education', 
    [
      'Pure Math & Computer Science, Florida State University (2026)'
    ]
  ],
  [
    'Exhibitions', 
    [
      'Solo Exhibition, Tallahassee Main Library (May 2027)',
      'North Florida State Fair — "Double Infinity" (Nov 2026)',
      'HSF Excellence in the Visual Arts Exhibition — "Safety" (2026)',
      'FSU Interlocking Art Gala (2025)'
    ]
  ],
  [
    'Awards & Honors', 
    [
      'People\'s Choice & Honorable Mention, HSF Excellence in the Visual Arts Exhibition for "Safety" (2026)',
      '1st Place & College of Fine Arts Scholarship, FSU Interlocking Art Gala (2025)',
      'Scholastic Art & Writing Gold Key (2023 Art, 2022 Writing)'
    ]
  ],
  [
    'Publications & Press', 
    [
      'Cover Feature, FSU Kudzu Review Magazine Issue 71 (2023)'
    ]
  ],
];

export default function About() {
  return (
    <main className="page about">
      <h1>About</h1>
      <div className="about-top">
        <div className="prose">
          {BIO.map((p, i) => <p key={i}>{p}</p>)}
          <h2>Artists Statement</h2>
          <p>{ARTISTSTATEMENT}</p>
        </div>
        {PORTRAIT && <img src={full(PORTRAIT)} alt="Riley Galpin" loading="lazy" />}
      </div>
      {STUDIO.length > 0 && (
        <>
          <hr className="stitch" />
          <div className="studio">
            {STUDIO.map((s) => <img key={s} src={full(s)} alt="Inside the studio" loading="lazy" />)}
          </div>
        </>
      )}
      <hr className="stitch" />
      <div className="cv">
        {LISTS.map(([title, items]) => (
          <section key={title}>
            <h2>{title}</h2>
            <ul>
              {items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}