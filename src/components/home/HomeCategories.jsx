import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Zap, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'plant',
    icon: Leaf,
    label: 'Domain I',
    title: 'Plant Anatomy & Histology',
    description:
      'Explore the geometric precision of plant cell walls, vascular bundles, and the elegant architecture of xylem and phloem transport systems.',
    accent: '#10B981',
    accentClass: 'text-bio-green',
    borderClass: 'border-bio-green/20 hover:border-bio-green/50',
    bgClass: 'bg-bio-green/5',
    iconBg: 'bg-bio-green/10',
    imgId: 'cat-plant-mc002',
    imgQuery: '[cat-plant-title] plant histology cross section microscope',
    path: '/specimens#plant',
  },
  {
    id: 'protists',
    icon: Zap,
    label: 'Domain II',
    title: 'Protists & Single-Celled Organisms',
    description:
      'Witness the astonishing complexity of single-celled life — from the cilia-driven locomotion of Paramecia to the cryptobiotic resilience of Tardigrades.',
    accent: '#06B6D4',
    accentClass: 'text-cyan-400',
    borderClass: 'border-cyan-400/20 hover:border-cyan-400/50',
    bgClass: 'bg-cyan-400/5',
    iconBg: 'bg-cyan-400/10',
    imgId: 'cat-protist-mc003',
    imgQuery: '[cat-protist-title] paramecium amoeba microscope darkfield',
    path: '/specimens#protists',
  },
  {
    id: 'human',
    icon: Heart,
    label: 'Domain III',
    title: 'Human Tissues & Pathology',
    description:
      'Examine the cellular canvas of human biology — stained blood smears, tissue sections, and the diagnostic power of histopathological analysis.',
    accent: '#F97316',
    accentClass: 'text-phosphor',
    borderClass: 'border-phosphor/20 hover:border-phosphor/50',
    bgClass: 'bg-phosphor/5',
    iconBg: 'bg-phosphor/10',
    imgId: 'cat-human-mc004',
    imgQuery: '[cat-human-title] blood smear red blood cells microscope stained',
    path: '/specimens#cytology',
  },
];

export default function HomeCategories() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-28 px-6 lg:px-8 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-bio-green" />
              <span className="font-mono text-xs tracking-widest uppercase text-bio-green">
                Specimen Domains
              </span>
            </div>
            <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-100 leading-tight">
              Three Kingdoms
              <br />
              <span className="text-slate-500">Under the Lens</span>
            </h2>
          </div>
          <p className="font-inter text-slate-400 text-base leading-relaxed max-w-sm">
            Each domain represents a distinct branch of microscopy, from botanical architecture to the cellular machinery of human life.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to={cat.path}
                className={`group relative rounded-2xl border ${cat.borderClass} bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={cat.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={cat.imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  {/* Domain label */}
                  <div className="absolute top-4 left-4">
                    <span className={`font-mono text-xs tracking-widest uppercase ${cat.accentClass} ${cat.bgClass} px-3 py-1 rounded-full border border-current/20`}>
                      {cat.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${cat.accentClass}`} />
                  </div>
                  <h3
                    id={`cat-${cat.id}-title`}
                    className="font-grotesk font-semibold text-xl text-slate-100 mb-3 leading-snug"
                  >
                    {cat.title}
                  </h3>
                  <p className="font-inter text-slate-400 text-sm leading-relaxed mb-5">
                    {cat.description}
                  </p>
                  <div className={`flex items-center gap-2 ${cat.accentClass} text-sm font-grotesk font-medium`}>
                    Explore Domain
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
