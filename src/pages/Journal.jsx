import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import DeckleEdge from '@/components/journal/DeckleEdge';

const entries = [
  {
    id: 'on-paper',
    issue: 'No. 01',
    date: 'March 2024',
    category: 'Essay',
    title: 'On the Weight of Paper',
    subtitle: 'Why the substrate is never neutral',
    lead: 'There is a reason we speak of "weighty" matters. Paper has always carried meaning beyond its content — the choice of stock is itself a statement about how seriously you take what you are saying.',
    body: `When a letter arrives on thin, bright-white copier paper, we read it differently than one written on thick, cream-coloured laid stock. The message may be identical. The experience is not.

This is not snobbery. It is semiotics. Every material choice communicates something about the sender's relationship to the recipient, to the occasion, and to the act of communication itself.

At PULP, we have spent years thinking about this. We have watched clients choose papers instinctively — reaching for the heavier stock, the rougher texture, the one that feels like it means something. They cannot always articulate why. But they know.

The weight of paper is not measured in grams per square metre alone. It is measured in the pause before you open the envelope. In the way you hold the card after reading it. In whether you keep it.`,
    imgId: 'journal-paper-a1b2c3',
    titleId: 'journal-paper-title',
    descId: 'journal-paper-desc',
    imgRatio: '16x9',
    imgWidth: '1200',
  },
  {
    id: 'foil-alchemy',
    issue: 'No. 02',
    date: 'January 2024',
    category: 'Craft Notes',
    title: 'The Alchemy of Foil',
    subtitle: 'Gold is not decoration. It is declaration.',
    lead: 'Foil stamping is one of the oldest forms of luxury printing. The process has changed little in a century. The effect has never been replicated by any digital means.',
    body: `The die is machined from brass. It is heated to between 90 and 130 degrees Celsius — the exact temperature depends on the foil, the paper, and the ambient humidity of the studio that day. The foil roll is positioned. The press descends.

In that fraction of a second, the metallic layer transfers from carrier film to paper. The result is not printed. It is bonded. The foil becomes part of the surface.

What makes foil irreplaceable is its relationship with light. Unlike ink, which absorbs and reflects light in a fixed way, foil is specular — it reflects light directionally, like a mirror. As you tilt a foil-stamped card, the gold shifts from bright to dark, from warm to cool.

This is why foil cannot be faked. A laser printer can approximate the colour of gold. It cannot approximate the physics of it.`,
    imgId: 'journal-foil-d4e5f6',
    titleId: 'journal-foil-title',
    descId: 'journal-foil-desc',
    imgRatio: '3x2',
    imgWidth: '900',
  },
  {
    id: 'slow-making',
    issue: 'No. 03',
    date: 'October 2023',
    category: 'Studio Life',
    title: 'In Defence of Slow Making',
    subtitle: 'Against the tyranny of turnaround times',
    lead: 'We live in an age that has confused speed with quality. The fastest option is rarely the best one. The best option is rarely the fastest.',
    body: `Our Heidelberg press was built in 1962. It has been maintained, adjusted, and loved for over sixty years. It does not have a USB port. It does not connect to the internet. It requires a trained operator who understands its particular temperament.

This is not nostalgia. This is craft.

When we tell a client that their wedding invitations will take six weeks, we are not apologising. We are explaining that six weeks is what it takes to do this properly. To proof the design. To select the paper. To mix the ink to the exact Pantone reference. To run the press at the right speed. To inspect every sheet.

The alternative — faster, cheaper, digital — exists. We are not it. We are the other thing: the thing you choose when the occasion demands that the object outlast the moment.`,
    imgId: 'journal-slow-g7h8i9',
    titleId: 'journal-slow-title',
    descId: 'journal-slow-desc',
    imgRatio: '4x3',
    imgWidth: '800',
  },
  {
    id: 'japanese-paper',
    issue: 'No. 04',
    date: 'July 2023',
    category: 'Materials',
    title: 'Notes from Echizen',
    subtitle: 'On visiting Japan\'s oldest paper-making village',
    lead: 'Echizen has been making washi for over 1,500 years. The paper produced there is not a product. It is a practice — one that connects the maker to a lineage of makers stretching back to the seventh century.',
    body: `The process begins with kozo — the inner bark of the paper mulberry tree. It is harvested in winter, steamed, stripped, and beaten until the fibres separate into a slurry. This slurry is mixed with water and a natural mucilage called neri, which slows the drainage and allows the papermaker to control the distribution of fibres.

The mould is dipped into the vat and lifted in a single, fluid motion. The papermaker rocks it back and forth, side to side, building up layers of fibre in a process called nagashi-zuki. The sheet is then pressed, dried on wooden boards in the sun, and inspected.

A skilled papermaker in Echizen can produce perhaps 200 sheets in a day. Each one is slightly different. Each one is, in some sense, unrepeatable.

We use Echizen washi for our most significant commissions. When a client holds one of these pieces, they are holding something that connects them — however tenuously — to that tradition.`,
    imgId: 'journal-japan-j1k2l3',
    titleId: 'journal-japan-title',
    descId: 'journal-japan-desc',
    imgRatio: '3x4',
    imgWidth: '600',
  },
];

