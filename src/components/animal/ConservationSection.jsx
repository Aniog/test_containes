import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ConservationSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="conservation" ref={containerRef} className="py-24 bg-emerald-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="conservation-bg-5h8j2"
        data-strk-bg="[conservation-subtitle] [conservation-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
      />
      <div className="absolute inset-0 bg-emerald-900/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-emerald-300 font-semibold text-sm uppercase tracking-widest">Take Action</span>
        <h2
          id="conservation-title"
          className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Protect Our Wildlife
        </h2>
        <p
          id="conservation-subtitle"
          className="text-emerald-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Every species lost is an irreplaceable thread in the web of life. Together, we can protect the animals and habitats that make our planet extraordinary.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { emoji: '🌱', title: 'Support Conservation', desc: 'Donate to wildlife organizations working to protect endangered species.' },
            { emoji: '📢', title: 'Spread Awareness', desc: 'Share knowledge about threatened animals and their habitats with others.' },
            { emoji: '🌿', title: 'Live Sustainably', desc: 'Reduce your environmental footprint to help preserve natural ecosystems.' },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-left">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-emerald-200 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="bg-white text-emerald-900 font-bold text-lg px-10 py-4 rounded-full hover:bg-emerald-50 transition-colors duration-200 shadow-lg">
          Learn How to Help
        </button>
      </div>
    </section>
  );
};

export default ConservationSection;
