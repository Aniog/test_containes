import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function FeatureSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-gray-950 py-24 md:py-32 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4 block">Technology</span>
            <h2 id="microscopy-title" className="text-4xl font-bold text-white mb-6 leading-tight">
              The Art of Microscopy
            </h2>
            <p id="microscopy-desc" className="text-gray-300 leading-relaxed mb-6">
              Modern microscopy has transformed our understanding of life at the smallest scales. From light microscopes to electron microscopes capable of imaging individual atoms, these instruments reveal a world of staggering complexity.
            </p>
            <ul className="space-y-3">
              {['Confocal Laser Scanning Microscopy', 'Transmission Electron Microscopy', 'Atomic Force Microscopy', 'Fluorescence Microscopy'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-gray-700 col-span-2">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Electron microscope image"
                className="w-full h-56 object-cover"
                data-strk-img-id="micro-img-mc009"
                data-strk-img="[microscopy-desc] [microscopy-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-700">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Fluorescence microscopy"
                className="w-full h-36 object-cover"
                data-strk-img-id="micro-img-mc010"
                data-strk-img="[microscopy-desc] [microscopy-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-700">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscope laboratory"
                className="w-full h-36 object-cover"
                data-strk-img-id="micro-img-mc011"
                data-strk-img="[microscopy-title] [microscopy-desc]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-lg shadow-emerald-500/10">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Microbial ecosystem"
              className="w-full h-96 object-cover"
              data-strk-img-id="eco-img-mc012"
              data-strk-img="[ecosystem-desc] [ecosystem-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4 block">Ecosystems</span>
            <h2 id="ecosystem-title" className="text-4xl font-bold text-white mb-6 leading-tight">
              Invisible Ecosystems All Around Us
            </h2>
            <p id="ecosystem-desc" className="text-gray-300 leading-relaxed mb-6">
              Every surface, every drop of water, every breath of air teems with microbial life. These invisible ecosystems actively drive the cycles of carbon, nitrogen, and oxygen that sustain all life on Earth.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Ocean Microbiome', val: '10²⁹ cells' },
                { label: 'Soil Microbiome', val: '1B per gram' },
                { label: 'Human Gut', val: '38T bacteria' },
                { label: 'Atmosphere', val: '1M per m³' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                  <div className="text-emerald-400 font-bold text-lg">{item.val}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
