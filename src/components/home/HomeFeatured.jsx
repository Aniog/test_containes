import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredOrganisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    scientificName: 'Ramazzottius oberhaeuseri',
    description: 'Nearly indestructible micro-animals that can survive the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C.',
    category: 'Micro-animal',
    titleId: 'home-feat-tardigrade-title',
    descId: 'home-feat-tardigrade-desc',
    imgId: 'home-feat-tardigrade-img-d4e5f6',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    scientificName: 'Coscinodiscus radiatus',
    description: 'Single-celled algae encased in intricate glass-like shells called frustules, responsible for 20% of Earth\'s oxygen production.',
    category: 'Algae',
    titleId: 'home-feat-diatom-title',
    descId: 'home-feat-diatom-desc',
    imgId: 'home-feat-diatom-img-g7h8i9',
  },
  {
    id: 'radiolaria',
    name: 'Radiolaria',
    scientificName: 'Aulacantha scolymantha',
    description: 'Ancient ocean-dwelling protozoa with stunning geometric mineral skeletons that inspired Art Nouveau architecture.',
    category: 'Protozoa',
    titleId: 'home-feat-radiolaria-title',
    descId: 'home-feat-radiolaria-desc',
    imgId: 'home-feat-radiolaria-img-j1k2l3',
  },
];

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
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              Featured Organisms
            </div>
            <h2 id="featured-section-title" className="text-3xl md:text-4xl font-bold text-slate-100">
              Meet the Micro-World
            </h2>
            <p className="text-slate-400 mt-2 max-w-lg">
              Extraordinary creatures invisible to the naked eye, yet fundamental to all life on Earth.
            </p>
          </div>
          <Link
            to="/explore"
            className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium text-sm transition-colors shrink-0"
          >
            View all organisms
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredOrganisms.map((org) => (
            <article
              key={org.id}
              className="group bg-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/50 hover:bg-slate-800/80 transition-all duration-300 shadow-lg shadow-black/30"
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [featured-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <span className="absolute top-3 left-3 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {org.category}
                </span>
              </div>
              <div className="p-5">
                <h3 id={org.titleId} className="text-lg font-semibold text-slate-100 mb-0.5">
                  {org.name}
                </h3>
                <p className="text-xs font-mono italic text-teal-400 mb-3">{org.scientificName}</p>
                <p id={org.descId} className="text-sm text-slate-400 leading-relaxed">
                  {org.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
