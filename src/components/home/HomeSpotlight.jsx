import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightOrganisms = [
  {
    id: 'tardigrade',
    name: 'Tardigrade',
    nickname: 'Water Bear',
    fact: 'Can survive in the vacuum of space and withstand radiation 1,000× lethal to humans.',
    tag: 'Extremophile',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    titleId: 'spotlight-tardigrade-title',
    descId: 'spotlight-tardigrade-desc',
    imgId: 'spotlight-img-tardigrade-a1b2',
  },
  {
    id: 'diatom',
    name: 'Diatom',
    nickname: 'Glass Algae',
    fact: 'Produces 20% of Earth\'s oxygen and builds intricate glass shells with nanoscale precision.',
    tag: 'Algae',
    tagColor: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
    titleId: 'spotlight-diatom-title',
    descId: 'spotlight-diatom-desc',
    imgId: 'spotlight-img-diatom-c3d4',
  },
  {
    id: 'mycelium',
    name: 'Mycelium',
    nickname: 'Wood Wide Web',
    fact: 'Fungal networks connect entire forests, transferring nutrients and chemical signals between trees.',
    tag: 'Fungi',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    titleId: 'spotlight-mycelium-title',
    descId: 'spotlight-mycelium-desc',
    imgId: 'spotlight-img-mycelium-e5f6',
  },
];

export default function HomeSpotlight() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-cyan-400 text-xs font-medium font-mono-label tracking-widest uppercase mb-4 block">
              Organism Spotlight
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
              Meet the Micro-Marvels
            </h2>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium hover:gap-3 transition-all duration-200 shrink-0"
          >
            View all organisms <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spotlightOrganisms.map((org) => (
            <div
              key={org.id}
              className="bg-[#050d1a] border border-cyan-900/40 rounded-2xl overflow-hidden card-glow transition-all duration-300 hover:border-cyan-400/40 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={org.name}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full border ${org.tagColor}`}>
                  {org.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-1">
                  <h3 id={org.titleId} className="text-slate-50 font-bold text-xl">{org.name}</h3>
                  <span className="text-cyan-400 text-xs font-mono-label">{org.nickname}</span>
                </div>
                <p id={org.descId} className="text-slate-400 text-sm leading-relaxed mt-2">{org.fact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
