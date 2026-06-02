import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    title: 'Bacteria',
    description: 'Single-celled prokaryotes that colonize every environment on Earth.',
    count: '1,000+ species',
    color: 'from-cyan-500/20 to-transparent',
    badge: 'text-cosmos-cyan bg-cyan-400/10 border-cyan-400/20',
    imgId: 'home-cat-bacteria-img-a1b2c3',
    titleId: 'home-cat-bacteria-title',
    descId: 'home-cat-bacteria-desc',
  },
  {
    id: 'viruses',
    title: 'Viruses',
    description: 'Nanoscale entities that blur the boundary between living and non-living.',
    count: '6,000+ types',
    color: 'from-violet-500/20 to-transparent',
    badge: 'text-cosmos-violet bg-violet-400/10 border-violet-400/20',
    imgId: 'home-cat-viruses-img-d4e5f6',
    titleId: 'home-cat-viruses-title',
    descId: 'home-cat-viruses-desc',
  },
  {
    id: 'cells',
    title: 'Cells',
    description: 'The fundamental units of life — complex machines of extraordinary precision.',
    count: '200+ cell types',
    color: 'from-teal-500/20 to-transparent',
    badge: 'text-cosmos-teal bg-teal-400/10 border-teal-400/20',
    imgId: 'home-cat-cells-img-g7h8i9',
    titleId: 'home-cat-cells-title',
    descId: 'home-cat-cells-desc',
  },
];

const FeaturedCategories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-cosmos-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(167,139,250,0.06)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cosmos-cyan text-xs font-medium px-4 py-2 rounded-full mb-6">
              Featured Categories
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-50">
              Explore by Kingdom
            </h2>
          </div>
          <Link
            to="/explore"
            className="flex items-center gap-2 text-cosmos-cyan text-sm font-medium hover:gap-3 transition-all duration-200 shrink-0"
          >
            View all categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/explore"
              className="group relative bg-cosmos-dark border border-cyan-900/30 rounded-2xl overflow-hidden hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] microscopic`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-transparent`} />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 id={cat.titleId} className="font-heading font-semibold text-slate-50 text-xl">
                    {cat.title}
                  </h3>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${cat.badge}`}>
                    {cat.count}
                  </span>
                </div>
                <p id={cat.descId} className="text-slate-400 text-sm leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-cosmos-cyan text-sm font-medium group-hover:gap-3 transition-all duration-200">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
