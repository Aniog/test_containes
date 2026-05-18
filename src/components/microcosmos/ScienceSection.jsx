import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ScienceSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="bg-neutral-950 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">The Science</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            How We See<br />the Invisible
          </h2>
        </div>

        {/* Feature row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-1">
          <div className="relative overflow-hidden group">
            <img
              alt="Electron microscope"
              data-strk-img-id="science-img-mc001"
              data-strk-img="[science-sub-mc001] [science-title-mc001] laboratory microscopy"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-72 md:h-96 object-cover grayscale group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Technology</p>
              <h3 id="science-title-mc001" className="text-white font-bold text-2xl">Scanning Electron Microscopy</h3>
              <p id="science-sub-mc001" className="text-neutral-300 text-sm mt-2 leading-relaxed">
                SEM uses focused beams of electrons to produce high-resolution 3D images of surfaces at nanometer scale.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden group">
            <img
              alt="Fluorescence microscopy"
              data-strk-img-id="science-img-mc002"
              data-strk-img="[science-sub-mc002] [science-title-mc002] fluorescence biology cell"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-72 md:h-96 object-cover grayscale group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Technology</p>
              <h3 id="science-title-mc002" className="text-white font-bold text-2xl">Fluorescence Microscopy</h3>
              <p id="science-sub-mc002" className="text-neutral-300 text-sm mt-2 leading-relaxed">
                Fluorescent dyes illuminate specific cellular structures, revealing the architecture of living cells in extraordinary detail.
              </p>
            </div>
          </div>
        </div>

        {/* Wide feature */}
        <div className="relative overflow-hidden group">
          <img
            alt="Confocal microscopy"
            data-strk-img-id="science-img-mc003"
            data-strk-img="[science-sub-mc003] [science-title-mc003] confocal microscopy neuron brain"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-64 md:h-80 object-cover grayscale group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
          <div className="absolute top-0 left-0 bottom-0 flex flex-col justify-center p-8 md:p-16 max-w-xl">
            <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Technology</p>
            <h3 id="science-title-mc003" className="text-white font-bold text-2xl md:text-3xl">Confocal Laser Scanning</h3>
            <p id="science-sub-mc003" className="text-neutral-300 text-sm mt-3 leading-relaxed">
              By eliminating out-of-focus light, confocal microscopy creates razor-sharp optical sections through thick biological specimens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
