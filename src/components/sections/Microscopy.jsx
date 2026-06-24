import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Microscopy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" className="py-24 px-4 bg-slate-900 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 id="micro-title" className="text-4xl md:text-5xl font-bold text-white">Lenses of Perception</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <span className="text-emerald-400 font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Light Microscopy</h4>
                  <p className="text-slate-400">The classic method using visible light and glass lenses to magnify specimens up to 2000x.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <span className="text-emerald-400 font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Scanning Electron (SEM)</h4>
                  <p className="text-slate-400">Using electron beams to map the 3D topography of surfaces with incredible depth of field.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <span className="text-emerald-400 font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Transmission Electron (TEM)</h4>
                  <p className="text-slate-400">Passing electrons through ultra-thin specimens to reveal internal atomic-level details.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
              <img 
                data-strk-img-id="scanning-electron-microscope"
                data-strk-img="[micro-title] Scanning Electron Microscope laboratory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Scanning Electron Microscope"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Microscopy;
