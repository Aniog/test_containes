import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function FeatureSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#0d1b2a]">
      <div className="max-w-6xl mx-auto">

        {/* Feature 1 — image left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-24">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,212,255,0.15)] animate-pulse-glow">
            <img
              alt="Electron microscopy"
              className="w-full h-80 md:h-96 object-cover"
              data-strk-img-id="feature-img-mc005"
              data-strk-img="[feature1-desc] [feature1-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00d4ff]/10 to-transparent pointer-events-none" />
          </div>
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-[#00d4ff] mb-3">Electron Microscopy</p>
            <h2 id="feature1-title" className="text-3xl md:text-4xl font-bold text-[#f0f8ff] mb-5 leading-tight">
              Seeing at the Nanoscale
            </h2>
            <p id="feature1-desc" className="text-[#8bafc7] leading-relaxed mb-6">
              Electron microscopes fire beams of electrons to reveal structures thousands of times smaller than visible light can resolve. Viruses, DNA strands, and individual atoms become visible — a window into the fundamental fabric of matter.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[['0.1 nm', 'Resolution'], ['100,000×', 'Magnification'], ['1930s', 'Invented'], ['Atoms', 'Visible']].map(([val, label]) => (
                <div key={label} className="bg-[#0f2236] rounded-xl p-4 border border-[#00d4ff]/15">
                  <div className="text-2xl font-bold text-[#00d4ff]">{val}</div>
                  <div className="text-xs text-[#8bafc7] mt-1 tracking-wide uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature 2 — image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm font-medium tracking-widest uppercase text-[#7c3aed] mb-3">Fluorescence Imaging</p>
            <h2 id="feature2-title" className="text-3xl md:text-4xl font-bold text-[#f0f8ff] mb-5 leading-tight">
              Life in Living Color
            </h2>
            <p id="feature2-desc" className="text-[#8bafc7] leading-relaxed mb-6">
              Fluorescent dyes and proteins light up specific structures inside living cells, turning biology into a neon light show. Scientists can track proteins, watch cell division in real time, and map the architecture of life itself.
            </p>
            <ul className="space-y-3">
              {[
                'GFP (Green Fluorescent Protein) revolutionized cell biology',
                'Super-resolution microscopy breaks the diffraction limit',
                'Live-cell imaging captures dynamic processes in real time',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#8bafc7] text-sm">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#7c3aed] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(124,58,237,0.2)]">
            <img
              alt="Fluorescence microscopy"
              className="w-full h-80 md:h-96 object-cover"
              data-strk-img-id="feature-img-mc006"
              data-strk-img="[feature2-desc] [feature2-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-[#7c3aed]/10 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