function JournalEntry({ entry, index }) {
  const isEven = index % 2 === 0;

  return (
    <article className="py-20">
      {/* Entry header */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs tracking-[0.4em] text-gold uppercase">
            {entry.issue}
          </span>
          <span className="w-8 h-px bg-ink/20" />
          <span className="font-mono text-xs tracking-widest text-ink-faint uppercase">
            {entry.category}
          </span>
          <span className="w-8 h-px bg-ink/20" />
          <span className="font-mono text-xs tracking-widest text-ink-faint">
            {entry.date}
          </span>
        </div>

        <h2
          id={entry.titleId}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-tight mb-3"
        >
          {entry.title}
        </h2>
        <p className="font-display italic text-xl text-ink-muted">
          {entry.subtitle}
        </p>
      </div>

      {/* Image */}
      <div className={`max-w-5xl mx-auto px-6 md:px-16 lg:px-24 mb-10 ${entry.imgRatio === '3x4' ? 'max-w-sm' : ''}`}>
        <div className={`rounded-2xl overflow-hidden shadow-neu ${
          entry.imgRatio === '16x9' ? 'aspect-[16/9]' :
          entry.imgRatio === '3x2' ? 'aspect-[3/2]' :
          entry.imgRatio === '4x3' ? 'aspect-[4/3]' :
          'aspect-[3/4] max-w-sm'
        }`}>
          <img
            alt={entry.title}
            data-strk-img-id={entry.imgId}
            data-strk-img={`[${entry.descId}] [${entry.titleId}] [journal-page-title]`}
            data-strk-img-ratio={entry.imgRatio}
            data-strk-img-width={entry.imgWidth}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Body text — editorial wide margins */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
          {/* Lead / pull quote */}
          <div className="md:pt-1">
            <p
              id={entry.descId}
              className="font-display text-lg italic text-ink-muted leading-relaxed pl-5"
              style={{ borderLeft: '3px solid #C9A84C' }}
            >
              {entry.lead}
            </p>
          </div>

          {/* Body */}
          <div className="space-y-5">
            {entry.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-base text-ink-muted leading-relaxed font-light">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-paper min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Writing
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1
              id="journal-page-title"
              className="font-display text-6xl md:text-7xl font-light text-ink leading-none"
            >
              Journal
            </h1>
            <p className="text-sm text-ink-muted max-w-xs leading-relaxed font-light">
              Essays, craft notes, and observations from the studio on the art and practice of fine printing.
            </p>
          </div>
        </div>
      </section>

      {/* Entries with deckle edge dividers */}
      {entries.map((entry, index) => (
        <div key={entry.id}>
          {/* Deckle edge divider between entries */}
          {index > 0 && (
            <div className="relative">
              <div className="bg-paper-mid h-16 flex items-center justify-center">
                <span className="font-mono text-xs tracking-[0.4em] text-ink-faint uppercase">
                  ✦
                </span>
              </div>
              <DeckleEdge className="-mt-1" />
            </div>
          )}

          <JournalEntry entry={entry} index={index} />

          {/* Bottom deckle after each entry except last */}
          {index < entries.length - 1 && (
            <div className="relative">
              <DeckleEdge flip />
              <div className="bg-paper-mid h-4" />
            </div>
          )}
        </div>
      ))}

      {/* Subscribe section */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-paper shadow-neu-lg p-10 md:p-14 text-center">
            <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">
              Subscribe
            </p>
            <h2 className="font-display text-4xl font-light text-ink mb-3">
              Notes from the Studio
            </h2>
            <p className="text-sm text-ink-muted max-w-sm mx-auto leading-relaxed mb-8">
              Occasional essays on paper, print, and the art of making things by hand. No frequency promises.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 rounded-xl bg-paper shadow-neu-pressed text-ink text-sm font-mono placeholder:text-ink-faint focus:outline-none"
              />
              <button className="px-6 py-3 rounded-xl bg-paper shadow-neu text-ink text-xs font-mono tracking-widest uppercase hover:shadow-neu-pressed transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
