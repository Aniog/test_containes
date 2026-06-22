import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Introduction = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="intro" ref={containerRef} className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <img 
                data-strk-img-id="intro-micro-img-1"
                data-strk-img="[intro-title] [intro-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopic World"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Artistic decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-1" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -z-1" />
          </div>

          <div>
            <h2 
              id="intro-title"
              className="text-3xl md:text-4xl font-bold text-slate-50 mb-6 leading-tight"
            >
              The Hidden Complexity of <span className="text-emerald-400">Microscopic Life</span>
            </h2>
            <div id="intro-desc">
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                Beyond the reach of the naked eye lies an intricate universe teeming with life. From the kaleidoscopic structures of radiolarians to the complex systems within a single cell, the MicroCosmos is a testament to the infinite layers of biological design.
              </p>
              <ul className="space-y-4">
                {[
                  'Ancient organisms that outdate civilizations',
                  'Biological processes happening in a billionth of a second',
                  'Geometric perfection found in nature\'s smallest building blocks'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
