import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'tardigrade',
    title: 'Water Bear (Tardigrade)',
    desc: 'Indestructible micro-animals capable of surviving extreme conditions.'
  },
  {
    id: 'diatom',
    title: 'Diatoms',
    desc: 'Microalgae with beautiful, intricate glass-like silica cell walls.'
  },
  {
    id: 't-cell',
    title: 'White Blood Cell',
    desc: 'The frontline defenders of our immune system.'
  },
  {
    id: 'bacteriophage',
    title: 'Bacteriophage',
    desc: 'Viruses that specifically infect and replicate within bacteria.'
  },
  {
    id: 'neuron',
    title: 'Neuron Network',
    desc: 'The complex web of cells firing electrical signals in the brain.'
  },
  {
    id: 'amoeba',
    title: 'Amoeba',
    desc: 'A single-celled organism capable of altering its shape.'
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Microscopic structures carrying plant reproductive material.'
  },
  {
    id: 'chloroplast',
    title: 'Chloroplasts',
    desc: 'The vibrant green engines of photosynthesis inside plant cells.'
  }
];

export default function MicroGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 id="gallery-title" className="text-4xl font-bold text-slate-100">
          Incredible Microorganisms
        </h2>
        <p id="gallery-desc" className="text-slate-400 max-w-2xl mx-auto">
          Life takes on alien and beautiful forms at the microscopic scale. These tiny entities are the foundation of all macroscopic life on Earth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {organisms.map((org) => (
          <article 
            key={org.id} 
            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 transition-all hover:border-cyan-800"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 object-cover">
              <img
                data-strk-img-id={`gallery-img-${org.id}`}
                data-strk-img={`[gallery-desc-${org.id}] [gallery-title-${org.id}] [gallery-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={org.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div className="p-5">
              <h3 id={`gallery-title-${org.id}`} className="text-lg font-semibold text-slate-200 mb-2">
                {org.title}
              </h3>
              <p id={`gallery-desc-${org.id}`} className="text-sm text-slate-400 leading-relaxed">
                {org.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
