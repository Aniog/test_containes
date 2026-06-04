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
    categoryColor: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
    title: 'Tardigrade',
    desc: 'The indestructible "water bear" — survives in outer space, extreme radiation, and the deepest ocean trenches.',
  },
  {
    id: 'diatom',
    titleId: 'feat-diatom-title',
    descId: 'feat-diatom-desc',
    imgId: 'feat-img-diatom-c3d4',
    category: 'Algae',
    categoryColor: 'text-teal-300 bg-teal-500/10 border-teal-500/20',
    title: 'Diatom',
    desc: 'Microscopic algae with intricate glass-like silica shells, responsible for 20% of Earth\'s oxygen production.',
  },
  {
    id: 'vorticella',
    titleId: 'feat-vorticella-title',
    descId: 'feat-vorticella-desc',
    imgId: 'feat-img-vorticella-e5f6',
    category: 'Protozoa',
    categoryColor: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
    title: 'Vorticella',
    desc: 'A bell-shaped protozoan that contracts its stalk at lightning speed — one of nature\'s fastest movements.',
  },
];

const HomeFeatured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-medium px-4 py-2 rounded-full mb-4">
            Featured Organisms
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-100 mb-4">
            Meet the Microscopic Marvels
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From indestructible extremophiles to oxygen-producing algae, the microbial world is full of extraordinary life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <article
              key={item.id}
              className="bg-[#0d1526] border border-cyan-500/15 rounded-2xl overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-transparent to-transparent" />
                <span className={`absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full border ${item.categoryColor}`}>
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <h3 id={item.titleId} className="font-display font-semibold text-xl text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/50 px-6 py-3 rounded-full transition-all text-sm font-medium"
          >
            View All Organisms
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
