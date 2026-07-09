import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const introImages = [
  {
    id: 'intro-cell',
    imgId: 'intro-img-cell-a1b2c3',
    titleId: 'intro-cell-title',
    descId: 'intro-cell-desc',
    title: 'Living Cells',
    desc: 'Microscopic view of living cells under electron microscope',
    ratio: '1x1',
  },
  {
    id: 'intro-bacteria',
    imgId: 'intro-img-bacteria-d4e5f6',
    titleId: 'intro-bacteria-title',
    descId: 'intro-bacteria-desc',
    title: 'Bacteria Colonies',
    desc: 'Colorful bacteria colonies growing on petri dish',
    ratio: '1x1',
  },
  {
    id: 'intro-crystal',
    imgId: 'intro-img-crystal-g7h8i9',
    titleId: 'intro-crystal-title',
    descId: 'intro-crystal-desc',
    title: 'Micro Crystals',
    desc: 'Stunning crystalline structures under polarized light microscopy',
    ratio: '1x1',
  },
];

const IntroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-24 md:py-32 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-medium px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              What is MicroCosmos
            </div>
            <h2
              id="intro-section-title"
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              A Universe Too Small
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                to See, Yet Vast
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              The microcosmos is a world that exists all around us — in every drop of water,
              every breath of air, every grain of soil. It is teeming with life, structure,
              and beauty that the naked eye cannot perceive.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Through the lens of powerful microscopes, scientists and artists have revealed
              landscapes of extraordinary complexity: cells dividing, crystals forming,
              organisms dancing in water droplets, and structures of breathtaking geometric perfection.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '10⁻⁶', label: 'Micrometers' },
                { value: '8.7M', label: 'Known Species' },
                { value: '37T', label: 'Cells in Body' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            {introImages.slice(0, 2).map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-2xl aspect-square group">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [intro-section-title]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p id={item.titleId} className="text-white text-sm font-semibold">{item.title}</p>
                  <p id={item.descId} className="sr-only">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="col-span-2 relative overflow-hidden rounded-2xl aspect-video group">
              <img
                alt={introImages[2].title}
                data-strk-img-id={introImages[2].imgId}
                data-strk-img={`[${introImages[2].descId}] [${introImages[2].titleId}] [intro-section-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/80 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p id={introImages[2].titleId} className="text-white text-sm font-semibold">{introImages[2].title}</p>
                <p id={introImages[2].descId} className="sr-only">{introImages[2].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
