import Gallery from '../components/Gallery';
import { inMemory, inShadow } from '../data/artworks';

function Series({ title, statement, works }) {
  return (
    <main className="page">
      <h1>{title}</h1>
      <div className="prose">{statement.map((p, i) => <p key={i}>{p}</p>)}</div>
      <hr className="stitch" />
      <Gallery works={works} />
    </main>
  );
}

export const InMemory = () => (
  <Series
    title="In Memory"
    works={inMemory}
    statement={[
      'In Memory explores memory, identity, and community. Many of these paintings were inspired by the people and images around me.',
      'I overlay my paintings with embroidered motifs inspired by Sashiko, the Japanese art of visible mending. Sashiko holds that worn objects have beauty and that repairing them is an act of care. That idea of honoring what has been used parallels my wish to honor the moments that shape us.',
      'From afar the embroidery is nearly invisible. Up close, you can see minute details and color variations intertwining with the oil paint. The stitching shows that the moments captured have shaped and strengthened the individual, and that they deserve to be celebrated. Small moments may not seem to matter on their own, but together they are the fabric of the people and experiences that make us who we are.',
    ]}
  />
);

export const InShadow = () => (
  <Series
    title="In Shadow"
    works={inShadow}
    statement={[
      '[Write your In Shadow introduction here: what the series is about, what prompted it, and what you hope viewers take from it.]',
      '[Add a second paragraph on materials and process if you like.]',
    ]}
  />
);