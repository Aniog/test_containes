import { Link } from 'react-router-dom';
import { Leaf, Droplets, Activity, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'plant',
    icon: Leaf,
    accentColor: 'emerald',
    label: 'Domain I',
    title: 'Plant Anatomy & Histology',
    description:
      'Investigate the architectural precision of plant tissues — from the geometric regularity of parenchyma cells to the intricate vascular bundles of xylem and phloem. Explore how structural organization dictates physiological function.',
    tags: ['Xylem', 'Phloem', 'Epidermis', 'Meristem'],
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80',
    path: '/specimens#plant',
  },
  {
    id: 'protists',
    icon: Droplets,
    accentColor: 'cyan',
    label: 'Domain II',
    title: 'Protists & Single-Celled Organisms',
    description:
      'Enter the micro-zoo — a realm where single cells exhibit behaviors of extraordinary complexity. Observe Paramecia navigating via cilia, Amoebae reshaping their cytoplasm, and Tardigrades surviving conditions lethal to all other life.',
    tags: ['Paramecium', 'Amoeba', 'Tardigrade', 'Euglena'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
    path: '/specimens#protists',
  },
  {
    id: 'cytology',
    icon: Activity,
    accentColor: 'orange',
    label: 'Domain III',
    title: 'Human Tissues & Pathology',
    description:
      'Examine the cellular canvas of the human body through the lens of clinical pathology. Analyze blood smears, identify erythrocyte morphology, and understand how differential staining techniques reveal diagnostic information invisible to the naked eye.',
    tags: ['Erythrocytes', 'Neutrophils', 'H&E Stain', 'Cytology'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    path: '/specimens#cytology',
  },
];

const accentMap = {
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-400/60',
    label: 'text-emerald-400',
    tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    arrow: 'text-emerald-400 group-hover:text-emerald-300',
    glow: 'hover:shadow-emerald-500/5',
    bar: 'bg-emerald-400',
  },
  cyan: {
    border: 'border-cyan-500/30 hover:border-cyan-400/60',
    label: 'text-cyan-400',
    tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    arrow: 'text-cyan-400 group-hover:text-cyan-300',
    glow: 'hover:shadow-cyan-500/5',
    bar: 'bg-cyan-400',
  },
  orange: {
    border: 'border-orange-500/30 hover:border-orange-400/60',
    label: 'text-orange-400',
    tag: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    arrow: 'text-orange-400 group-hover:text-orange-300',
    glow: 'hover:shadow-orange-500/5',
    bar: 'bg-orange-400',
  },
};

export default function CategoryCards() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-[#090D16]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-emerald-400" />
            <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
              Domains of Study
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-slate-100 max-w-md">
              Three Kingdoms,<br />One Microscope
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Navigate through the principal domains of biological microscopy, each revealing a distinct layer of life's complexity.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => {
            const accent = accentMap[cat.accentColor];
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to={cat.path}
                className={`group relative bg-[#0E1520] border ${accent.border} transition-all duration-400 hover:shadow-xl ${accent.glow} flex flex-col overflow-hidden`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1520] via-[#0E1520]/40 to-transparent" />
                  {/* Domain label badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`font-mono text-[9px] tracking-widest uppercase ${accent.label} bg-[#090D16]/80 backdrop-blur-sm px-2 py-1 border border-current/20`}>
                      {cat.label}
                    </span>
                  </div>
                  {/* Icon */}
                  <div className="absolute bottom-4 right-4">
                    <Icon className={`w-5 h-5 ${accent.label} opacity-60`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7">
                  {/* Accent bar */}
                  <div className={`w-8 h-px ${accent.bar} mb-5`} />

                  <h3 className="text-slate-100 font-semibold text-base tracking-wide mb-3 leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                    {cat.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] font-mono tracking-widest uppercase px-2 py-1 border ${accent.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 text-xs tracking-widest uppercase font-medium ${accent.arrow} transition-all duration-300`}>
                    <span>Explore Domain</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
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
