import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featuredOrganisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    classification: 'Phylum Tardigrada',
    description: 'Nearly indestructible micro-animals that survive in the vacuum of space, extreme radiation, and boiling water.',
    titleId: 'featured-tardigrade-title',
    descId: 'featured-tardigrade-desc',
    imgId: 'featured-img-tardigrade-a1b2',
    color: 'teal',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    classification: 'Class Bacillariophyceae',
    description: 'Microscopic algae encased in intricate glass-like silica shells, producing 20% of Earth\'s oxygen.',
    titleId: 'featured-diatom-title',
    descId: 'featured-diatom-desc',
    imgId: 'featured-img-diatom-c3d4',
    color: 'cyan',
  },
  {
    id: 'radiolaria',
    name: 'Radiolaria',
    classification: 'Phylum Radiolaria',
    description: 'Ancient ocean-dwelling protists with stunning geometric mineral skeletons that inspired Art Nouveau.',
    titleId: 'featured-radiolaria-title',
    descId: 'featured-radiolaria-desc',
    imgId: 'featured-img-radiolaria-e5f6',
    color: 'purple',
  },
];

const colorMap = {
  teal: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  purple: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
};

const HomeFeatured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-3 block">Featured Organisms</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Meet the Micro-Wonders
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From indestructible water bears to glass-armored algae — the microbial world is stranger than fiction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredOrganisms.map((org) => (
            <div
              key={org.id}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>
              <div className="p-6">
                <span className={`inline-block text-xs font-mono px-2 py-1 rounded-full border mb-3 ${colorMap[org.color]}`}>
                  {org.classification}
                </span>
                <h3 id={org.titleId} className="text-xl font-semibold text-slate-100 mb-2">{org.name}</h3>
                <p id={org.descId} className="text-slate-400 text-sm leading-relaxed">{org.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors"
          >
            View all organisms
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
