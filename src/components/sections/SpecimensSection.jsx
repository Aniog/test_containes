import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const SPECIMENS = [
  {
    id: 'spec-1',
    imgId: 'spec-img-q1r2s3',
    titleId: 'spec-title-1',
    descId: 'spec-desc-1',
    title: 'Radiolaria',
    desc: 'Single-celled organisms with intricate mineral skeletons',
    classification: 'Protozoa',
    size: '0.1 – 2 mm',
    habitat: 'Marine',
  },
  {
    id: 'spec-2',
    imgId: 'spec-img-t4u5v6',
    titleId: 'spec-title-2',
    descId: 'spec-desc-2',
    title: 'Vorticella',
    desc: 'Bell-shaped ciliate that contracts like a spring',
    classification: 'Ciliophora',
    size: '50 – 150 μm',
    habitat: 'Freshwater',
  },
  {
    id: 'spec-3',
    imgId: 'spec-img-w7x8y9',
    titleId: 'spec-title-3',
    descId: 'spec-desc-3',
    title: 'Penicillium',
    desc: 'The mold that gave us penicillin — a life-saving fungus',
    classification: 'Fungi',
    size: '2 – 4 μm spores',
    habitat: 'Soil / Air',
  },
  {
    id: 'spec-4',
    imgId: 'spec-img-z1a2b3',
    titleId: 'spec-title-4',
    descId: 'spec-desc-4',
    title: 'Paramecium',
    desc: 'Slipper-shaped ciliate, a classic of microscopy',
    classification: 'Ciliophora',
    size: '50 – 330 μm',
    habitat: 'Freshwater',
  },
];

export default function SpecimensSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="specimens" ref={containerRef} className="bg-neutral-950 py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase mb-3">Featured Specimens</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 id="spec-heading" className="text-white font-black text-4xl md:text-6xl tracking-tighter leading-none">
              Meet the<br />Inhabitants
            </h2>
            <p id="spec-subheading" className="text-neutral-400 text-base leading-relaxed max-w-sm">
              Each specimen tells a story millions of years in the making.
            </p>
          </div>
        </div>

        {/* Specimen cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPECIMENS.map((spec) => (
            <div key={spec.id} className="group flex gap-5 bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all p-0">
              {/* Image */}
              <div className="w-36 md:w-48 flex-shrink-0 overflow-hidden">
                <img
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={spec.imgId}
                  data-strk-img={`[${spec.descId}] [${spec.titleId}] [spec-subheading] [spec-heading]`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              {/* Info */}
              <div className="flex flex-col justify-center py-6 pr-6">
                <span className="text-neutral-500 text-xs font-medium tracking-widest uppercase mb-2">{spec.classification}</span>
                <h3 id={spec.titleId} className="text-white font-bold text-xl mb-2">{spec.title}</h3>
                <p id={spec.descId} className="text-neutral-400 text-sm leading-relaxed mb-4">{spec.desc}</p>
                <div className="flex gap-4 text-xs text-neutral-500">
                  <span>Size: <span className="text-neutral-300">{spec.size}</span></span>
                  <span>Habitat: <span className="text-neutral-300">{spec.habitat}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
