import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightItems = [
  {
    imgId: 'spot-img-p7q8r9',
    titleId: 'spot-title-1',
    descId: 'spot-desc-1',
    title: 'Radiolarian',
    desc: 'Ancient ocean microorganism with a glass-like silica skeleton of extraordinary geometric complexity',
    label: 'Ocean Life',
  },
  {
    imgId: 'spot-img-s0t1u2',
    titleId: 'spot-title-2',
    descId: 'spot-desc-2',
    title: 'Mitosis',
    desc: 'A cell dividing — chromosomes aligning and separating in a choreographed molecular dance',
    label: 'Cell Biology',
  },
  {
    imgId: 'spot-img-v3w4x5',
    titleId: 'spot-title-3',
    descId: 'spot-desc-3',
    title: 'Dust Mite',
    desc: 'The microscopic arachnid that shares our beds, invisible to the naked eye but revealed in stunning detail',
    label: 'Arachnida',
  },
  {
    imgId: 'spot-img-y6z7a8',
    titleId: 'spot-title-4',
    descId: 'spot-desc-4',
    title: 'Salt Crystal',
    desc: 'Common table salt forms perfect cubic crystals at the microscopic scale, a testament to atomic order',
    label: 'Mineralogy',
  },
  {
    imgId: 'spot-img-b9c0d1',
    titleId: 'spot-title-5',
    descId: 'spot-desc-5',
    title: 'Paramecium',
    desc: 'A single-celled ciliate propelling itself through water using thousands of hair-like cilia',
    label: 'Protist',
  },
  {
    imgId: 'spot-img-e2f3g4',
    titleId: 'spot-title-6',
    descId: 'spot-desc-6',
    title: 'Vitamin C Crystal',
    desc: 'Ascorbic acid crystallizes into vivid, colorful structures under polarized light microscopy',
    label: 'Chemistry',
  },
];

const SpotlightSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="spotlight" ref={containerRef} className="py-20 md:py-28 bg-[#0d1b2e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Specimen Spotlight
          </p>
          <h2
            id="spot-section-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Meet the Micro Inhabitants
          </h2>
          <p
            id="spot-section-desc"
            className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed"
          >
            Six remarkable subjects from the microscopic world, each with a story to tell about life, chemistry, and the nature of matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spotlightItems.map((item) => (
            <div
              key={item.imgId}
              className="group bg-[#0f2035] border border-cyan-900/40 hover:border-cyan-400/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [spot-section-desc] [spot-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2035] via-transparent to-transparent opacity-70" />
                <span className="absolute top-3 right-3 text-xs text-cyan-400 bg-[#050a14]/80 border border-cyan-400/30 px-2 py-1 rounded-full font-semibold">
                  {item.label}
                </span>
              </div>
              <div className="p-5">
                <h3 id={item.titleId} className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
