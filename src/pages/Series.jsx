import Gallery from '../components/Gallery';
import { inMemory, inShadow } from '../data/artworks';

// Works to completely filter out/remove from display
const excludedTitles = new Set(['Eclipse', 'Still Life']);

// Combine all works, excluding the removed pieces
const allWorks = [...inMemory, ...inShadow].filter(
  (w) => !excludedTitles.has(w.title)
);

// Explicit titles designated for "In Memory"
const inMemoryTitles = new Set([
  'Kale With Corn Flowers',
  'Lina With Roses',
  'Anna With Lillies',
  'Safety',
  'Belonging',
  'Hope',
  'The Morning After'
]);

const memoryWorks = allWorks.filter((w) => inMemoryTitles.has(w.title));
const shadowWorks = allWorks.filter((w) => !inMemoryTitles.has(w.title));

function Series({ title, statement, works }) {
  return (
    <main className="page">
      <h1>{title}</h1>
      <div className="prose">
        {statement.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <hr className="stitch" />
      <Gallery works={works} />
    </main>
  );
}

export const InMemory = () => (
  <Series
    title="In Memory"
    works={memoryWorks}
    statement={[
      '“In Memory” is a reflection on our lasting impacts on others. These paintings are composed of oil paint and embroidery on canvas. I was inspired to overlay my paintings with embroidered motifs in the style of Sashiko, the art of Japanese visible mending. Sashiko carries the idea that worn objects have beauty and that repairing them is an act of care. Through embroidery overlaid on painted everyday scenes, these paintings explore how memories, change, heal, and shape others for far longer than the real life experience lasts. Showing how as a whole small moments may not seem to matter, but they are part of the fabric of people and experiences that make us who we are.'
    ]}
  />
);

export const InShadow = () => (
  <Series
    title="In Shadow"
    works={shadowWorks}
    statement={[
      '"In Shadow" is a reflection on humanity\'s impact on the world, and the world’s impact on humanity. The paintings of this series are composed mainly of landscapes with shadows of people as the subjects and are created with acrylic or oil paint, embroidery, and occasionally beads on canvas. Each piece touches on the sometimes beautiful, sometimes destructive impacts humans have made on the beautiful landscape beneath, while emphasizing through use of shadow that our presence here is temporary. Through this series I hope to call for accountability of our actions while highlighting just how beautiful the natural world is.',
      'The messages behind this series are emphasized through use of mixed-media techniques. The overlaid embroidery and beading both emphasizes our ability to mend what we have hurt in the environment and nature\'s inherent ability to heal us.'
    ]}
  />
);