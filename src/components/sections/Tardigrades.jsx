import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Tardigrades = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 px-4 bg-slate-950" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-3xl overflow-hidden border border-slate-800">
             <img 
                data-strk-img-id="tardigrade-hero"
                data-strk-img="[tardigrade-title] [tardigrade-subtitle] water bear"
                data-strk-img-ratio="3x2"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Tardigrade"
                className="w-full h-full object-cover"
              />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 id="tardigrade-title" className="text-4xl md:text-5xl font-bold text-white">The Water Bear</h2>
            <p id="tardigrade-subtitle" className="text-xl text-emerald-400 font-medium">Nature's Most Resilient Creature</p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Tardigrades, also known as water bears, are microscopic animals capable of surviving the vacuum of space, extreme radiation, and temperatures near absolute zero. Measuring only 0.5mm, they represent the absolute peak of biological endurance in the MicroCosmos.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-2xl font-bold text-white">30 yrs</p>
                <p className="text-xs text-slate-500 uppercase">Without food</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-2xl font-bold text-white">-272°C</p>
                <p className="text-xs text-slate-500 uppercase">Temp Extreme</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tardigrades;
