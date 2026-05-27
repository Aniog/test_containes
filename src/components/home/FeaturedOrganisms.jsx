import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'bacteria',
    title: 'Bacteria',
    subtitle: 'The Ancient Architects',
    description: 'Single-celled prokaryotes that have shaped Earth\'s atmosphere and enabled all complex life. Found in every environment on the planet.',
    tag: 'Prokaryote',
    tagColor: 'cyan',
    imgId: 'feat-bacteria-mc002',
  },
  {
    id: 'fungi',
    title: 'Fungi',
    subtitle: 'The Hidden Network',
    description: 'Mycelial networks spanning entire forests, decomposers that recycle nutrients, and the source of life-saving medicines.',
    tag: 'Eukaryote',
    tagColor: 'emerald',
    imgId: 'feat-fungi-mc003',
  },
  {
    id: 'plankton',
    title: 'Plankton',
    subtitle: 'Ocean\'s Heartbeat',
    description: 'Microscopic drifters that produce half of Earth\'s oxygen and form the foundation of marine food webs.',
    tag: 'Marine',
    tagColor: 'violet',
    imgId: 'feat-plankton-mc004',
  },
];

const tagStyles = {
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
};

const FeaturedOrganisms = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Featured</span>
        <h2 id="featured-heading" className="font-grotesk font-bold text-3xl md:text-4xl text-white mt-3 mb-4">
          Meet the Microorganisms
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Billions of years of evolution packed into forms too small to see — yet powerful enough to shape our world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {organisms.map((org) => (
          <div
            key={org.id}
            className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden bg-slate-800">
              <img
                alt={org.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-strk-img-id={org.imgId}
                data-strk-img={`[${org.id}-desc] [${org.id}-title] [featured-heading]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <span className={`absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full border ${tagStyles[org.tagColor]}`}>
                {org.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{org.subtitle}</p>
              <h3 id={`${org.id}-title`} className="font-grotesk font-bold text-xl text-white mb-3">{org.title}</h3>
              <p id={`${org.id}-desc`} className="text-slate-400 text-sm leading-relaxed mb-5">{org.description}</p>
              <Link
                to="/explore"
                className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors group/link"
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedOrganisms;
