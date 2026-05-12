import { useEffect, useRef, useState } from 'react';
import { Zap, Telescope, Star, Wind, Sun, Orbit, Atom } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Auroras', 'Eclipses', 'Deep Sky', 'Nebulae', 'Galaxies'];

const galleryItems = [
  {
    id:       'gallery-aurora-1',
    category: 'Auroras',
    title:    'Aurora Borealis over Iceland',
    insight:  'Solar wind particles (mainly electrons and protons) are deflected by Earth\'s magnetosphere toward the poles. Collisions with O₂ and N₂ atoms excite electrons to higher energy states — releasing photons as green (557.7nm) and red (630nm) light.',
    physics:  'Solar Wind Interaction',
    size:     'tall',
    imgId:    'gallery-img-aurora1-3a7f2b',
    imgQuery: '[gallery-aurora1-insight] [gallery-aurora1-title]',
    titleId:  'gallery-aurora1-title',
    insightId:'gallery-aurora1-insight',
  },
  {
    id:       'gallery-eclipse-1',
    category: 'Eclipses',
    title:    'Total Solar Eclipse — Diamond Ring',
    insight:  'A total solar eclipse occurs when the Moon\'s angular diameter (0.5°) precisely matches the Sun\'s. The Moon\'s distance varies (perigee 356,500 km) — only at perigee is totality possible. The corona becomes visible, revealing plasma at 1–3 million K.',
    physics:  'Orbital Alignment & Angular Diameter',
    size:     'wide',
    imgId:    'gallery-img-eclipse1-8c4d1e',
    imgQuery: '[gallery-eclipse1-insight] [gallery-eclipse1-title]',
    titleId:  'gallery-eclipse1-title',
    insightId:'gallery-eclipse1-insight',
  },
  {
    id:       'gallery-andromeda-1',
    category: 'Galaxies',
    title:    'Andromeda Galaxy (M31)',
    insight:  'At 2.537 million light-years, Andromeda is the most distant object visible to the naked eye. It contains ~1 trillion stars and is approaching the Milky Way at 110 km/s — the two galaxies will merge in ~4.5 billion years.',
    physics:  'Galactic Structure & Dynamics',
    size:     'normal',
    imgId:    'gallery-img-andromeda-5e9b3f',
    imgQuery: '[gallery-andromeda-insight] [gallery-andromeda-title]',
    titleId:  'gallery-andromeda-title',
    insightId:'gallery-andromeda-insight',
  },
  {
    id:       'gallery-nebula-1',
    category: 'Nebulae',
    title:    'Pillars of Creation — Eagle Nebula',
    insight:  'These 4–5 light-year tall columns of interstellar gas and dust are stellar nurseries. Photoevaporation by nearby hot O-type stars sculpts the pillars while new stars form within. A classic example of radiation pressure physics.',
    physics:  'Photoevaporation & Star Formation',
    size:     'tall',
    imgId:    'gallery-img-pillars-2d6a4c',
    imgQuery: '[gallery-pillars-insight] [gallery-pillars-title]',
    titleId:  'gallery-pillars-title',
    insightId:'gallery-pillars-insight',
  },
  {
    id:       'gallery-aurora-2',
    category: 'Auroras',
    title:    'Aurora Australis from Space',
    insight:  'Photographed from the ISS, the Southern Lights form a glowing ring around the magnetic south pole. The altitude of the aurora (100–300 km) determines the colour: green at 100km (O₂), red at 200km+ (O), blue/purple at lower altitudes (N₂).',
    physics:  'Magnetospheric Physics',
    size:     'wide',
    imgId:    'gallery-img-aurora2-7f1c8d',
    imgQuery: '[gallery-aurora2-insight] [gallery-aurora2-title]',
    titleId:  'gallery-aurora2-title',
    insightId:'gallery-aurora2-insight',
  },
  {
    id:       'gallery-galaxy-2',
    category: 'Galaxies',
    title:    'Whirlpool Galaxy (M51) — Tidal Interaction',
    insight:  'M51 is being gravitationally distorted by its companion NGC 5195. Tidal forces stretch the spiral arms, triggering bursts of star formation. This demonstrates how gravitational potential energy drives galactic evolution.',
    physics:  'Tidal Forces & Gravitational Interaction',
    size:     'normal',
    imgId:    'gallery-img-whirlpool-9a3e5b',
    imgQuery: '[gallery-whirlpool-insight] [gallery-whirlpool-title]',
    titleId:  'gallery-whirlpool-title',
    insightId:'gallery-whirlpool-insight',
  },
  {
    id:       'gallery-eclipse-2',
    category: 'Eclipses',
    title:    'Annular Solar Eclipse — Ring of Fire',
    insight:  'When the Moon is near apogee (406,700 km), its angular diameter is smaller than the Sun\'s — leaving a ring of sunlight visible. This "Ring of Fire" demonstrates how orbital eccentricity (e=0.0549 for Moon) affects apparent angular size.',
    physics:  'Orbital Eccentricity & Angular Size',
    size:     'normal',
    imgId:    'gallery-img-annular-4b8f2a',
    imgQuery: '[gallery-annular-insight] [gallery-annular-title]',
    titleId:  'gallery-annular-title',
    insightId:'gallery-annular-insight',
  },
  {
    id:       'gallery-nebula-2',
    category: 'Nebulae',
    title:    'Crab Nebula — Supernova Remnant',
    insight:  'The expanding debris of a supernova observed by Chinese astronomers in 1054 AD. At its centre is a pulsar rotating 30 times per second — a neutron star with density ~10¹⁷ kg/m³. The nebula expands at ~1,500 km/s.',
    physics:  'Supernova Remnant & Pulsar Physics',
    size:     'wide',
    imgId:    'gallery-img-crab-6c1d9e',
    imgQuery: '[gallery-crab-insight] [gallery-crab-title]',
    titleId:  'gallery-crab-title',
    insightId:'gallery-crab-insight',
  },
  {
    id:       'gallery-deepsky-1',
    category: 'Deep Sky',
    title:    'Hubble Ultra Deep Field',
    insight:  'A 11.3-day exposure of a tiny patch of sky (1/13,000,000 of the full sky) revealed ~10,000 galaxies — some from just 400–800 million years after the Big Bang. Light from the most distant objects has been travelling for over 13 billion years.',
    physics:  'Cosmological Redshift & Lookback Time',
    size:     'tall',
    imgId:    'gallery-img-udf-1e5a7c',
    imgQuery: '[gallery-udf-insight] [gallery-udf-title]',
    titleId:  'gallery-udf-title',
    insightId:'gallery-udf-insight',
  },
];

