import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ZoomIn, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Auroras', 'Eclipses', 'Deep Sky', 'Nebulae', 'Galaxies'];

const galleryItems = [
  {
    id: 'aurora-1',
    category: 'Auroras',
    title: 'Aurora Borealis',
    location: 'Tromsø, Norway',
    desc: 'The Northern Lights occur when charged solar particles collide with atmospheric gases at altitudes of 100–300 km. Oxygen produces green and red hues; nitrogen creates blue and purple.',
    physics: 'Solar wind particles excite O and N₂ molecules. Green: O at 557.7 nm. Red: O at 630 nm.',
    imgQuery: 'aurora borealis northern lights green blue polar landscape Norway night sky',
    size: 'large',
  },
  {
    id: 'eclipse-1',
    category: 'Eclipses',
    title: 'Total Solar Eclipse',
    location: 'Path of Totality, 2024',
    desc: 'During totality, the Moon perfectly covers the Sun\'s photosphere, revealing the corona — the Sun\'s outer atmosphere — which reaches temperatures of 1–3 million Kelvin.',
    physics: 'Angular diameter coincidence: Moon (0.5°) ≈ Sun (0.5°). Corona temp: ~1–3 MK.',
    imgQuery: 'total solar eclipse corona diamond ring effect totality',
    size: 'medium',
  },
  {
    id: 'galaxy-1',
    category: 'Galaxies',
    title: 'Andromeda Galaxy (M31)',
    location: '2.537 million light-years',
    desc: 'Our nearest large galactic neighbor, containing ~1 trillion stars. Andromeda is approaching the Milky Way at ~110 km/s and will merge with our galaxy in approximately 4.5 billion years.',
    physics: 'Spiral galaxy type Sb. Diameter: ~220,000 ly. Approaching at 110 km/s (blueshift).',
    imgQuery: 'Andromeda galaxy M31 spiral galaxy deep sky astrophotography',
    size: 'medium',
  },
  {
    id: 'nebula-1',
    category: 'Nebulae',
    title: 'Orion Nebula (M42)',
    location: '1,344 light-years away',
    desc: 'The closest stellar nursery to Earth, where new stars are actively forming. The Trapezium cluster at its heart contains four massive O-type stars whose ultraviolet radiation ionizes the surrounding gas.',
    physics: 'HII region. Ionized hydrogen emission at Hα (656.3 nm). Active star formation.',
    imgQuery: 'Orion Nebula M42 stellar nursery star formation Trapezium cluster',
    size: 'large',
  },
  {
    id: 'eclipse-2',
    category: 'Eclipses',
    title: 'Lunar Eclipse — Blood Moon',
    location: 'Visible globally',
    desc: 'During a total lunar eclipse, Earth\'s shadow falls on the Moon. The Moon turns deep red because Earth\'s atmosphere refracts and filters sunlight, allowing only long red wavelengths to reach the lunar surface.',
    physics: 'Rayleigh scattering removes blue light. Red wavelengths (620–750 nm) refract around Earth.',
    imgQuery: 'blood moon total lunar eclipse red moon Earth shadow',
    size: 'medium',
  },
  {
    id: 'deep-sky-1',
    category: 'Deep Sky',
    title: 'Pleiades Star Cluster (M45)',
    location: '444 light-years away',
    desc: 'One of the nearest and most visually striking open clusters, containing over 1,000 confirmed members. The blue reflection nebula surrounding the brightest stars is dust illuminated by starlight, not emission.',
    physics: 'Open cluster age: ~100 Myr. Blue reflection nebula: dust scattering (Mie scattering).',
    imgQuery: 'Pleiades star cluster M45 Seven Sisters blue reflection nebula',
    size: 'medium',
  },
  {
    id: 'aurora-2',
    category: 'Auroras',
    title: 'Aurora Australis',
    location: 'Antarctica',
    desc: 'The Southern Lights mirror their northern counterpart, driven by the same solar wind interaction. Seen from Antarctica and southern Australia, they display the same spectacular curtains of light.',
    physics: 'Geomagnetic field channels particles to polar regions. Kp index > 5 for visibility.',
    imgQuery: 'aurora australis southern lights Antarctica green curtain night sky',
    size: 'medium',
  },
  {
    id: 'nebula-2',
    category: 'Nebulae',
    title: 'Pillars of Creation',
    location: 'Eagle Nebula (M16), 6,500 ly',
    desc: 'These towering columns of gas and dust are stellar nurseries where new stars are forming. The "pillars" are being slowly eroded by intense ultraviolet radiation from nearby massive stars.',
    physics: 'Photoevaporation by UV radiation. Column height: ~4–5 light-years. EGGs (Evaporating Gaseous Globules).',
    imgQuery: 'Pillars of Creation Eagle Nebula M16 stellar nursery gas columns JWST',
    size: 'large',
  },
  {
    id: 'galaxy-2',
    category: 'Galaxies',
    title: 'Whirlpool Galaxy (M51)',
    location: '23 million light-years',
    desc: 'A classic grand-design spiral galaxy interacting gravitationally with its smaller companion NGC 5195. The interaction has triggered waves of star formation visible as bright blue knots along the spiral arms.',
    physics: 'Tidal interaction triggers star formation. Spiral density waves. Type Sc galaxy.',
    imgQuery: 'Whirlpool Galaxy M51 spiral galaxy interaction companion NGC 5195',
    size: 'medium',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const containerRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div ref={containerRef} className="bg-space-950 pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <p className="section-label mb-4">Visual Astronomy</p>
        <h1 id="gallery-title" className="font-serif text-5xl md:text-6xl font-light text-star-silver mb-6">
          Sky Map & Gallery
        </h1>
        <div className="amber-divider" />
        <p id="gallery-subtitle" className="text-slate-300 text-lg leading-relaxed max-w-2xl mt-6">
          A curated collection of astronomical phenomena — each image paired with
          the physics that explains its breathtaking beauty. From the dancing lights
          of auroras to the ancient light of distant galaxies.
        </p>
      </section>

      {/* Filter Bar */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-center gap-3 flex-wrap">
          <Filter className="w-4 h-4 text-slate-500" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-amber-400 text-space-950 font-medium'
                  : 'border border-white/10 text-slate-400 hover:border-amber-400/30 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="break-inside-avoid glass-card rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setLightbox(item)}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${item.size === 'large' ? 'h-72' : 'h-52'}`}>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={`gallery-${item.id}-img-3f9e`}
                  data-strk-img={`[gallery-${item.id}-desc] [gallery-${item.id}-title] ${item.imgQuery}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-space-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono tracking-widest uppercase bg-space-950/70 backdrop-blur-sm text-amber-400 px-3 py-1 rounded-full border border-amber-400/20">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={`gallery-${item.id}-title`}
                  className="font-serif text-lg font-light text-star-silver mb-1 group-hover:text-amber-400 transition-colors"
                >
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mb-3">{item.location}</p>
                <p
                  id={`gallery-${item.id}-desc`}
                  className="text-slate-400 text-sm leading-relaxed line-clamp-3"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-space-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full glass-card rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 bg-space-950/70 backdrop-blur-sm rounded-full p-2 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={lightbox.title}
                className="w-full h-full object-cover"
                data-strk-img-id={`lightbox-${lightbox.id}-img-6c2a`}
                data-strk-img={`[lightbox-${lightbox.id}-desc] [lightbox-${lightbox.id}-title] ${lightbox.imgQuery}`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent" />
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="section-label">{lightbox.category}</span>
                  <h2
                    id={`lightbox-${lightbox.id}-title`}
                    className="font-serif text-2xl font-light text-star-silver mt-1"
                  >
                    {lightbox.title}
                  </h2>
                  <p className="text-xs font-mono text-slate-500 mt-1">{lightbox.location}</p>
                </div>
              </div>

              <p
                id={`lightbox-${lightbox.id}-desc`}
                className="text-slate-300 text-sm leading-relaxed mb-5"
              >
                {lightbox.desc}
              </p>

              <div className="bg-white/5 rounded-xl px-5 py-3.5">
                <p className="text-xs font-mono text-amber-400 tracking-widest uppercase mb-1">Physics</p>
                <p className="text-xs font-mono text-slate-300 leading-relaxed">{lightbox.physics}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <div className="glass-card rounded-2xl p-10 text-center">
          <p className="section-label mb-3">Curious About What You See?</p>
          <h3 className="font-serif text-3xl font-light text-star-silver mb-4">
            Ask Your Physics Teacher
          </h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
            Have a question about any of these phenomena? Submit it through our
            contact form and get a detailed explanation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-space-950 font-medium text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-200"
          >
            Ask a Question
          </Link>
        </div>
      </section>
    </div>
  );
}
