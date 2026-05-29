import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const habitats = [
  {
    id: 'hab-ocean',
    imgId: 'hab-img-mc021',
    title: 'Ocean Depths',
    subtitle: 'Marine Microbiology',
    desc: 'The ocean is the largest microbial habitat on Earth. Phytoplankton, cyanobacteria, and marine archaea drive global nutrient cycles and produce half of all atmospheric oxygen.',
    accent: 'text-cyan-400',
  },
  {
    id: 'hab-soil',
    imgId: 'hab-img-mc022',
    title: 'Forest Soil',
    subtitle: 'Terrestrial Ecosystems',
    desc: 'A single handful of forest soil contains more microbial species than there are plant species on Earth. Fungi, bacteria, and nematodes form intricate webs that sustain all plant life.',
    accent: 'text-teal-400',
  },
  {
    id: 'hab-extreme',
    imgId: 'hab-img-mc023',
    title: 'Extreme Environments',
    subtitle: 'Extremophiles',
    desc: 'Hydrothermal vents, acidic hot springs, and polar ice sheets host extremophile microbes that thrive where no other life can survive — expanding our understanding of life\'s limits.',
    accent: 'text-amber-400',
  },
];

export default function HabitatsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050a14] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p id="hab-label" className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Where They Live
          </p>
          <h2 id="hab-title" className="text-3xl md:text-4xl font-bold text-[#e2f4ff] mb-4">
            Microbial Habitats
          </h2>
          <p className="text-[#94b8d0] max-w-xl mx-auto text-base leading-relaxed">
            Microorganisms colonize every corner of our planet — from the deepest ocean trenches to the highest mountain peaks.
          </p>
        </div>

        {/* Habitat cards */}
        <div className="flex flex-col gap-10">
          {habitats.map((hab, i) => (
            <div
              key={hab.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image — alternate sides */}
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-[0_0_30px_rgba(0,200,255,0.1)]">
                  <img
                    id={hab.id}
                    alt={hab.title}
                    className="w-full h-64 md:h-80 object-cover"
                    data-strk-img-id={hab.imgId}
                    data-strk-img={`[${hab.id}] [hab-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${hab.accent}`}>
                  {hab.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#e2f4ff] mb-4">{hab.title}</h3>
                <p className="text-[#94b8d0] text-base leading-relaxed">{hab.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
