import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Introduction = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="introduction" ref={containerRef} className="bg-cosmos-bg py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-cosmos-cyan text-sm font-medium tracking-widest uppercase mb-4">
            What is MicroCosmos?
          </p>
          <h2 id="intro-title" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            A Universe Hidden in Plain Sight
          </h2>
          <p id="intro-desc" className="text-slate-300 text-lg leading-relaxed mb-6">
            Beneath the threshold of human vision lies an entire cosmos teeming with life, structure, and wonder. From the intricate lattice of a snowflake crystal to the alien landscape of a single drop of pond water, the microscopic world is endlessly fascinating.
          </p>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Modern microscopy techniques — from electron microscopy to fluorescence imaging — have allowed scientists and artists alike to capture these invisible realms in stunning detail, revealing patterns and forms that rival any work of art.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-black text-cosmos-cyan">10<sup>30</sup></p>
              <p className="text-slate-400 text-sm mt-1">Microbes on Earth</p>
            </div>
            <div>
              <p className="text-3xl font-black text-cosmos-violet">37T</p>
              <p className="text-slate-400 text-sm mt-1">Cells in the human body</p>
            </div>
            <div>
              <p className="text-3xl font-black text-cosmos-emerald">1μm</p>
              <p className="text-slate-400 text-sm mt-1">Average bacterium size</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-cosmos-border shadow-2xl shadow-cosmos-cyan/10">
            <img
              alt="Microscopic world introduction"
              data-strk-img-id="intro-img-mc002"
              data-strk-img="[intro-desc] [intro-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative glow */}
          <div className="absolute -inset-4 rounded-3xl bg-cosmos-cyan/5 blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
