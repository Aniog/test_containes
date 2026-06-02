import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const macroItems = [
  {
    id: 'micro-01',
    titleId: 'micro-title-01',
    descId: 'micro-desc-01',
    imgId: 'micro-img-01-b2c7f3',
    title: 'Fly Agaric',
    desc: 'The iconic red cap of Amanita muscaria emerges from leaf litter, dotted with white remnants of its veil.',
    category: 'Fungi',
    ratio: '1x1',
    width: '500',
    featured: true,
  },
  {
    id: 'micro-02',
    titleId: 'micro-title-02',
    descId: 'micro-desc-02',
    imgId: 'micro-img-02-e9a4d1',
    title: 'Dewdrop on Fern',
    desc: 'A single dewdrop suspended on a fern frond, refracting the entire forest within its sphere.',
    category: 'Water',
    ratio: '1x1',
    width: '500',
    featured: false,
  },
  {
    id: 'micro-03',
    titleId: 'micro-title-03',
    descId: 'micro-desc-03',
    imgId: 'micro-img-03-f5b8e2',
    title: 'Stag Beetle',
    desc: 'A stag beetle navigates decaying wood, its mandibles gleaming in the dappled light.',
    category: 'Insects',
    ratio: '1x1',
    width: '500',
    featured: false,
  },
  {
    id: 'micro-04',
    titleId: 'micro-title-04',
    descId: 'micro-desc-04',
    imgId: 'micro-img-04-a3d9c6',
    title: 'Bracket Fungus',
    desc: 'Layered shelf fungi growing from a dead trunk, their concentric rings recording years of growth.',
    category: 'Fungi',
    ratio: '3x2',
    width: '700',
    featured: true,
    wide: true,
  },
  {
    id: 'micro-05',
    titleId: 'micro-title-05',
    descId: 'micro-desc-05',
    imgId: 'micro-img-05-c1e7b4',
    title: 'Spider Web at Dawn',
    desc: 'An orb-weaver\'s web beaded with morning dew, a geometric marvel of silk engineering.',
    category: 'Insects',
    ratio: '1x1',
    width: '500',
    featured: false,
  },
  {
    id: 'micro-06',
    titleId: 'micro-title-06',
    descId: 'micro-desc-06',
    imgId: 'micro-img-06-d8f2a5',
    title: 'Moss Spore Capsules',
    desc: 'Delicate spore capsules of Polytrichum moss rise on slender stalks, ready to release their cargo.',
    category: 'Fungi',
    ratio: '1x1',
    width: '500',
    featured: false,
  },
  {
    id: 'micro-07',
    titleId: 'micro-title-07',
    descId: 'micro-desc-07',
    imgId: 'micro-img-07-b6c3e9',
    title: 'Caterpillar on Leaf',
    desc: 'A hairy caterpillar traverses a broad leaf, each bristle catching the filtered forest light.',
    category: 'Insects',
    ratio: '1x1',
    width: '500',
    featured: false,
  },
  {
    id: 'micro-08',
    titleId: 'micro-title-08',
    descId: 'micro-desc-08',
    imgId: 'micro-img-08-f4a1d7',
    title: 'Chanterelle Cluster',
    desc: 'Golden chanterelles push through the leaf litter, their wavy caps glowing like embers.',
    category: 'Fungi',
    ratio: '3x2',
    width: '700',
    featured: true,
    wide: true,
  },
  {
    id: 'micro-09',
    titleId: 'micro-title-09',
    descId: 'micro-desc-09',
    imgId: 'micro-img-09-e2b8c4',
    title: 'Rain on Leaf Surface',
    desc: 'Macro view of rain droplets beading on a hydrophobic leaf surface, perfect spheres of water.',
    category: 'Water',
    ratio: '1x1',
    width: '500',
    featured: false,
  },
];

const categories = ['All', 'Fungi', 'Insects', 'Water'];

function MacroCard({ item }) {
  return (
    <div
      className="group relative overflow-hidden border border-moss-mid bg-moss-dark"
      style={item.wide ? { gridColumn: 'span 2' } : {}}
    >
      <span id={item.titleId} className="sr-only">{item.title}</span>
      <span id={item.descId} className="sr-only">{item.desc}</span>

      <div className="relative overflow-hidden" style={{ aspectRatio: item.wide ? '16/7' : '1/1' }}>
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}]`}
          data-strk-img-ratio={item.ratio}
          data-strk-img-width={item.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {/* Dark vignette */}
        <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(15,26,23,0.8) 100%)' }}
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs tracking-widest uppercase font-body px-2 py-1 border border-bark-accent text-bark-accent bg-canopy-shadow/80">
            {item.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 border-t border-moss-mid">
        <h3 className="font-display text-fog-white text-lg font-bold tracking-wide leading-tight">
          {item.title}
        </h3>
        <p className="text-mist-grey text-xs mt-2 leading-relaxed font-body">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function MicroForest() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-forest-deep min-h-screen" ref={containerRef}>
      {/* Hero header */}
      <header className="relative px-6 py-20 md:py-28 border-b border-moss-mid overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(107,140,122,0.4) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(61,82,71,0.5) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-4xl">
          <p className="text-bark-accent text-xs tracking-[0.3em] uppercase font-body mb-4">
            Extreme Macro Photography
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-fog-white leading-none tracking-wide mb-6">
            Micro-Forest
          </h1>
          <div className="w-16 h-0.5 bg-bark-accent mb-6" />
          <p className="text-mist-grey text-lg md:text-xl font-body leading-relaxed max-w-2xl">
            The hidden world beneath the canopy. Mushrooms, insects, and dewdrops —
            a universe invisible to the passing eye, revealed through the lens.
          </p>
        </div>
      </header>

      {/* Intro text */}
      <section className="px-6 py-12 border-b border-moss-mid">
        <div className="max-w-3xl">
          <p className="text-fog-white text-base leading-loose font-body">
            At ground level, the forest reveals its most intricate architecture. Every fallen log
            becomes a city. Every dewdrop, a mirror. Every fungal thread, a network older than
            the trees themselves. These images were captured at magnifications between 1:1 and 5:1,
            using natural light and long exposures.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="p-4 md:p-6">
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {macroItems.map((item) => (
            <MacroCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-t border-moss-mid px-6 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '340+', label: 'Species Documented' },
            { value: '5:1', label: 'Max Magnification' },
            { value: '12', label: 'Forest Locations' },
          ].map(({ value, label }) => (
            <div key={label} className="border-l border-moss-mid pl-6 text-left">
              <p className="font-display text-4xl font-black text-fog-white">{value}</p>
              <p className="text-mist-grey text-xs tracking-widest uppercase font-body mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
