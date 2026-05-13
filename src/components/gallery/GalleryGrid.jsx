import { useState } from 'react';
import { X, Info } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Aurora Borealis',
    category: 'Atmospheric Phenomena',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=85',
    alt: 'Green and blue aurora over polar landscape',
    caption: 'Solar Wind & Magnetosphere',
    explanation:
      'Auroras form when charged particles from the solar wind are funneled by Earth\'s magnetic field into the polar regions. Collisions with atmospheric oxygen produce green (557.7 nm) and red (630 nm) light; nitrogen creates blue and purple hues. The altitude determines the color: green at 100–150 km, red above 200 km.',
    span: 'col-span-2 row-span-2',
    size: 'large',
  },
  {
    id: 2,
    title: 'Total Solar Eclipse',
    category: 'Solar Phenomena',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600&q=85',
    alt: 'Total solar eclipse corona',
    caption: 'Umbral Geometry & Rayleigh Scattering',
    explanation:
      'A total solar eclipse occurs when the Moon\'s umbra — the darkest part of its shadow — sweeps across Earth\'s surface. The Moon\'s angular diameter (0.5°) nearly matches the Sun\'s, a cosmic coincidence. The reddish hue of a lunar eclipse results from Rayleigh scattering: Earth\'s atmosphere refracts red wavelengths into the umbra.',
    span: 'col-span-1 row-span-1',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Andromeda Galaxy',
    category: 'Deep Sky Objects',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=85',
    alt: 'Andromeda galaxy spiral arms',
    caption: 'Galactic Rotation & Dark Matter',
    explanation:
      'M31 (Andromeda) is 2.537 million light-years away — the most distant object visible to the naked eye. Its rotation curve remains flat at large radii, defying Newtonian predictions. This "missing mass" problem is explained by dark matter halos, which constitute ~85% of the universe\'s total matter.',
    span: 'col-span-1 row-span-1',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Pleiades Star Cluster',
    category: 'Star Clusters',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&q=85',
    alt: 'Pleiades star cluster with blue nebulosity',
    caption: 'Open Cluster Dynamics',
    explanation:
      'The Pleiades (M45) is an open cluster of ~1,000 stars, 444 light-years away. The blue nebulosity is not a remnant of star formation but an unrelated dust cloud the cluster is passing through. The brightest stars are hot B-type blue giants, placing the cluster at ~100 million years old on the H-R diagram.',
    span: 'col-span-1 row-span-1',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Lunar Eclipse Sequence',
    category: 'Lunar Phenomena',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&q=85',
    alt: 'Blood moon lunar eclipse',
    caption: 'Blood Moon & Atmospheric Optics',
    explanation:
      'During a total lunar eclipse, the Moon passes through Earth\'s umbra. The Moon turns deep red — the "Blood Moon" — because Earth\'s atmosphere acts as a lens, refracting sunlight around the planet. Only red wavelengths (λ ≈ 700 nm) survive the long atmospheric path, illuminating the Moon with the light of every simultaneous sunrise and sunset on Earth.',
    span: 'col-span-2 row-span-1',
    size: 'wide',
  },
  {
    id: 6,
    title: 'Milky Way Core',
    category: 'Galactic Center',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=85',
    alt: 'Milky Way galactic core over mountains',
    caption: 'Sagittarius A* & Galactic Structure',
    explanation:
      'The bright band of the Milky Way represents our galaxy\'s disk viewed edge-on from within. At its center lies Sagittarius A*, a supermassive black hole of ~4 million solar masses. The 2020 Nobel Prize in Physics was awarded for its discovery. Dust lanes absorb optical light, making the core best observed in infrared and radio wavelengths.',
    span: 'col-span-1 row-span-1',
    size: 'medium',
  },
];

export default function GalleryGrid() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      {/* Masonry-style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-2xl border border-gray-800 cursor-pointer hover:border-amber-400/30 transition-all duration-500 ${
              item.size === 'large' ? 'sm:col-span-2 sm:row-span-2' :
              item.size === 'wide' ? 'sm:col-span-2' : ''
            }`}
            onClick={() => setActiveItem(item)}
          >
            {/* Image */}
            <div className={`relative overflow-hidden ${
              item.size === 'large' ? 'h-80 sm:h-[480px]' :
              item.size === 'wide' ? 'h-52' : 'h-52'
            }`}>
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#0B0F19]/70 border border-gray-700/60 text-gray-400 text-xs tracking-wide backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Info icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0B0F19]/70 border border-gray-700/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <Info className="w-3.5 h-3.5 text-amber-400" />
              </div>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-gray-50 font-medium text-lg mb-1">{item.title}</h3>
              <p className="text-amber-400 text-xs tracking-wide">{item.caption}</p>

              {/* Hover reveal text */}
              <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 mt-2">
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                  {item.explanation}
                </p>
                <button className="mt-2 text-amber-400 text-xs hover:text-amber-300 transition-colors">
                  Read more →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0B0F19]/95 backdrop-blur-md"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111827] rounded-2xl border border-gray-700 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0B0F19]/80 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gray-100 hover:border-gray-500 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111827]/30 hidden md:block" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <span className="text-amber-400 text-xs tracking-widest uppercase mb-3">
                  {activeItem.category}
                </span>
                <h2 className="text-2xl font-light text-gray-50 mb-2">{activeItem.title}</h2>
                <p className="text-amber-400/80 text-sm mb-6">{activeItem.caption}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{activeItem.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