const categoryIcons = {
  'Auroras':   Wind,
  'Eclipses':  Sun,
  'Deep Sky':  Telescope,
  'Nebulae':   Atom,
  'Galaxies':  Star,
};

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const Icon = categoryIcons[cat];
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                active
                  ? 'bg-amber-glow text-cosmos-void font-semibold shadow-amber-soft'
                  : 'bg-cosmos-surface border border-cosmos-border text-cosmos-text hover:border-amber-glow/40 hover:text-amber-glow'
              }`}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Masonry-style grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((item) => {
          const isExpanded = expandedId === item.id;
          const aspectClass =
            item.size === 'tall' ? 'aspect-[3/4]' :
            item.size === 'wide' ? 'aspect-[16/9]' :
            'aspect-[4/3]';

          return (
            <div
              key={item.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-cosmos-border hover:border-amber-glow/40 transition-all duration-300 cursor-pointer shadow-card-cosmos"
              onClick={() => setExpandedId(isExpanded ? null : item.id)}
            >
              {/* Image */}
              <div className={`relative ${aspectClass} overflow-hidden`}>
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={item.imgId}
                  data-strk-img={item.imgQuery}
                  data-strk-img-ratio={item.size === 'tall' ? '3x4' : item.size === 'wide' ? '16x9' : '4x3'}
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 img-overlay-bottom" />

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cosmos-void/70 backdrop-blur-sm border border-cosmos-border/60">
                  <span className="text-xs font-semibold text-amber-glow uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Physics label */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-glow/10 backdrop-blur-sm border border-amber-glow/30">
                  <span className="text-xs font-medium text-amber-glow">
                    {item.physics}
                  </span>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3
                    id={item.titleId}
                    className="font-display font-bold text-star-white text-base leading-tight"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Physics Insight — expands on click */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="p-4 bg-cosmos-card border-t border-cosmos-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-3.5 h-3.5 text-amber-glow shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-glow">
                      Physics Insight
                    </span>
                  </div>
                  <p
                    id={item.insightId}
                    className="text-xs text-cosmos-subtle leading-relaxed"
                  >
                    {item.insight}
                  </p>
                </div>
              </div>

              {/* Hover hint */}
              {!isExpanded && (
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-cosmos-void/80 backdrop-blur-sm">
                    <Zap className="w-3 h-3 text-amber-glow" />
                    <span className="text-xs text-amber-glow">Physics Insight</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-cosmos-subtle">No items in this category.</p>
        </div>
      )}
    </div>
  );
}
