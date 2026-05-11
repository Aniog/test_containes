import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const orgs = [
  { name: 'WWF', focus: 'Global wildlife protection' },
  { name: 'IUCN', focus: 'Red List & species assessment' },
  { name: 'WCS', focus: 'Wildlife Conservation Society' },
  { name: 'Panthera', focus: 'Wild cat conservation' },
];

export default function ConservationSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="conservation" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="conservation-bg-j1k2l3"
        data-strk-bg="[conservation-subtitle] [conservation-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-900/95 via-stone-900/80 to-stone-900/40" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Protecting Our Planet
          </p>
          <h2
            id="conservation-title"
            className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Wildlife Conservation
          </h2>
          <p
            id="conservation-subtitle"
            className="text-amber-300/80 italic text-lg mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Endangered animals and habitat preservation
          </p>
          <p className="text-stone-300 text-base leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Over one million animal and plant species are currently threatened with extinction — more than at any other time in human history. Habitat loss, climate change, poaching, and pollution are the primary drivers of this crisis.
          </p>
          <p className="text-stone-400 text-base leading-relaxed mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            Conservation organizations around the world are working tirelessly to protect endangered species, restore habitats, and educate communities about the importance of biodiversity.
          </p>

          {/* Organizations */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {orgs.map((org) => (
              <div key={org.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{org.name}</div>
                <div className="text-stone-400 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{org.focus}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-stone-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wide uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Support Conservation
            </a>
            <a
              href="#"
              className="inline-block border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wide uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
