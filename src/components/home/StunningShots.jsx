import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const shots = [
  {
    id: 's1', imgId: 'shot-img-mc401', titleId: 'shot-title-s1', descId: 'shot-desc-s1',
    title: 'Fluorescent Neurons', desc: 'Brain neurons lit up with fluorescent dye under confocal microscopy',
    ratio: '3x4', width: '600', span: 'row-span-2',
  },
  {
    id: 's2', imgId: 'shot-img-mc402', titleId: 'shot-title-s2', descId: 'shot-desc-s2',
    title: 'Moth Eye Surface', desc: 'Anti-reflective nanostructure on a moth eye surface',
    ratio: '3x2', width: '700', span: '',
  },
  {
    id: 's3', imgId: 'shot-img-mc403', titleId: 'shot-title-s3', descId: 'shot-desc-s3',
    title: 'Coral Polyp', desc: 'Microscopic coral polyp tentacles under UV fluorescence',
    ratio: '3x2', width: '700', span: '',
  },
  {
    id: 's4', imgId: 'shot-img-mc404', titleId: 'shot-title-s4', descId: 'shot-desc-s4',
    title: 'Radiolarian Shell', desc: 'Intricate silica skeleton of a radiolarian protozoan',
    ratio: '3x4', width: '600', span: 'row-span-2',
  },
  {
    id: 's5', imgId: 'shot-img-mc405', titleId: 'shot-title-s5', descId: 'shot-desc-s5',
    title: 'Dust Mite', desc: 'Household dust mite magnified 200x under electron microscope',
    ratio: '3x2', width: '700', span: '',
  },
  {
    id: 's6', imgId: 'shot-img-mc406', titleId: 'shot-title-s6', descId: 'shot-desc-s6',
    title: 'Caffeine Crystal', desc: 'Caffeine molecule crystallized and photographed under polarized light',
    ratio: '3x2', width: '700', span: '',
  },
];

export default function StunningShots() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0a1628] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-cosmos-violet mb-4">
            Award-Winning Imagery
          </p>
          <h2 id="shots-section-title" className="text-3xl md:text-5xl font-bold text-cosmos-text mb-6">
            Stunning Shots
          </h2>
          <p className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            These extraordinary images push the boundaries of scientific photography, turning biology and chemistry into breathtaking art.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[220px]">
          {shots.map((shot) => (
            <div
              key={shot.id}
              className={`group relative overflow-hidden rounded-2xl border border-cosmos-border bg-cosmos-card ${shot.span}`}
            >
              {/* Hidden text for image query */}
              <span id={shot.titleId} className="sr-only">{shot.title}</span>
              <span id={shot.descId} className="sr-only">{shot.desc}</span>

              <img
                alt={shot.title}
                data-strk-img-id={shot.imgId}
                data-strk-img={`[${shot.descId}] [${shot.titleId}] [shots-section-title]`}
                data-strk-img-ratio={shot.ratio}
                data-strk-img-width={shot.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/80 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-cosmos-text font-semibold text-sm md:text-base">{shot.title}</h3>
                <p className="text-cosmos-muted text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                  {shot.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
