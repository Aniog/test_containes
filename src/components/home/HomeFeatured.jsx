import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featured = [
  {
    id: 'tardigrade',
    titleId: 'feat-tardigrade-title',
    descId: 'feat-tardigrade-desc',
    imgId: 'feat-img-tardigrade-a1b2',
    category: 'Extremophile',
    title: 'Tardigrades: The Indestructible',
    desc: 'These microscopic animals survive in outer space, boiling water, and the vacuum of a nuclear blast. Meet the toughest creature on Earth.',
    color: 'teal',
  },
  {
    id: 'mycelium',
    titleId: 'feat-mycelium-title',
    descId: 'feat-mycelium-desc',
    imgId: 'feat-img-mycelium-c3d4',
    category: 'Fungi',
    title: 'The Wood Wide Web',
    desc: 'Beneath every forest floor lies a vast fungal network connecting trees, sharing nutrients, and sending chemical signals across miles.',
    color: 'cyan',
  },
  {
    id: 'phage',
    titleId: 'feat-phage-title',
    descId: 'feat-phage-desc',
    imgId: 'feat-img-phage-e5f6',
    category: 'Virus',
    title: 'Bacteriophages: Nature\'s Assassins',
    desc: 'Viruses that hunt and destroy bacteria with surgical precision — and may be our best weapon against antibiotic-resistant superbugs.',
    color: 'purple',
  },
];

const colorMap = {
  teal: { badge: 'bg-teal-500/20 text-teal-300 border-teal-500/30', border: 'hover:border-teal-500/50' },
  cyan: { badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30', border: 'hover:border-cyan-500/50' },
  purple: { badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30', border: 'hover:border-purple-500/50' },
};

const HomeFeatured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">Featured</span>
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-slate-100 mt-2">
              Stories from the Micro World
            </h2>
          </div>
          <Link
            to="/explore"
            className="flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors group"
          >
            View all organisms
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item) => {
            const colors = colorMap[item.color];
            return (
              <article
                key={item.id}
                className={`bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 ${colors.border} hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 group`}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-3 ${colors.badge}`}>
                    {item.category}
                  </span>
                  <h3 id={item.titleId} className="font-grotesk font-semibold text-lg text-slate-100 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p id={item.descId} className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <Link
                    to="/explore"
                    className="inline-flex items-center gap-1.5 mt-4 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
