import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'gal-img-1a2b', category: 'Aurora', titleId: 'gal-t1', descId: 'gal-d1', title: 'Aurora Borealis', desc: 'Charged solar particles collide with atmospheric gases, producing curtains of green and violet light over polar regions.', physics: 'Solar wind + Earth\'s magnetosphere → photon emission', ratio: '3x2', width: 700, span: 'sm:col-span-2' },
  { id: 'gal-img-3c4d', category: 'Aurora', titleId: 'gal-t2', descId: 'gal-d2', title: 'Aurora Australis', desc: 'The southern counterpart — shimmering ribbons of light dancing above Antarctica and southern latitudes.', physics: 'Oxygen at 100km altitude emits green; at 200km, red', ratio: '1x1', width: 400, span: '' },
  { id: 'gal-img-5e6f', category: 'Eclipse', titleId: 'gal-t3', descId: 'gal-d3', title: 'Total Solar Eclipse', desc: 'The Moon perfectly covers the Sun\'s disk, revealing the ethereal solar corona — a plasma atmosphere extending millions of kilometers.', physics: 'Umbra shadow: ~100km wide; totality lasts up to 7.5 min', ratio: '1x1', width: 400, span: '' },
  { id: 'gal-img-7g8h', category: 'Eclipse', titleId: 'gal-t4', descId: 'gal-d4', title: 'Blood Moon — Lunar Eclipse', desc: 'Earth\'s shadow falls on the Moon. Sunlight refracted through Earth\'s atmosphere bathes the Moon in deep crimson.', physics: 'Rayleigh scattering filters blue light, leaving red wavelengths', ratio: '3x2', width: 700, span: 'sm:col-span-2' },
  { id: 'gal-img-9i0j', category: 'Deep Sky', titleId: 'gal-t5', descId: 'gal-d5', title: 'Andromeda Galaxy (M31)', desc: 'Our nearest large galactic neighbor — 2.537 million light-years away, containing over a trillion stars.', physics: 'Approaching at ~110 km/s; will merge with Milky Way in ~4.5 Gyr', ratio: '3x2', width: 700, span: 'sm:col-span-2' },
  { id: 'gal-img-1k2l', category: 'Deep Sky', titleId: 'gal-t6', descId: 'gal-d6', title: 'Pleiades Star Cluster', desc: 'The Seven Sisters — an open cluster of hot blue stars ~440 light-years away, embedded in a reflection nebula.', physics: 'Age: ~100 million years; ~1,000 confirmed member stars', ratio: '1x1', width: 400, span: '' },
  { id: 'gal-img-3m4n', category: 'Deep Sky', titleId: 'gal-t7', descId: 'gal-d7', title: 'Pillars of Creation', desc: 'Towering columns of gas and dust in the Eagle Nebula — stellar nurseries where new stars are actively forming.', physics: 'Height: ~4–5 light-years; imaged by Hubble in 1995 and JWST in 2022', ratio: '1x1', width: 400, span: '' },
  { id: 'gal-img-5o6p', category: 'Nebula', titleId: 'gal-t8', descId: 'gal-d8', title: 'Crab Nebula (M1)', desc: 'The remnant of a supernova observed by Chinese astronomers in 1054 AD. At its center lies a rapidly spinning pulsar.', physics: 'Pulsar rotates 30 times per second; expanding at 1,500 km/s', ratio: '3x2', width: 700, span: 'sm:col-span-2' },
  { id: 'gal-img-7q8r', category: 'Nebula', titleId: 'gal-t9', descId: 'gal-d9', title: 'Horsehead Nebula', desc: 'A dark nebula silhouetted against the glowing emission nebula IC 434 in Orion — one of astronomy\'s most iconic images.', physics: 'Distance: ~1,375 light-years; dark cloud of dense gas and dust', ratio: '1x1', width: 400, span: '' },
  { id: 'gal-img-9s0t', category: 'Planet', titleId: 'gal-t10', descId: 'gal-d10', title: 'Saturn\'s Rings', desc: 'Saturn\'s iconic ring system — composed of billions of ice and rock particles ranging from micrometers to meters in size.', physics: 'Ring span: ~282,000 km; thickness: only ~10–100 meters', ratio: '1x1', width: 400, span: '' },
  { id: 'gal-img-1u2v', category: 'Planet', titleId: 'gal-t11', descId: 'gal-d11', title: 'Jupiter\'s Great Red Spot', desc: 'A persistent anticyclonic storm larger than Earth, raging for at least 350 years in Jupiter\'s southern hemisphere.', physics: 'Wind speeds: ~430 km/h; storm is slowly shrinking over decades', ratio: '3x2', width: 700, span: 'sm:col-span-2' },
  { id: 'gal-img-3w4x', category: 'Milky Way', titleId: 'gal-t12', descId: 'gal-d12', title: 'Milky Way Core', desc: 'The galactic center of our home galaxy — a dense band of stars, gas, and dust surrounding the supermassive black hole Sagittarius A*.', physics: 'Sgr A* mass: ~4 million solar masses; distance: ~26,000 light-years', ratio: '3x2', width: 700, span: 'sm:col-span-2' },
];

const categories = ['All', 'Aurora', 'Eclipse', 'Deep Sky', 'Nebula', 'Planet', 'Milky Way'];

export default function GalleryGrid() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter((i) => i.category === activeCategory);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#f5c842] text-[#0a0e1a] border-[#f5c842]'
                  : 'border-[#1e2a4a] text-[#8892b0] hover:border-[#f5c842]/40 hover:text-[#f0f4ff]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map(({ id, category, titleId, descId, title, desc, physics, ratio, width, span }) => (
            <div
              key={id}
              className={`group relative rounded-2xl overflow-hidden border border-[#1e2a4a] hover:border-[#6366f1]/40 transition-all duration-500 ${span}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${title} — ${desc}`}
                  data-strk-img-id={id}
                  data-strk-img={`[${descId}] [${titleId}] astronomy`}
                  data-strk-img-ratio={ratio}
                  data-strk-img-width={width}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0a0e1a]/70 backdrop-blur-sm rounded-full text-[10px] font-mono tracking-widest uppercase text-[#f5c842] border border-[#f5c842]/20">
                  {category}
                </div>
              </div>
              <div className="p-5 bg-[#0f1629]">
                <h3 id={titleId} className="text-sm font-medium text-[#f0f4ff] mb-2 leading-snug">{title}</h3>
                <p id={descId} className="text-xs text-[#8892b0] leading-relaxed mb-3 line-clamp-2">{desc}</p>
                <p className="text-[10px] text-[#4a5568] font-mono leading-relaxed">⚛ {physics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
