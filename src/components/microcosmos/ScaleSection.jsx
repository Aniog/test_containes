import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ScaleSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="scale" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Perspective</span>
          <h2 id="scale-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Matter of <span className="text-violet-400">Scale</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From the human scale down to the atomic — each order of magnitude reveals a new world of complexity and wonder.
          </p>
        </div>

        {/* Scale bar */}
        <div className="relative mb-20">
          <div className="flex items-center justify-between mb-3">
            {['1m', '1cm', '1mm', '100μm', '10μm', '1μm', '100nm', '1nm'].map((label) => (
              <span key={label} className="text-slate-500 text-xs font-mono">{label}</span>
            ))}
          </div>
          <div className="h-2 rounded-full bg-gradient-to-r from-slate-600 via-cyan-500 to-violet-500" />
          <div className="flex items-center justify-between mt-3">
            {['Human', 'Ant', 'Hair', 'Cell', 'Bacteria', 'Virus', 'Protein', 'Atom'].map((label) => (
              <span key={label} className="text-slate-400 text-xs text-center">{label}</span>
            ))}
          </div>
        </div>

        {/* Zoom journey */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              id: 'scale-mc001',
              titleId: 'scale-title-1',
              descId: 'scale-desc-1',
              zoom: '×10',
              title: 'Macro World',
              desc: 'Insects, plant structures, and small organisms visible with a hand lens or basic magnifier',
              ratio: '4x3',
              width: 600,
            },
            {
              id: 'scale-mc002',
              titleId: 'scale-title-2',
              descId: 'scale-desc-2',
              zoom: '×1,000',
              title: 'Cellular World',
              desc: 'Individual cells, bacteria, and microorganisms revealed by optical light microscopy',
              ratio: '4x3',
              width: 600,
            },
            {
              id: 'scale-mc003',
              titleId: 'scale-title-3',
              descId: 'scale-desc-3',
              zoom: '×1,000,000',
              title: 'Molecular World',
              desc: 'Proteins, DNA strands, and viral particles imaged by electron microscopy',
              ratio: '4x3',
              width: 600,
            },
          ].map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden border border-slate-700/50 hover:border-violet-400/50 transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={item.id}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [scale-heading] magnification`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                />
              </div>
              <div className="absolute top-4 right-4 bg-violet-500/80 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
                {item.zoom}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 id={item.titleId} className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p id={item.descId} className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;
