import { useState } from 'react';
import { Maximize2 } from 'lucide-react';

const phenomena = [
  {
    id: 'aurora-borealis',
    title: 'Aurora Borealis',
    category: 'Atmospheric',
    gradient: 'from-green-900/60 via-teal-800/40 to-cosmos',
    accent: '#34d399',
    description:
      'Solar wind particles collide with atmospheric gases at the magnetic poles, exciting electrons that emit photons as they return to ground state. Oxygen produces green and red; nitrogen produces blue and purple.',
    physics: 'Plasma physics · Magnetic field lines · Electron excitation',
  },
  {
    id: 'solar-eclipse',
    title: 'Total Solar Eclipse',
    category: 'Orbital Mechanics',
    gradient: 'from-amber-900/50 via-orange-900/30 to-cosmos',
    accent: '#f59e0b',
    description:
      'A perfect cosmic coincidence: the Moon is 400× smaller than the Sun, but also 400× closer. During totality, the solar corona — the Sun\'s outer atmosphere — becomes visible, revealing plasma loops millions of kilometers tall.',
    physics: 'Orbital mechanics · Angular diameter · Gravitational lensing',
  },
  {
    id: 'nebula-pillars',
    title: 'Pillars of Creation',
    category: 'Deep Sky',
    gradient: 'from-purple-900/60 via-indigo-900/40 to-cosmos',
    accent: '#a78bfa',
    description:
      'Located in the Eagle Nebula (M16), these towering columns of gas and dust are stellar nurseries. Ultraviolet radiation from nearby hot stars slowly erodes the pillars — a process called photoevaporation.',
    physics: 'Stellar formation · Photoionization · Interstellar medium',
  },
  {
    id: 'black-hole',
    title: 'Black Hole Shadow',
    category: 'Extreme Physics',
    gradient: 'from-slate-900/80 via-gray-900/60 to-cosmos',
    accent: '#f5c842',
    description:
      'The first image of a black hole (M87*, 2019) shows a bright accretion disk surrounding a dark shadow. The shadow is not the event horizon itself, but the photon sphere — where light orbits the singularity.',
    physics: 'General relativity · Event horizon · Accretion disk dynamics',
  },
  {
    id: 'supernova-remnant',
    title: 'Supernova Remnant',
    category: 'Stellar Death',
    gradient: 'from-red-900/50 via-rose-900/30 to-cosmos',
    accent: '#f87171',
    description:
      'When a massive star explodes as a supernova, the shockwave expands at thousands of km/s, sweeping up interstellar material. The Crab Nebula is the remnant of a supernova observed by Chinese astronomers in 1054 AD.',
    physics: 'Shockwave dynamics · Nucleosynthesis · Pulsar wind nebulae',
  },
  {
    id: 'galaxy-collision',
    title: 'Colliding Galaxies',
    category: 'Galactic Scale',
    gradient: 'from-blue-900/50 via-indigo-900/30 to-cosmos',
    accent: '#60a5fa',
    description:
      'The Antennae Galaxies are two spiral galaxies in the process of merging. Despite containing hundreds of billions of stars, the vast distances between them mean actual stellar collisions are rare — but gas clouds collide, triggering massive star formation.',
    physics: 'Gravitational dynamics · Tidal forces · Starburst regions',
  },
  {
    id: 'planetary-rings',
    title: 'Saturn\'s Ring System',
    category: 'Solar System',
    gradient: 'from-yellow-900/40 via-amber-900/20 to-cosmos',
    accent: '#fbbf24',
    description:
      'Saturn\'s rings span 282,000 km but are only ~10 meters thick on average. They consist of ice particles and rocky debris ranging from micrometers to meters in size, shaped by gravitational resonances with Saturn\'s moons.',
    physics: 'Orbital resonance · Tidal disruption · Roche limit',
  },
  {
    id: 'cosmic-web',
    title: 'The Cosmic Web',
    category: 'Large Scale Structure',
    gradient: 'from-violet-900/50 via-purple-900/30 to-cosmos',
    accent: '#c084fc',
    description:
      'On the largest scales, galaxies are not randomly distributed. They form a vast cosmic web of filaments, sheets, and voids — the largest structures in the universe, shaped by dark matter and the initial quantum fluctuations of the Big Bang.',
    physics: 'Dark matter · Large-scale structure · Baryon acoustic oscillations',
  },
];

const categories = ['All', ...new Set(phenomena.map(p => p.category))];

export default function GalleryGrid() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All' ? phenomena : phenomena.filter(p => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
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
            {/* Visual placeholder */}
            <div className={`relative h-40 bg-gradient-to-b ${item.gradient} flex items-center justify-center`}>
              {/* Decorative dots */}
              {[...Array(12)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-0.5 h-0.5 rounded-full bg-white/40"
                  style={{
                    top: `${10 + Math.random() * 80}%`,
                    left: `${5 + Math.random() * 90}%`,
                  }}
                />
              ))}
              <div
                className="w-12 h-12 rounded-full opacity-30 blur-xl"
                style={{ backgroundColor: item.accent }}
              />
              <Maximize2 className="absolute top-3 right-3 w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition-colors" />
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

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cosmos/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-deep-space border border-stardust/60 rounded-2xl max-w-lg w-full p-8 space-y-5 shadow-glow"
            onClick={e => e.stopPropagation()}
          >
            {/* Visual */}
            <div className={`h-32 rounded-xl bg-gradient-to-b ${selected.gradient} flex items-center justify-center`}>
              <div
                className="w-16 h-16 rounded-full opacity-40 blur-2xl"
                style={{ backgroundColor: selected.accent }}
              />
            </div>

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
      )}
    </div>
  );
}
