import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    title: 'Bacteria',
    description: 'Single-celled prokaryotes that are among the oldest life forms on Earth, found in every habitat imaginable.',
    tag: 'Prokaryote',
    color: 'from-cyan-500/20 to-teal-500/10',
    border: 'border-cyan-500/30',
    tagColor: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/30',
    imgId: 'feat-bacteria-img-d4e5f6',
    titleId: 'feat-bacteria-title',
    descId: 'feat-bacteria-desc',
  },
  {
    id: 'cells',
    title: 'Human Cells',
    description: 'The fundamental building blocks of life — each cell a universe of its own, with organelles working in perfect harmony.',
    tag: 'Eukaryote',
    color: 'from-violet-500/20 to-purple-500/10',
    border: 'border-violet-500/30',
    tagColor: 'bg-violet-400/10 text-violet-400 border-violet-400/30',
    imgId: 'feat-cells-img-g7h8i9',
    titleId: 'feat-cells-title',
    descId: 'feat-cells-desc',
  },
  {
    id: 'viruses',
    title: 'Viruses',
    description: 'Nanoscale entities that blur the line between living and non-living, reshaping ecosystems and evolution itself.',
    tag: 'Nanoscale',
    color: 'from-rose-500/20 to-pink-500/10',
    border: 'border-rose-500/30',
    tagColor: 'bg-rose-400/10 text-rose-400 border-rose-400/30',
    imgId: 'feat-viruses-img-j1k2l3',
    titleId: 'feat-viruses-title',
    descId: 'feat-viruses-desc',
  },
];

export default function HomeFeatured() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-cosmos-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Featured Worlds</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-50 mt-3 mb-4">
            Life at Every Scale
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From the tiniest virus to complex multicellular organisms, the microscopic world is teeming with diversity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`group relative bg-cosmos-navy rounded-2xl border ${cat.border} overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent`} />
                <span className={`absolute top-3 left-3 text-xs font-mono px-3 py-1 rounded-full border ${cat.tagColor}`}>
                  {cat.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 id={cat.titleId} className="font-heading font-semibold text-xl text-slate-50 mb-2">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-slate-400 text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>
                <Link
                  to="/explore"
                  className="flex items-center gap-1.5 text-cyan-400 text-sm font-medium hover:gap-2.5 transition-all duration-200 group/link"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
