import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-cell',
    imgId: 'explore-img-cell-a1b2c3',
    titleId: 'explore-title-cell',
    descId: 'explore-desc-cell',
    tag: 'Biology',
    title: 'Living Cells',
    desc: 'Every living organism is built from cells — the fundamental units of life. Under the microscope, these tiny structures reveal an astonishing complexity of organelles, membranes, and molecular machinery.',
  },
  {
    id: 'feat-crystal',
    imgId: 'explore-img-crystal-d4e5f6',
    titleId: 'explore-title-crystal',
    descId: 'explore-desc-crystal',
    tag: 'Mineralogy',
    title: 'Crystal Structures',
    desc: 'Minerals and salts form breathtaking geometric patterns at the microscopic scale. Polarized light microscopy transforms ordinary crystals into kaleidoscopic masterpieces of color and symmetry.',
  },
  {
    id: 'feat-bacteria',
    imgId: 'explore-img-bacteria-g7h8i9',
    titleId: 'explore-title-bacteria',
    descId: 'explore-desc-bacteria',
    tag: 'Microbiology',
    title: 'Microorganisms',
    desc: 'Bacteria, fungi, and protozoa inhabit every corner of our world. These microscopic life forms are the architects of ecosystems, driving nutrient cycles and shaping the biosphere.',
  },
];

export default function ExploreSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-24 md:py-36 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400 mb-4">
            What We Explore
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Worlds Within Worlds
          </h2>
          <p className="text-[#7fb3c8] text-lg max-w-2xl mx-auto leading-relaxed">
            The microscopic realm is not empty space — it is teeming with structure, beauty, and life that defies imagination.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="group rounded-2xl overflow-hidden border border-cyan-900/40 bg-[#0d1a24] hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(0,212,255,0.15)] transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={feat.title}
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.descId}] [${feat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a24] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
                  {feat.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 id={feat.titleId} className="text-xl font-bold text-white mb-3">
                  {feat.title}
                </h3>
                <p id={feat.descId} className="text-[#7fb3c8] text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
