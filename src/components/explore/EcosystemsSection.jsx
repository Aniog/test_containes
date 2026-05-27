import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ecosystems = [
  {
    id: 'ocean',
    name: 'Ocean Depths',
    description: 'From sunlit surface waters teeming with phytoplankton to the crushing darkness of the hadal zone, the ocean hosts the most diverse microbial communities on Earth.',
    organisms: ['Diatoms', 'Cyanobacteria', 'Marine Archaea', 'Bioluminescent Bacteria'],
    imgId: 'eco-ocean-mc020',
  },
  {
    id: 'soil',
    name: 'Forest Soil',
    description: 'A single teaspoon of healthy forest soil contains more microorganisms than there are people on Earth. Fungi, bacteria, and archaea form complex networks that sustain all plant life.',
    organisms: ['Mycorrhizal Fungi', 'Actinobacteria', 'Nematodes', 'Protozoa'],
    imgId: 'eco-soil-mc021',
  },
  {
    id: 'hydrothermal',
    name: 'Hydrothermal Vents',
    description: 'In the pitch-black ocean floor, superheated water rich in minerals supports entire ecosystems powered not by sunlight, but by chemosynthesis.',
    organisms: ['Thermophilic Archaea', 'Sulfur Bacteria', 'Tube Worm Symbionts'],
    imgId: 'eco-hydrothermal-mc022',
  },
];

const EcosystemsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-20 border-t border-slate-800">
      <div className="mb-12">
        <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">Habitats</span>
        <h2 id="eco-heading" className="font-grotesk font-bold text-3xl md:text-4xl text-white mt-3 mb-4">
          Microscopic Ecosystems
        </h2>
        <p className="text-slate-400 max-w-xl">
          Every environment on Earth harbors unique microbial communities adapted to their specific conditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ecosystems.map((eco) => (
          <div
            key={eco.id}
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden bg-slate-800">
              <img
                alt={eco.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-strk-img-id={eco.imgId}
                data-strk-img={`[${eco.id}-desc] [${eco.id}-name] [eco-heading]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
            </div>
            <div className="p-6">
              <h3 id={`${eco.id}-name`} className="font-grotesk font-bold text-xl text-white mb-3">{eco.name}</h3>
              <p id={`${eco.id}-desc`} className="text-slate-400 text-sm leading-relaxed mb-4">{eco.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {eco.organisms.map((org) => (
                  <span key={org} className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    {org}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcosystemsSection;
