import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const habitats = [
  {
    id: 'hab1',
    title: 'Ocean Depths',
    desc: 'The deep ocean harbors bioluminescent microbes and pressure-adapted extremophiles.',
    imgId: 'hab-img-mc019',
    ratio: '16x9',
    width: 800,
  },
  {
    id: 'hab2',
    title: 'Soil Ecosystems',
    desc: 'A single teaspoon of healthy soil contains more microbes than there are people on Earth.',
    imgId: 'hab-img-mc020',
    ratio: '16x9',
    width: 800,
  },
  {
    id: 'hab3',
    title: 'Freshwater Ponds',
    desc: 'Still water teems with algae, protozoa, and microscopic crustaceans in constant motion.',
    imgId: 'hab-img-mc021',
    ratio: '16x9',
    width: 800,
  },
];

const HabitatsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="hab-label" className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Where They Live
          </p>
          <h2 id="hab-title" className="text-4xl md:text-5xl font-bold text-[#e8f4f8]">
            Microscopic Habitats
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {habitats.map((hab) => (
            <div
              key={hab.id}
              className="group rounded-2xl overflow-hidden border border-[#1a3a4a] hover:border-[#00d4aa]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,170,0.2)] bg-[#0f1f35]"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={hab.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={hab.imgId}
                  data-strk-img={`[${hab.id}-desc] [${hab.id}-title] [hab-label]`}
                  data-strk-img-ratio={hab.ratio}
                  data-strk-img-width={hab.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f35] to-transparent" />
              </div>
              <div className="p-6">
                <h3 id={`${hab.id}-title`} className="text-xl font-bold text-[#e8f4f8] mb-2">{hab.title}</h3>
                <p id={`${hab.id}-desc`} className="text-[#94b8c8] leading-relaxed text-sm">{hab.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HabitatsSection;
