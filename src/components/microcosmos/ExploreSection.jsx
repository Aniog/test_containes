import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', desc: 'More than all stars in the observable universe' },
  { value: '37T', label: 'Cells in Human Body', desc: 'Each one a universe of its own complexity' },
  { value: '0.001mm', label: 'Smallest Bacterium', desc: 'Mycoplasma genitalium, barely visible' },
  { value: '4B yrs', label: 'Microbial History', desc: 'Life began as single-celled organisms' },
];

const features = [
  {
    id: 'feat-1',
    title: 'Bacterial Colonies',
    desc: 'Intricate patterns formed by billions of bacteria growing in coordinated communities',
    imgId: 'explore-img-mc002',
    titleId: 'explore-feat-1-title',
    descId: 'explore-feat-1-desc',
  },
  {
    id: 'feat-2',
    title: 'Cell Division',
    desc: 'The miraculous process of mitosis captured at the microscopic scale',
    imgId: 'explore-img-mc003',
    titleId: 'explore-feat-2-title',
    descId: 'explore-feat-2-desc',
  },
  {
    id: 'feat-3',
    title: 'Viral Structures',
    desc: 'Geometric precision of viruses — nature\'s most elegant and dangerous architects',
    imgId: 'explore-img-mc004',
    titleId: 'explore-feat-3-title',
    descId: 'explore-feat-3-desc',
  },
];

const ExploreSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-24 px-6 md:px-12 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-teal text-sm font-semibold tracking-widest uppercase mb-3 block">
            What Lies Beneath
          </span>
          <h2 id="explore-title" className="text-3xl md:text-5xl font-black text-cosmos-text mb-4">
            Explore the Invisible
          </h2>
          <p id="explore-subtitle" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            Every drop of water, every breath of air, every surface you touch — teeming with microscopic life of staggering diversity.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-cosmos-surface border border-cosmos-teal/20 rounded-2xl p-6 text-center hover:border-cosmos-teal/40 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-black text-cosmos-teal mb-1">{stat.value}</div>
              <div className="text-cosmos-text text-sm font-semibold mb-1">{stat.label}</div>
              <div className="text-cosmos-dim text-xs leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Feature cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="group bg-cosmos-card border border-cosmos-teal/20 rounded-2xl overflow-hidden hover:border-cosmos-teal/50 hover:shadow-[0_0_40px_rgba(0,212,200,0.12)] transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={feat.title}
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[${feat.descId}] [${feat.titleId}] [explore-subtitle] [explore-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ opacity: 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 id={feat.titleId} className="text-cosmos-text text-xl font-bold mb-2">{feat.title}</h3>
                <p id={feat.descId} className="text-cosmos-muted text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
