import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const masonryItems = [
  {
    id: 'roots-01',
    titleId: 'roots-title-01',
    descId: 'roots-desc-01',
    imgId: 'roots-img-01-a3f9b2',
    title: 'Ancient Oak Bark',
    desc: 'Centuries of growth etched into bark — deep fissures and mossy crevices of an ancient oak trunk.',
    tall: true,
    ratio: '2x3',
    width: '600',
  },
  {
    id: 'roots-02',
    titleId: 'roots-title-02',
    descId: 'roots-desc-02',
    imgId: 'roots-img-02-c7d1e4',
    title: 'Mossy Forest Floor',
    desc: 'A carpet of emerald moss blanketing the forest floor, soft and dense after morning rain.',
    tall: false,
    ratio: '3x2',
    width: '600',
  },
  {
    id: 'roots-03',
    titleId: 'roots-title-03',
    descId: 'roots-desc-03',
    imgId: 'roots-img-03-f2a8c5',
    title: 'Gnarled Root System',
    desc: 'Massive exposed roots sprawling across the earth, anchoring a thousand-year-old tree.',
    tall: false,
    ratio: '3x2',
    width: '600',
  },
  {
    id: 'roots-04',
    titleId: 'roots-title-04',
    descId: 'roots-desc-04',
    imgId: 'roots-img-04-b9e3d7',
    title: 'Lichen-Covered Stone',
    desc: 'Grey stone colonised by slow-growing lichen, a testament to geological time.',
    tall: true,
    ratio: '2x3',
    width: '600',
  },
  {
    id: 'roots-05',
    titleId: 'roots-title-05',
    descId: 'roots-desc-05',
    imgId: 'roots-img-05-e1f6a9',
    title: 'Fallen Giant',
    desc: 'A fallen redwood trunk reclaimed by the forest, now a nurse log for new life.',
    tall: false,
    ratio: '3x2',
    width: '600',
  },
  {
    id: 'roots-06',
    titleId: 'roots-title-06',
    descId: 'roots-desc-06',
    imgId: 'roots-img-06-d4c2b8',
    title: 'Twisted Trunk',
    desc: 'A spiralling trunk reaching upward through the dense canopy, shaped by decades of wind.',
    tall: false,
    ratio: '3x2',
    width: '600',
  },
  {
    id: 'roots-07',
    titleId: 'roots-title-07',
    descId: 'roots-desc-07',
    imgId: 'roots-img-07-a7f3e1',
    title: 'Forest Understory',
    desc: 'Ferns and saplings thriving in the filtered light beneath the old-growth canopy.',
    tall: true,
    ratio: '2x3',
    width: '600',
  },
  {
    id: 'roots-08',
    titleId: 'roots-title-08',
    descId: 'roots-desc-08',
    imgId: 'roots-img-08-c9b5d2',
    title: 'Bark Texture Close-Up',
    desc: 'Extreme detail of deeply furrowed bark, a landscape in miniature.',
    tall: false,
    ratio: '3x2',
    width: '600',
  },
  {
    id: 'roots-09',
    titleId: 'roots-title-09',
    descId: 'roots-desc-09',
    imgId: 'roots-img-09-f8e4a6',
    title: 'Root Tangle',
    desc: 'An intricate web of surface roots from competing trees, intertwined over centuries.',
    tall: false,
    ratio: '3x2',
    width: '600',
  },
];

function FogCard({ item }) {
  return (
    <div
      className="group relative overflow-hidden border border-moss-mid bg-moss-dark"
      style={item.tall ? { gridRow: 'span 2' } : {}}
    >
      {/* Hidden text for image query */}
      <span id={item.titleId} className="sr-only">{item.title}</span>
      <span id={item.descId} className="sr-only">{item.desc}</span>

      {/* Image */}
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio={item.ratio}
        data-strk-img-width={item.width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        style={{ minHeight: '200px' }}
      />

      {/* Fog overlay — clears on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 pointer-events-none animate-fog-drift"
        style={{
          background: 'linear-gradient(135deg, rgba(26,36,33,0.82) 0%, rgba(15,26,23,0.65) 50%, rgba(26,36,33,0.78) 100%)',
        }}
      />

      {/* Caption — fades in on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
        style={{ background: 'linear-gradient(to top, rgba(15,26,23,0.95) 0%, transparent 100%)' }}
      >
        <h3 className="font-display text-fog-white text-base font-bold tracking-wide leading-tight">
          {item.title}
        </h3>
        <p className="text-mist-grey text-xs mt-1 leading-relaxed font-body">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Roots() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-forest-deep min-h-screen" ref={containerRef}>
      {/* Hero header */}
      <header className="relative px-6 py-20 md:py-28 border-b border-moss-mid overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(61,82,71,0.3) 40px, rgba(61,82,71,0.3) 41px)',
          }}
        />
        <div className="relative max-w-4xl">
          <p className="text-bark-accent text-xs tracking-[0.3em] uppercase font-body mb-4">
            Old-Growth Photography
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-fog-white leading-none tracking-wide mb-6">
            The Roots
          </h1>
          <div className="w-16 h-0.5 bg-bark-accent mb-6" />
          <p className="text-mist-grey text-lg md:text-xl font-body leading-relaxed max-w-2xl">
            Where the forest meets the earth. Ancient trunks, mossy floors, and the slow
            architecture of centuries — captured in stillness.
          </p>
        </div>
      </header>

      {/* Masonry grid */}
      <section className="p-4 md:p-6">
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '240px',
          }}
        >
          {masonryItems.map((item) => (
            <FogCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Bottom quote */}
      <section className="px-6 py-20 border-t border-moss-mid text-center">
        <blockquote className="max-w-2xl mx-auto">
          <p className="font-display text-2xl md:text-3xl italic text-fog-white leading-relaxed">
            "The clearest way into the Universe is through a forest wilderness."
          </p>
          <cite className="block mt-6 text-mist-grey text-sm tracking-widest uppercase font-body">
            — John Muir
          </cite>
        </blockquote>
      </section>
    </div>
  );
}
