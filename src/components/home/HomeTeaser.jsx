import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    title: 'Bacteria',
    description: 'Single-celled prokaryotes that thrive in every environment on Earth.',
    color: 'text-[#00d4c8]',
    badge: 'bg-[#00d4c8]/15 text-[#00d4c8] border-[#00d4c8]/30',
    imgId: 'teaser-bacteria-d4e5f6',
    titleId: 'teaser-bacteria-title',
    descId: 'teaser-bacteria-desc',
  },
  {
    id: 'viruses',
    title: 'Viruses',
    description: 'Nanoscale entities that hijack living cells to replicate and spread.',
    color: 'text-violet-400',
    badge: 'bg-violet-400/15 text-violet-400 border-violet-400/30',
    imgId: 'teaser-viruses-g7h8i9',
    titleId: 'teaser-viruses-title',
    descId: 'teaser-viruses-desc',
  },
  {
    id: 'fungi',
    title: 'Fungi',
    description: 'Decomposers and symbionts that form vast underground networks.',
    color: 'text-green-400',
    badge: 'bg-green-400/15 text-green-400 border-green-400/30',
    imgId: 'teaser-fungi-j1k2l3',
    titleId: 'teaser-fungi-title',
    descId: 'teaser-fungi-desc',
  },
];

const HomeTeaser = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 sm:px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#00d4c8] mb-3 block">
            Categories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Meet the Inhabitants
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Explore the major kingdoms of microscopic life, each with its own extraordinary biology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#0f1f38] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/70 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] microscopic organism`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border ${cat.badge}`}>
                  {cat.title}
                </span>
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-slate-50 font-bold text-xl mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-slate-400 text-sm leading-relaxed mb-4">{cat.description}</p>
                <Link
                  to="/explore"
                  className={`flex items-center gap-1 text-sm font-medium ${cat.color} hover:gap-2 transition-all`}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#00d4c8]/40 text-[#00d4c8] font-semibold hover:bg-[#00d4c8]/10 transition"
          >
            Explore All Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTeaser;
