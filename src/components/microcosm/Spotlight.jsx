import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightItems = [
  { id: 'spot-title-1', title: 'Extremophiles', subtitle: 'Life at the Edge', imgId: 'spot-img-mc040', desc: 'Organisms thriving in boiling vents and frozen tundra' },
  { id: 'spot-title-2', title: 'Bioluminescence', subtitle: 'Living Light', imgId: 'spot-img-mc041', desc: 'Microscopic organisms that produce their own light' },
  { id: 'spot-title-3', title: 'Quorum Sensing', subtitle: 'Bacterial Communication', imgId: 'spot-img-mc042', desc: 'How bacteria coordinate behavior through chemical signals' },
];

const Spotlight = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#050a14] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="spotlight-label" className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Phenomena
          </p>
          <h2 id="spotlight-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Remarkable Discoveries
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Science continues to uncover astonishing behaviors and structures at the microscopic scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {spotlightItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-[#0d1a2e] border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}] [spotlight-title] [spotlight-label]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a2e] to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-2">{item.subtitle}</p>
                <h3 id={item.id} className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
