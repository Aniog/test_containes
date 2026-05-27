import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const organisms = [
  {
    id: 'bacteria',
    tag: 'Prokaryote',
    title: 'Bacteria',
    desc: 'Single-celled organisms without a nucleus, found in every habitat on Earth. Some are essential for life; others cause disease.',
    color: 'teal',
  },
  {
    id: 'virus',
    tag: 'Acellular',
    title: 'Viruses',
    desc: 'Microscopic agents that replicate only inside living cells. They drive evolution and are the most abundant biological entities.',
    color: 'cyan',
  },
  {
    id: 'fungi',
    tag: 'Eukaryote',
    title: 'Fungi',
    desc: 'From yeasts to molds, fungi are nature\'s recyclers — breaking down organic matter and forming vital symbioses with plants.',
    color: 'emerald',
  },
  {
    id: 'protozoa',
    tag: 'Protist',
    title: 'Protozoa',
    desc: 'Complex single-celled eukaryotes that hunt, swim, and even form colonies. The predators of the microbial world.',
    color: 'purple',
  },
];

const colorMap = {
  teal: { tag: 'bg-teal-500/10 text-teal-400 border-teal-500/30', border: 'hover:border-teal-500/60', glow: 'hover:shadow-teal-900/40' },
  cyan: { tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30', border: 'hover:border-cyan-500/60', glow: 'hover:shadow-cyan-900/40' },
  emerald: { tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', border: 'hover:border-emerald-500/60', glow: 'hover:shadow-emerald-900/40' },
  purple: { tag: 'bg-purple-500/10 text-purple-400 border-purple-500/30', border: 'hover:border-purple-500/60', glow: 'hover:shadow-purple-900/40' },
};

export default function HomeFeatures() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-4 block">
            The Kingdoms of the Micro World
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
            Meet the Inhabitants
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Billions of years before humans, microorganisms ruled the Earth. They still do.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {organisms.map((org) => {
            const c = colorMap[org.color];
            return (
              <div
                key={org.id}
                className={`group bg-slate-900 border border-slate-700 ${c.border} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${c.glow} flex flex-col`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={org.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={`home-feature-${org.id}-d4e5f6`}
                    data-strk-img={`[feature-desc-${org.id}] [feature-title-${org.id}] microscopy microorganism`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className={`inline-block text-xs font-mono uppercase tracking-widest border px-3 py-1 rounded-full mb-3 w-fit ${c.tag}`}>
                    {org.tag}
                  </span>
                  <h3 id={`feature-title-${org.id}`} className="text-xl font-semibold text-slate-100 mb-2">
                    {org.title}
                  </h3>
                  <p id={`feature-desc-${org.id}`} className="text-slate-400 text-sm leading-relaxed flex-1">
                    {org.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 border border-teal-500/50 text-teal-400 hover:bg-teal-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-200"
          >
            Explore All Organisms
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
