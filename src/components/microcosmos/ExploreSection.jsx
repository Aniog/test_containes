import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'feat-cells',
    imgId: 'explore-img-cells-d4e5f6',
    titleId: 'explore-title-cells',
    descId: 'explore-desc-cells',
    title: 'Living Cells',
    desc: 'Witness the intricate machinery of life — organelles, membranes, and the constant motion that sustains every living organism on Earth.',
    tag: 'Biology',
    tagColor: 'text-cosmos-emerald border-cosmos-emerald/30 bg-cosmos-emerald/10',
  },
  {
    id: 'feat-crystals',
    imgId: 'explore-img-crystals-g7h8i9',
    titleId: 'explore-title-crystals',
    descId: 'explore-desc-crystals',
    title: 'Crystal Structures',
    desc: 'Minerals and compounds form breathtaking geometric patterns at the microscopic scale — nature\'s own architecture revealed in stunning detail.',
    tag: 'Chemistry',
    tagColor: 'text-cosmos-amber border-cosmos-amber/30 bg-cosmos-amber/10',
  },
  {
    id: 'feat-bacteria',
    imgId: 'explore-img-bacteria-j1k2l3',
    titleId: 'explore-title-bacteria',
    descId: 'explore-desc-bacteria',
    title: 'Microbial Life',
    desc: 'Bacteria, fungi, and protozoa — the ancient rulers of Earth. These microscopic organisms shaped our planet long before complex life emerged.',
    tag: 'Microbiology',
    tagColor: 'text-cosmos-cyan border-cosmos-cyan/30 bg-cosmos-cyan/10',
  },
];

export default function ExploreSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-cosmos-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-cyan text-xs font-semibold uppercase tracking-widest">
            What Awaits You
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-4">
            Worlds Within Worlds
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every drop of water, every grain of soil, every breath of air teems
            with life and structure beyond imagination.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="group bg-cosmos-card border border-cosmos-cyan/10 rounded-2xl overflow-hidden hover:border-cosmos-cyan/40 hover:shadow-xl hover:shadow-cosmos-cyan/5 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={feat.title}
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.descId}] [${feat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span
                  className={`inline-block text-xs font-semibold border rounded-full px-3 py-1 mb-3 ${feat.tagColor}`}
                >
                  {feat.tag}
                </span>
                <h3 id={feat.titleId} className="text-xl font-bold text-white mb-2">
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
}
