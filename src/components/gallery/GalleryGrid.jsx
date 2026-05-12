import { useState, useEffect, useRef } from 'react';
import { Maximize2, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const phenomena = [
  {
    id: 'aurora-borealis',
    title: 'Aurora Borealis',
    category: 'Atmospheric',
    accent: '#34d399',
    imgId: 'gallery-aurora-2f8c4a',
    imgQuery: 'vibrant green blue aurora borealis northern lights polar landscape night sky',
    description:
      'Solar wind particles collide with atmospheric gases at the magnetic poles, exciting electrons that emit photons as they return to ground state. Oxygen produces green and red; nitrogen produces blue and purple.',
    physics: 'Plasma physics · Magnetic field lines · Electron excitation',
  },
  {
    id: 'solar-eclipse',
    title: 'Total Solar Eclipse',
    category: 'Orbital Mechanics',
    accent: '#f59e0b',
    imgId: 'gallery-eclipse-7d3b1e',
    imgQuery: 'total solar eclipse corona diamond ring effect dark sky',
    description:
      'A perfect cosmic coincidence: the Moon is 400× smaller than the Sun, but also 400× closer. During totality, the solar corona — the Sun\'s outer atmosphere — becomes visible, revealing plasma loops millions of kilometers tall.',
    physics: 'Orbital mechanics · Angular diameter · Gravitational lensing',
  },
  {
    id: 'nebula-pillars',
    title: 'Pillars of Creation',
    category: 'Deep Sky',
    accent: '#a78bfa',
    imgId: 'gallery-pillars-5a9e2c',
    imgQuery: 'Pillars of Creation Eagle Nebula M16 gas dust columns Hubble space telescope',
    description:
      'Located in the Eagle Nebula (M16), these towering columns of gas and dust are stellar nurseries. Ultraviolet radiation from nearby hot stars slowly erodes the pillars — a process called photoevaporation.',
    physics: 'Stellar formation · Photoionization · Interstellar medium',
  },
  {
    id: 'black-hole',
    title: 'Black Hole Shadow',
    category: 'Extreme Physics',
    accent: '#f5c842',
    imgId: 'gallery-blackhole-1c6f3d',
    imgQuery: 'black hole M87 accretion disk orange glow event horizon telescope image',
    description:
      'The first image of a black hole (M87*, 2019) shows a bright accretion disk surrounding a dark shadow. The shadow is not the event horizon itself, but the photon sphere — where light orbits the singularity.',
    physics: 'General relativity · Event horizon · Accretion disk dynamics',
  },
  {
    id: 'supernova-remnant',
    title: 'Supernova Remnant',
    category: 'Stellar Death',
    accent: '#f87171',
    imgId: 'gallery-supernova-8b4d7f',
    imgQuery: 'Crab Nebula supernova remnant colorful filaments pulsar astronomy',
    description:
      'When a massive star explodes as a supernova, the shockwave expands at thousands of km/s, sweeping up interstellar material. The Crab Nebula is the remnant of a supernova observed by Chinese astronomers in 1054 AD.',
    physics: 'Shockwave dynamics · Nucleosynthesis · Pulsar wind nebulae',
  },
  {
    id: 'galaxy-collision',
    title: 'Colliding Galaxies',
    category: 'Galactic Scale',
    accent: '#60a5fa',
    imgId: 'gallery-galaxies-3e9c5b',
    imgQuery: 'Andromeda spiral galaxy deep sky astrophotography stars',
    description:
      'The Antennae Galaxies are two spiral galaxies in the process of merging. Despite containing hundreds of billions of stars, the vast distances between them mean actual stellar collisions are rare — but gas clouds collide, triggering massive star formation.',
    physics: 'Gravitational dynamics · Tidal forces · Starburst regions',
  },
  {
    id: 'planetary-rings',
    title: 'Saturn\'s Ring System',
    category: 'Solar System',
    accent: '#fbbf24',
    imgId: 'gallery-saturn-6a2d8e',
    imgQuery: 'Saturn planet rings close up Cassini spacecraft solar system',
    description:
      'Saturn\'s rings span 282,000 km but are only ~10 meters thick on average. They consist of ice particles and rocky debris ranging from micrometers to meters in size, shaped by gravitational resonances with Saturn\'s moons.',
    physics: 'Orbital resonance · Tidal disruption · Roche limit',
  },
  {
    id: 'star-cluster',
    title: 'Pleiades Star Cluster',
    category: 'Deep Sky',
    accent: '#c084fc',
    imgId: 'gallery-pleiades-9f1b4c',
    imgQuery: 'Pleiades star cluster blue stars nebulosity deep sky astrophotography',
    description:
      'The Pleiades (M45) is an open cluster of hot blue stars about 444 light-years away. The wispy blue nebulosity surrounding the stars is not a remnant of their formation, but an unrelated dust cloud they are passing through.',
    physics: 'Stellar clusters · Reflection nebulae · Stellar classification',
  },
];

const categories = ['All', ...new Set(phenomena.map(p => p.category))];

export default function GalleryGrid() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);
  const modalRef = useRef(null);

  const filtered = active === 'All' ? phenomena : phenomena.filter(p => p.category === active);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [active]);

  useEffect(() => {
    if (selected && modalRef.current) {
      ImageHelper.loadImages(strkImgConfig, modalRef.current);
    }
  }, [selected]);

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-6 md:px-12 py-12">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-inter text-xs px-4 py-2 rounded-lg border transition-all duration-200 ${
              active === cat
                ? 'bg-aurora text-white border-aurora'
                : 'border-stardust/60 text-comet hover:border-aurora/40 hover:text-moonlight'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map(item => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className="group text-left bg-deep-space border border-stardust/60 rounded-xl overflow-hidden hover:border-aurora/40 hover:shadow-aurora transition-all duration-300"
          >
            {/* Photo */}
            <div className="relative h-44 bg-cosmos overflow-hidden">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[gallery-label-${item.id}] [gallery-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="500"
                alt={item.title}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:scale-105 transition-transform"
              />
              <span id={`gallery-label-${item.id}`} className="sr-only">{item.imgQuery}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space/70 via-transparent to-transparent" />
              <Maximize2 className="absolute top-3 right-3 w-3.5 h-3.5 text-white/40 group-hover:text-white/80 transition-colors" />
            </div>

            {/* Info */}
            <div className="p-4 space-y-1.5">
              <p className="font-inter text-[10px] uppercase tracking-widest" style={{ color: item.accent }}>
                {item.category}
              </p>
              <h3 className="font-cormorant text-lg font-medium text-moonlight leading-snug">
                {item.title}
              </h3>
              <p className="font-inter text-xs text-comet line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Hidden section title for image queries */}
      <span id="gallery-section-title" className="sr-only">astronomy astrophotography space</span>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cosmos/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            ref={modalRef}
            className="bg-deep-space border border-stardust/60 rounded-2xl max-w-lg w-full overflow-hidden shadow-glow"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal image */}
            <div className="relative h-52 bg-cosmos overflow-hidden">
              <img
                data-strk-img-id={`modal-${selected.imgId}`}
                data-strk-img={`[modal-label-${selected.id}] [gallery-section-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="700"
                alt={selected.title}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover opacity-0 transition-opacity duration-700"
              />
              <span id={`modal-label-${selected.id}`} className="sr-only">{selected.imgQuery}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space/60 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cosmos/60 backdrop-blur-sm flex items-center justify-center text-comet hover:text-moonlight transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-8 space-y-5">
              <div>
                <p className="font-inter text-xs uppercase tracking-widest mb-1" style={{ color: selected.accent }}>
                  {selected.category}
                </p>
                <h2 className="font-cormorant text-3xl font-light text-moonlight">{selected.title}</h2>
              </div>

              <p className="font-inter text-sm text-comet leading-relaxed">{selected.description}</p>

              <div className="pt-2 border-t border-stardust/30">
                <p className="font-inter text-xs text-horizon uppercase tracking-widest mb-1">Physics Concepts</p>
                <p className="font-inter text-sm text-aurora">{selected.physics}</p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="w-full border border-stardust/60 text-comet font-inter text-sm py-2.5 rounded-lg hover:border-aurora/40 hover:text-moonlight transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

