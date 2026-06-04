import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    title: 'Bacteria',
    desc: 'Single-celled prokaryotes found in every habitat on Earth, from deep ocean vents to the human gut.',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
    bgColor: 'bg-emerald-400/5',
    titleId: 'feat-bacteria-title',
    descId: 'feat-bacteria-desc',
    imgId: 'feat-bacteria-img-d4e5f6',
  },
  {
    id: 'viruses',
    title: 'Viruses',
    desc: 'Nanoscale entities that blur the line between living and non-living, reshaping ecosystems and evolution.',
    color: 'text-violet-400',
    borderColor: 'border-violet-400/20',
    bgColor: 'bg-violet-400/5',
    titleId: 'feat-viruses-title',
    descId: 'feat-viruses-desc',
    imgId: 'feat-viruses-img-g7h8i9',
  },
  {
    id: 'fungi',
    title: 'Fungi',
    desc: 'The great decomposers and connectors — fungi form vast underground networks that link entire forests.',
    color: 'text-amber-400',
    borderColor: 'border-amber-400/20',
    bgColor: 'bg-amber-400/5',
    titleId: 'feat-fungi-title',
    descId: 'feat-fungi-desc',
    imgId: 'feat-fungi-img-j1k2l3',
  },
];

const HomeFeatured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest">
            Featured Kingdoms
          </span>
          <h2 id="featured-section-title" className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Meet the Microorganisms
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From ancient bacteria to shape-shifting viruses, explore the major kingdoms of microscopic life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`card-hover rounded-2xl border ${cat.borderColor} ${cat.bgColor} bg-[#0a1628] overflow-hidden group`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [featured-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 id={cat.titleId} className={`text-xl font-bold mb-2 ${cat.color}`}>
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-slate-400 text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <Link
                  to="/explore"
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${cat.color} hover:gap-2 transition-all`}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 border border-[#00e5ff]/40 text-[#00e5ff] font-semibold px-8 py-3 rounded-full hover:bg-[#00e5ff]/10 transition-all"
          >
            Explore All Kingdoms <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
