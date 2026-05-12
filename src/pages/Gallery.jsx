import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import StarField from '../components/home/StarField';

const galleryItems = [
  {
    id: 'aurora-1',
    category: 'Aurora',
    title: 'Northern Lights',
    subtitle: 'Aurora Borealis over Arctic Landscape',
    description:
      'Charged particles from the Sun interact with Earth\'s magnetic field and atmosphere, exciting oxygen and nitrogen atoms to emit vivid green and blue light at altitudes of 100–300 km.',
    physics: 'Plasma physics · Magnetospheric interaction · Atomic emission spectra',
    imgId: 'aurora-img-a1b2c3',
    imgQuery: 'aurora borealis northern lights green blue polar night sky',
    size: 'large',
  },
  {
    id: 'eclipse-1',
    category: 'Eclipse',
    title: 'Total Solar Eclipse',
    subtitle: 'Corona Revealed at Totality',
    description:
      'During totality, the Moon perfectly covers the solar disk, revealing the Sun\'s corona — a plasma atmosphere extending millions of kilometers, visible only during this rare alignment.',
    physics: 'Orbital mechanics · Plasma dynamics · General relativity (light bending)',
    imgId: 'eclipse-img-d4e5f6',
    imgQuery: 'total solar eclipse corona totality diamond ring effect',
    size: 'medium',
  },
  {
    id: 'galaxy-1',
    category: 'Deep Sky',
    title: 'Andromeda Galaxy',
    subtitle: 'M31 — Our Nearest Galactic Neighbor',
    description:
      'At 2.537 million light-years away, Andromeda is the most distant object visible to the naked eye. It contains ~1 trillion stars and is on a collision course with the Milky Way in ~4.5 billion years.',
    physics: 'Galactic dynamics · Dark matter · Gravitational interaction',
    imgId: 'andromeda-img-g7h8i9',
    imgQuery: 'Andromeda galaxy M31 spiral galaxy deep space astrophotography',
    size: 'medium',
  },
  {
    id: 'nebula-1',
    category: 'Nebula',
    title: 'Orion Nebula',
    subtitle: 'M42 — A Stellar Nursery',
    description:
      'Located 1,344 light-years away, the Orion Nebula is one of the most studied objects in the sky. It is an active region of star formation where new solar systems are being born right now.',
    physics: 'Star formation · Photoionization · Protoplanetary disk physics',
    imgId: 'orion-neb-j1k2l3',
    imgQuery: 'Orion Nebula M42 stellar nursery star formation colorful nebula',
    size: 'large',
  },
  {
    id: 'lunar-eclipse',
    category: 'Eclipse',
    title: 'Lunar Eclipse',
    subtitle: 'Blood Moon — Earth\'s Shadow',
    description:
      'When Earth passes between the Sun and Moon, our atmosphere refracts red wavelengths of sunlight onto the lunar surface. The same physics that makes sunsets red turns the Moon blood-red.',
    physics: 'Rayleigh scattering · Atmospheric optics · Orbital geometry',
    imgId: 'lunar-eclipse-m4n5o6',
    imgQuery: 'blood moon total lunar eclipse red moon atmospheric refraction',
    size: 'medium',
  },
  {
    id: 'pleiades',
    category: 'Star Cluster',
    title: 'The Pleiades',
    subtitle: 'M45 — The Seven Sisters',
    description:
      'An open star cluster 444 light-years away, containing hundreds of young, hot blue stars. The surrounding blue nebulosity is a reflection nebula — dust scattering starlight, not emission.',
    physics: 'Open cluster dynamics · Reflection nebulae · Blue star spectroscopy',
    imgId: 'pleiades-img-p7q8r9',
    imgQuery: 'Pleiades star cluster M45 seven sisters blue nebula astrophotography',
    size: 'medium',
  },
];

const categoryColors = {
  Aurora: 'text-aurora bg-aurora/10 border-aurora/30',
  Eclipse: 'text-amber bg-amber/10 border-amber/30',
  'Deep Sky': 'text-nebula-pink bg-nebula-pink/10 border-nebula-pink/30',
  Nebula: 'text-aurora bg-aurora/10 border-aurora/30',
  'Star Cluster': 'text-amber bg-amber/10 border-amber/30',
};

function GalleryCard({ item }) {
  return (
    <div className="group relative bg-nebula rounded-2xl border border-subtle overflow-hidden hover:border-amber/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber/5">
      {/* Image */}
      <div className={`relative overflow-hidden ${item.size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/3]'} bg-surface`}>
        <img
          alt={`${item.title} — ${item.subtitle}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-strk-img-id={item.imgId}
          data-strk-img={`[gallery-desc-${item.id}] [gallery-title-${item.id}] [gallery-subtitle-${item.id}]`}
          data-strk-img-ratio={item.size === 'large' ? '16x9' : '4x3'}
          data-strk-img-width={item.size === 'large' ? '900' : '600'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmos/80 via-cosmos/20 to-transparent pointer-events-none" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-medium tracking-widest uppercase rounded-full px-3 py-1 border ${categoryColors[item.category] || 'text-muted bg-surface border-subtle'}`}>
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <h3
          id={`gallery-title-${item.id}`}
          className="font-sans text-lg font-semibold text-star mb-1"
        >
          {item.title}
        </h3>
        <p
          id={`gallery-subtitle-${item.id}`}
          className="text-xs text-muted tracking-wide mb-3 italic font-serif"
        >
          {item.subtitle}
        </p>
        <p
          id={`gallery-desc-${item.id}`}
          className="text-sm text-muted leading-relaxed mb-4"
        >
          {item.description}
        </p>
        <div className="pt-4 border-t border-subtle">
          <span className="text-xs text-dim tracking-wide">
            <span className="text-amber font-medium">Physics: </span>
            {item.physics}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div className="bg-void" ref={containerRef}>
      {/* Page hero */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 text-center overflow-hidden border-b border-subtle">
        <StarField count={80} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-amber">
            Visual Astronomy
          </span>
          <h1
            id="gallery-page-title"
            className="font-serif font-light text-4xl md:text-5xl text-star mt-4 mb-5 tracking-tight"
          >
            Sky Gallery
          </h1>
          <p
            id="gallery-page-subtitle"
            className="text-muted text-base md:text-lg leading-relaxed"
          >
            A curated collection of astronomical phenomena — each image a lesson in the physics of light, matter, and cosmic forces.
          </p>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={item.size === 'large' ? 'md:col-span-2' : ''}
              >
                <GalleryCard item={item} />
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-16 text-center">
            <div className="section-divider mb-6" />
            <p className="text-sm text-muted italic font-serif max-w-xl mx-auto">
              "Equipped with his five senses, man explores the universe around him and calls the adventure Science." — Edwin Hubble
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
