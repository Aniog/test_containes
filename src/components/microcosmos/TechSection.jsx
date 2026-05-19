import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    imgId: 'feat-img-d5e6f7',
    titleId: 'feat-title-1',
    descId: 'feat-desc-1',
    title: 'Electron Microscopy',
    desc: 'Scanning electron microscopes reveal surface textures at nanometer resolution, producing stunning 3D-like images of microscopic structures.',
    tag: 'Technology',
  },
  {
    imgId: 'feat-img-g8h9i0',
    titleId: 'feat-title-2',
    descId: 'feat-desc-2',
    title: 'Fluorescence Imaging',
    desc: 'Fluorescent dyes and proteins light up specific structures inside living cells, turning biology into a neon art form.',
    tag: 'Technique',
  },
  {
    imgId: 'feat-img-j1k2l3',
    titleId: 'feat-title-3',
    descId: 'feat-desc-3',
    title: 'Polarized Light',
    desc: 'Polarized light microscopy transforms transparent crystals and minerals into explosions of color, revealing their internal structure.',
    tag: 'Optics',
  },
  {
    imgId: 'feat-img-m4n5o6',
    titleId: 'feat-title-4',
    descId: 'feat-desc-4',
    title: 'Confocal Microscopy',
    desc: 'Confocal microscopes build 3D images of cells and tissues by scanning thin optical sections, enabling virtual dissection of living specimens.',
    tag: 'Imaging',
  },
];

const TechSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="technology" ref={containerRef} className="py-20 md:py-28 bg-[#050a14]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            How We See
          </p>
          <h2
            id="tech-section-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            The Tools of Discovery
          </h2>
          <p
            id="tech-section-desc"
            className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed"
          >
            Modern microscopy techniques have transformed our ability to visualize the invisible, turning science into art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat) => (
            <div
              key={feat.imgId}
              className="group flex gap-5 bg-[#0d1b2e] border border-cyan-900/40 hover:border-cyan-400/40 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              <div className="w-36 md:w-44 flex-shrink-0 overflow-hidden">
                <img
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.descId}] [${feat.titleId}] [tech-section-desc] [tech-section-title]`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                />
              </div>
              <div className="p-5 flex flex-col justify-center">
                <span className="text-xs text-cyan-400 font-semibold tracking-widest uppercase mb-2">
                  {feat.tag}
                </span>
                <h3 id={feat.titleId} className="text-white font-bold text-lg mb-2">
                  {feat.title}
                </h3>
                <p id={feat.descId} className="text-slate-400 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
