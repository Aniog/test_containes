import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function FullWidthBanner() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="banner-bg-mc-x9y8z7"
        data-strk-bg="[banner-subtitle] [banner-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-cosmos-deep/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-cosmos-deep/80 via-transparent to-cosmos-deep/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p
          id="banner-subtitle"
          className="text-cosmos-cyan text-xs font-semibold uppercase tracking-widest mb-4"
        >
          Scale of the Universe
        </p>
        <h2
          id="banner-title"
          className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
        >
          From Atoms to Galaxies,
          <br />
          <span className="bg-gradient-to-r from-cosmos-cyan to-cosmos-violet bg-clip-text text-transparent">
            Scale is Everything
          </span>
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          A human hair is 70,000 nanometers wide. A water molecule is 0.3
          nanometers. Between these extremes lies an entire universe of
          structure, life, and wonder.
        </p>

        {/* Scale bar */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-0 md:flex-nowrap items-center">
          {[
            { label: 'Atom', size: '0.1 nm', color: 'bg-cosmos-violet' },
            { label: 'Virus', size: '100 nm', color: 'bg-cosmos-cyan' },
            { label: 'Bacterium', size: '1 µm', color: 'bg-cosmos-emerald' },
            { label: 'Cell', size: '10 µm', color: 'bg-cosmos-amber' },
            { label: 'Hair', size: '70 µm', color: 'bg-red-400' },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center">
              <div className="text-center px-3 md:px-4">
                <div className={`w-3 h-3 rounded-full ${item.color} mx-auto mb-1`} />
                <div className="text-white text-xs font-bold">{item.label}</div>
                <div className="text-slate-400 text-xs font-mono">{item.size}</div>
              </div>
              {i < 4 && (
                <div className="hidden md:block h-px w-8 bg-gradient-to-r from-slate-600 to-slate-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
