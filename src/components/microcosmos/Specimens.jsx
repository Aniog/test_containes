import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specimens = [
  {
    id: 'sp1',
    imgId: 'spec-img-mc001',
    titleId: 'spec-title-mc001',
    subtitleId: 'spec-sub-mc001',
    title: 'Vorticella',
    subtitle: 'Bell-shaped ciliate',
    desc: 'A stalked protozoan that contracts rapidly when disturbed, found in freshwater environments worldwide.',
    tag: 'Protozoa',
  },
  {
    id: 'sp2',
    imgId: 'spec-img-mc002',
    titleId: 'spec-title-mc002',
    subtitleId: 'spec-sub-mc002',
    title: 'Rotifer',
    subtitle: 'Wheel animalcule',
    desc: 'Microscopic aquatic animals with a crown of cilia that creates a wheel-like motion for feeding and locomotion.',
    tag: 'Animalia',
  },
  {
    id: 'sp3',
    imgId: 'spec-img-mc003',
    titleId: 'spec-title-mc003',
    subtitleId: 'spec-sub-mc003',
    title: 'Spirogyra',
    subtitle: 'Spiral green algae',
    desc: 'Filamentous green algae with distinctive spiral chloroplasts, forming silky mats in still freshwater.',
    tag: 'Algae',
  },
  {
    id: 'sp4',
    imgId: 'spec-img-mc004',
    titleId: 'spec-title-mc004',
    subtitleId: 'spec-sub-mc004',
    title: 'Nematode',
    subtitle: 'Roundworm',
    desc: 'The most abundant multicellular animals on Earth — billions inhabit every square meter of soil.',
    tag: 'Nematoda',
  },
];

export default function Specimens() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="specimens" ref={containerRef} className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Field Guide</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Specimens</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800">
          {specimens.map((item) => (
            <div key={item.id} className="bg-black group">
              <div className="relative overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.subtitleId}] [${item.titleId}] microscopy organism`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-56 object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black text-xs font-bold uppercase tracking-widest px-3 py-1">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 id={item.titleId} className="text-white font-bold text-2xl tracking-tight">{item.title}</h3>
                <p id={item.subtitleId} className="text-neutral-500 text-sm uppercase tracking-widest mt-1 mb-4">{item.subtitle}</p>
                <p className="text-neutral-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
